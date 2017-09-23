import React, { Component } from 'react'
import { Link } from 'react-router'
var SpotifyWebApi = require('spotify-web-api-node')
var spotifyApi = new SpotifyWebApi()

import { browserHistory } from 'react-router'

import Nav from './Nav'
import MusicBar from './MusicBar'

class App extends Component {
  state = {
    token: '',
    user: '',
    playlists: '',
    privatePlaylists: '',
    featuredPlaylists: '',
    tracklist: '',
    activeTrack: '',
    playing: false,
    playedTime: 0,
    seeking: false,
    displayMusicBar: false,
    activePlaylist: '',
    latestPlayed: [],
    queuedTracks: []
  }

  componentDidMount() {
    console.log(localStorage.getItem('token'))
    if (
      !localStorage.getItem('token') ||
      (localStorage.getItem('token') !==
        this.props.location.hash.slice(14, -34) &&
        this.props.location.hash)
    ) {
      console.log('Ny token')
      let newHash = this.props.location.hash.slice(14, -34)
      localStorage.setItem('token', newHash)
    }
    spotifyApi.setAccessToken(localStorage.getItem('token'))
    this.getMe()
  }
  getPlaylists() {
    spotifyApi.getUserPlaylists(this.state.user.id).then(data => {
      this.onClickPlaylist(data.body.items[0].owner.id, data.body.items[0].id)
      this.setActivePlaylist(data.body.items[0].id)
      this.getPrivatePlaylists(data.body.items)
      this.setState({ playlists: data.body.items }, () =>
        browserHistory.replace('/app/stream')
      )
    }, function(err) {
      console.log('Something went wrong getting playlists!', err)
    })
    this.getFeaturedPlaylists(new Date().toISOString())
  }
  getPrivatePlaylists = playlists => {
    let privatePlaylists = []
    playlists.map(playlist => {
      if (
        playlist.collaborative === true ||
        playlist.owner.id === this.state.user.id
      ) {
        privatePlaylists.push(playlist)
      }
    })
    this.setState({ privatePlaylists })
  }
  getMe() {
    spotifyApi.getMe().then(data => {
      this.setState({ user: data.body }, () => this.getPlaylists())
    }, function(err) {
      console.log('Something went wrong getting user details!', err)
    })
  }
  onClickPlaylist = (user, id) => {
    spotifyApi.getPlaylist(user, id).then(data => {
      this.setState({ tracklist: data.body })
      window.scrollTo(0, 0)
    }, function(err) {
      console.log('Something went wrong getting clickedtracklist!', err)
    })
  }
  createPlaylist = (name, desc) => {
    spotifyApi
      .createPlaylist(this.state.user.id, name, { public: true })
      .then(
        data => {
          this.getPlaylists()
        },
        function(err) {
          console.log('Something went wrong!', err)
        }
      )
  }
  unfollowActivePlaylist = (user, playlistId) => {
    spotifyApi.unfollowPlaylist(user, playlistId).then(data => {
      this.getPlaylists()
    }, function(err) {
      console.log('Something went wrong!', err)
    })
  }
  deleteActivePlaylist = id => {
    spotifyApi.unfollowPlaylist(this.state.user.id, id).then(data => {
      this.getPlaylists()
    }, function(err) {
      console.log('Something went wrong!', err)
    })
  }
  addTrackToPlaylist = (ownerId, playlistId, spotifyTrackId) => {
    spotifyApi
      .addTracksToPlaylist(this.state.user.id, playlistId, [spotifyTrackId])
      .then(
        data => {
          console.log('Added tracks to playlist!')
        },
        function(err) {
          console.log('Something went wrong!', err)
        }
      )
  }
  addTrackToQueue = track => {
    this.setState({ queuedTracks: [...this.state.queuedTracks, track] })
  }
  getFeaturedPlaylists = time => {
    spotifyApi
      .getFeaturedPlaylists({
        limit: 5,
        offset: 0,
        country: 'SE',
        locale: 'sv_SE',
        timestamp: time
      })
      .then(
        data => {
          this.setState({ featuredPlaylists: data.body.playlists.items })
        },
        function(err) {
          console.log('Something went wrong!', err)
        }
      )
  }
  getTrackAnalysis = id => {
    spotifyApi.getAudioAnalysisForTrack(id).then(
      function(data) {
        console.log(data.body)
      },
      function(err) {
        done(err)
      }
    )
  }
  setActivePlaylist = id => {
    this.setState({ activePlaylist: id })
  }
  setActiveTrack = track => {
    if (this.state.activeTrack.id !== track.id) {
      this.setState({ playedTime: 0 })
      this.setState({ activeTrack: track })
    }
  }
  stopActiveTrack = track => {
    this.setState({ playing: false })
  }
  startActiveTrack = track => {
    this.setState({
      playing: true,
      displayMusicBar: true
    })
    if (this.state.latestPlayed.length > 0) {
      if (this.state.latestPlayed[0].id !== track.id) {
        this.setState({ latestPlayed: [track, ...this.state.latestPlayed] })
      }
    } else {
      this.setState({ latestPlayed: [track] })
    }
  }
  setPlayedTime = playedTime => {
    this.setState({ playedTime: playedTime.played })
  }
  onSeekMouseDown = () => {
    this.setState({ seeking: true })
  }
  onSeekChange = e => {
    this.setState({ playedTime: e })
  }
  onSeekMouseUp = e => {
    this.setState({ seeking: false, playedTime: e })
  }
  zeroTrack = () => {
    this.setState({ playedTime: 0, playing: false })
  }
  render() {
    const childrenWithExtraProp = React.Children.map(
      this.props.children,
      child => {
        return React.cloneElement(child, {
          playlists: this.state.playlists,
          privatePlaylists: this.state.privatePlaylists,
          featuredPlaylists: this.state.featuredPlaylists,
          tracklist: this.state.tracklist,
          onClickPlaylist: this.onClickPlaylist,
          getTrackAnalysis: this.getTrackAnalysis,
          setActiveTrack: this.setActiveTrack,
          stopActiveTrack: this.stopActiveTrack,
          startActiveTrack: this.startActiveTrack,
          activeTrack: this.state.activeTrack,
          playing: this.state.playing,
          playedTime: this.state.playedTime,
          onSeekMouseDown: this.onSeekMouseDown,
          onSeekChange: this.onSeekChange,
          onSeekMouseUp: this.onSeekMouseUp,
          activePlaylist: this.state.activePlaylist,
          setActivePlaylist: this.setActivePlaylist,
          latestPlayed: this.state.latestPlayed,
          queuedTracks: this.state.queuedTracks,
          createPlaylist: this.createPlaylist,
          me: this.state.user,
          unfollowActivePlaylist: this.unfollowActivePlaylist,
          deleteActivePlaylist: this.deleteActivePlaylist,
          addTrackToPlaylist: this.addTrackToPlaylist,
          addTrackToQueue: this.addTrackToQueue
        })
      }
    )
    return (
      <div>
        <Nav user={this.state.user} />
        {childrenWithExtraProp}
        <MusicBar
          activeTrack={this.state.activeTrack}
          playing={this.state.playing}
          startTrack={this.startActiveTrack}
          stopTrack={this.stopActiveTrack}
          setPlayedTime={this.setPlayedTime}
          playedTime={this.state.playedTime}
          seeking={this.state.seeking}
          onSeekMouseDown={this.onSeekMouseDown}
          onSeekChange={this.onSeekChange}
          onSeekMouseUp={this.onSeekMouseUp}
          zeroTrack={this.zeroTrack}
          displayMusicBar={this.state.displayMusicBar}
        />
      </div>
    )
  }
}

export default App
