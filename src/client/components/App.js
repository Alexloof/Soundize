import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

import Nav from './Nav'
import MusicBar from './MusicBar'
import Home from './Home'
import Search from './Search'

var SpotifyWebApi = require('spotify-web-api-node')
var spotifyApi = new SpotifyWebApi()

import {
  BrowserRouter as Router,
  Switch,
  Route,
  IndexRoute,
  history
} from 'react-router-dom'

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
    queuedTracks: [],
    activeTracklist: '',
    activeTrackIndex: '',
    loadingPlaylist: false
  }

  componentWillMount() {
    spotifyApi.setAccessToken(localStorage.getItem('token'))
    this.getMe()
  }
  getPlaylists() {
    spotifyApi.getUserPlaylists(this.state.user.id).then(data => {
      this.onClickPlaylist(data.body.items[0].owner.id, data.body.items[0].id)
      this.setActivePlaylist(data.body.items[0].id)
      this.getPrivatePlaylists(data.body.items)
      this.setState({ playlists: data.body.items })
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
    spotifyApi.getMe().then(
      data => {
        this.setState({ user: data.body }, () => this.getPlaylists())
      },
      err => {
        console.log('Something went wrong getting user details!', err)
        this.props.history.replace('/login')
      }
    )
  }
  onClickPlaylist = (user, id) => {
    this.setState({ loadingPlaylist: true })
    spotifyApi.getPlaylist(user, id).then(data => {
      this.setState({ tracklist: data.body, loadingPlaylist: false })
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
  addTrackToPlaylist = (ownerId, playlistId, spotifyURI) => {
    spotifyApi
      .addTracksToPlaylist(this.state.user.id, playlistId, [spotifyURI])
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
  removeTrackFromQueuedTracks = indexToRemove => {
    let newQueuedTracks = this.state.queuedTracks.filter((track, index) => {
      return index !== indexToRemove
    })
    this.setState({ queuedTracks: newQueuedTracks })
  }
  removeTrackFromPlaylist = (ownerId, playlistId, spotifyURI) => {
    var tracks = [{ uri: spotifyURI }]
    spotifyApi
      .removeTracksFromPlaylist(ownerId, playlistId, tracks)
      .then(
        data => {
          this.setActivePlaylist(playlistId)
          spotifyApi.getPlaylist(ownerId, playlistId).then(data => {
            this.setState({ tracklist: data.body })
          }, function(err) {
            console.log('Something went wrong getting tracklist!', err)
          })
          console.log('Track removed from playlist!')
        },
        function(err) {
          console.log('Something went wrong!', err)
        }
      )
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
  playNextTrack = () => {
    let nextTrack
    let newQueuedTracks = []
    if (this.state.queuedTracks.length > 0) {
      nextTrack = this.state.queuedTracks[0]
      this.state.queuedTracks.map((track, index) => {
        if (index !== 0) {
          newQueuedTracks.push(track)
        }
      })
      this.setState({ queuedTracks: newQueuedTracks })
      if (this.state.latestPlayed[0] === nextTrack) {
        this.zeroTrack()
        this.startActiveTrack(nextTrack)
      } else {
        this.setActiveTrack(
          nextTrack,
          this.state.activeTracklist,
          this.state.activeTrackIndex
        )
      }
    } else {
      this.state.activeTracklist.tracks
        ? (nextTrack = this.state.activeTracklist.tracks.items[
            this.state.activeTrackIndex + 1
          ].track)
        : (nextTrack = this.state.activeTracklist[
            this.state.activeTrackIndex + 1
          ])
      this.setActiveTrack(
        nextTrack,
        this.state.activeTracklist,
        this.state.activeTrackIndex + 1
      )
    }
    if (!nextTrack.preview_url) {
      setTimeout(() => {
        this.playNextTrack()
      }, 500)
    } else {
      this.addTrackToLatestPlayed(nextTrack)
    }
  }
  playPreviousTrack = () => {
    if (this.state.latestPlayed.length > 1) {
      let newTrack = this.state.latestPlayed[1]
      if (newTrack === this.state.activeTrack) {
        newTrack = this.state.latestPlayed[2]
      }
      this.setActiveTrack(newTrack)
      this.setState({ playing: true })
    }
  }
  setActivePlaylist = id => {
    this.setState({ activePlaylist: id })
  }
  setActiveTrack = (track, activeTracklist, index) => {
    let newIndex
    if (index || index === 0) {
      newIndex = index
    } else {
      newIndex = this.state.activeTrackIndex
    }
    if (this.state.activeTrack.id !== track.id) {
      this.setState({
        playedTime: 0,
        activeTrack: track,
        activeTrackIndex: newIndex
      })
    }
    if (this.state.activeTracklist !== activeTracklist && activeTracklist) {
      this.setState({ activeTracklist })
    }
  }
  addTrackToLatestPlayed = track => {
    if (this.state.latestPlayed.length > 0) {
      if (this.state.latestPlayed[0].id !== track.id) {
        this.setState({ latestPlayed: [track, ...this.state.latestPlayed] })
      }
    } else {
      this.setState({ latestPlayed: [track] })
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
    this.addTrackToLatestPlayed(track)
  }
  playVisibleTracklist = () => {
    this.setActiveTrack(
      this.state.tracklist.tracks.items[0].track,
      this.state.tracklist,
      0
    )
    this.startActiveTrack(this.state.tracklist.tracks.items[0].track)
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
    this.setState({ playing: false })
  }
  render() {
    const extraProps = {
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
      addTrackToQueue: this.addTrackToQueue,
      removeTrackFromPlaylist: this.removeTrackFromPlaylist,
      playingPlaylist: this.state.activeTracklist.id,
      removeTrackFromQueuedTracks: this.removeTrackFromQueuedTracks,
      playVisibleTracklist: this.playVisibleTracklist,
      spotifyApi: spotifyApi,
      loadingPlaylist: this.state.loadingPlaylist
    }
    const getProps = props => {
      return Object.assign({}, props, extraProps)
    }
    return (
      <div style={{ marginTop: '52px' }}>
        <Nav user={this.state.user} history={this.props.history} />
        {this.props.routes.map((route, i) => (
          <Route
            key={i}
            exact
            path={route.path}
            render={props => (
              <route.component {...getProps(props)} routes={route.routes} />
            )}
          />
        ))}
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
          playNextTrack={this.playNextTrack}
          playPreviousTrack={this.playPreviousTrack}
        />
      </div>
    )
  }
}

export default App
