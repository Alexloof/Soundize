import React, { Component } from 'react'

import Track from './Track'

class Search extends Component {
  state = {
    searchedTracks: [],
    searchedArtists: [],
    searchedPlaylists: []
  }
  componentWillMount() {
    this.props.spotifyApi.searchTracks(this.props.params.id).then(data => {
      this.setState({ searchedTracks: data.body.tracks.items })
    }, function(err) {
      console.error(err)
    })
    this.props.spotifyApi.searchArtists(this.props.params.id).then(data => {
      console.log(data.body)
      this.setState({ searchedArtists: data.body.artists.items })
    }, function(err) {
      console.error(err)
    })
    this.props.spotifyApi.searchPlaylists(this.props.params.id).then(data => {
      console.log(data.body)
      this.setState({ searchedPlaylists: data.body.playlists.items })
    }, function(err) {
      console.log('Something went wrong!', err)
    })
  }
  componentWillUpdate(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      this.props.spotifyApi.searchTracks(nextProps.params.id).then(data => {
        this.setState({ searchedTracks: data.body.tracks.items })
      }, function(err) {
        console.error(err)
      })
      this.props.spotifyApi.searchArtists(nextProps.params.id).then(data => {
        console.log(data.body)
        this.setState({ searchedArtists: data.body.artists.items })
      }, function(err) {
        console.error(err)
      })
      this.props.spotifyApi.searchPlaylists(nextProps.params.id).then(data => {
        console.log(data.body)
        this.setState({ searchedPlaylists: data.body.playlists.items })
      }, function(err) {
        console.log('Something went wrong!', err)
      })
    }
  }
  setActiveTrack = (track, index) => {
    this.props.setActiveTrack(track, index)
  }
  renderArtists = () => {
    return this.state.searchedArtists.map(artist => {
      return <li>{artist.name}</li>
    })
  }
  renderTracks = () => {
    return this.state.searchedTracks.map((track, index) => {
      if (track !== null) {
        if (track.id === this.props.activeTrack.id) {
          return (
            <Track
              key={index}
              track={track}
              setActiveTrack={this.setActiveTrack}
              stopActiveTrack={this.props.stopActiveTrack}
              startActiveTrack={this.props.startActiveTrack}
              activeTrack={this.props.activeTrack}
              playing={this.props.playing}
              playedTime={this.props.playedTime}
              onSeekMouseDown={this.props.onSeekMouseDown}
              onSeekChange={this.props.onSeekChange}
              onSeekMouseUp={this.props.onSeekMouseUp}
              privatePlaylists={this.props.privatePlaylists}
              addTrackToPlaylist={this.props.addTrackToPlaylist}
              addTrackToQueue={this.props.addTrackToQueue}
              //myPlaylist={this.checkPlaylistOwner()}
              removeTrackFromPlaylist={this.removeTrackFromPlaylist}
              index={index}
            />
          )
        } else {
          return (
            <Track
              key={index}
              track={track}
              setActiveTrack={this.setActiveTrack}
              stopActiveTrack={this.props.stopActiveTrack}
              startActiveTrack={this.props.startActiveTrack}
              privatePlaylists={this.props.privatePlaylists}
              addTrackToPlaylist={this.props.addTrackToPlaylist}
              addTrackToQueue={this.props.addTrackToQueue}
              //myPlaylist={this.checkPlaylistOwner()}
              removeTrackFromPlaylist={this.removeTrackFromPlaylist}
              index={index}
            />
          )
        }
      }
    })
  }
  renderPlaylists = () => {
    return this.state.searchedPlaylists.map(playlist => {
      return <li>{playlist.name}</li>
    })
  }
  render() {
    return (
      <div className="search-component">
        <div className="search-banner">
          <h1 className="title">Sökresultat för: </h1>
          <h2 className="subtitle">{this.props.params.id}</h2>
        </div>
        <div className="search-data-wrapper">
          <div className="searched-artists">
            <h2>Artists</h2>
            <ul className="menu-list artist-list">
              {this.state.searchedArtists ? this.renderArtists() : null}
            </ul>
          </div>
          <div className="searched-tracks">
            <h2>Tracks</h2>
            <ul className="menu-list track-list">
              {this.state.searchedTracks ? this.renderTracks() : null}
            </ul>
          </div>
          <div className="searched-playlists">
            <h2>Playlists</h2>
            <ul className="menu-list playlist-list">
              {this.state.searchedPlaylists ? this.renderPlaylists() : null}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Search
