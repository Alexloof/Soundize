import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Track from './Track'
import Loading from './general/Loading'

class Search extends Component {
  state = {
    searchedTracks: [],
    searchedArtists: [],
    searchedPlaylists: [],
    loadingTracks: true,
    loadingArtists: true,
    loadingPlaylists: true
  }
  componentWillMount() {
    window.scroll(0, 0)
    this.props.spotifyApi
      .searchTracks(this.props.location.search.slice(3))
      .then(
        data => {
          this.setState({
            searchedTracks: data.body.tracks.items,
            loadingTracks: false
          })
        },
        function(err) {
          console.error(err)
        }
      )
    this.props.spotifyApi
      .searchArtists(this.props.location.search.slice(3))
      .then(
        data => {
          this.setState({
            searchedArtists: data.body.artists.items,
            loadingArtists: false
          })
        },
        function(err) {
          console.error(err)
        }
      )
    this.props.spotifyApi
      .searchPlaylists(this.props.location.search.slice(3))
      .then(
        data => {
          this.setState({
            searchedPlaylists: data.body.playlists.items,
            loadingPlaylists: false
          })
        },
        function(err) {
          console.log('Something went wrong!', err)
        }
      )
  }
  componentWillUpdate(nextProps) {
    if (
      nextProps.location.search.slice(3) !== this.props.location.search.slice(3)
    ) {
      this.setState({
        loadingArtists: true,
        loadingPlaylists: true,
        loadingTracks: true
      })
      this.props.spotifyApi
        .searchTracks(nextProps.location.search.slice(3))
        .then(
          data => {
            this.setState({
              searchedTracks: data.body.tracks.items,
              loadingTracks: false
            })
          },
          function(err) {
            console.error(err)
          }
        )
      this.props.spotifyApi
        .searchArtists(nextProps.location.search.slice(3))
        .then(
          data => {
            this.setState({
              searchedArtists: data.body.artists.items,
              loadingArtists: false
            })
          },
          function(err) {
            console.error(err)
          }
        )
      this.props.spotifyApi
        .searchPlaylists(nextProps.location.search.slice(3))
        .then(
          data => {
            this.setState({
              searchedPlaylists: data.body.playlists.items,
              loadingPlaylists: false
            })
          },
          function(err) {
            console.log('Something went wrong!', err)
          }
        )
      window.scroll(0, 0)
    }
  }
  setActiveTrack = (track, index) => {
    this.props.setActiveTrack(track, this.state.searchedTracks, index)
  }
  renderArtists = () => {
    return this.state.searchedArtists.map((artist, index) => {
      return (
        <li key={index} className="artist-result">
          <img
            src={
              artist.images[1]
                ? artist.images[1].url
                : 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif'
            }
          />
          <p>{artist.name}</p>
        </li>
      )
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
    return this.state.searchedPlaylists.map((playlist, index) => {
      return (
        <li key={index} className="playlist-result">
          <img
            src={
              playlist.images
                ? playlist.images[0].url
                : 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif'
            }
          />
          <p>
            {playlist.name.length > 30
              ? playlist.name.substr(0, 27) + '...'
              : playlist.name}
          </p>
        </li>
      )
    })
  }
  render() {
    return (
      <div className="search-component">
        <div className="search-banner">
          <h1 className="title">Sökresultat för: </h1>
          <h2 className="subtitle">{this.props.location.search.slice(3)}</h2>
        </div>
        <div className="search-data-wrapper">
          <div className="searched-artists">
            <h2>Artister</h2>
            <ul className="menu-list artist-list">
              {!this.state.loadingArtists ? (
                this.state.searchedArtists.length > 0 ? (
                  this.renderArtists()
                ) : (
                  <li>Inga matchande artister</li>
                )
              ) : (
                <Loading />
              )}
            </ul>
          </div>
          <div className="searched-tracks">
            <h2>Låtar</h2>
            <ul className="menu-list track-list">
              {!this.state.loadingTracks ? (
                this.state.searchedTracks.length > 0 ? (
                  this.renderTracks()
                ) : (
                  <li style={{ textAlign: 'center' }}>Inga matchande låtar</li>
                )
              ) : (
                <Loading />
              )}
            </ul>
          </div>
          <div className="searched-playlists">
            <h2>Spellistor</h2>
            <ul className="menu-list playlist-list">
              {!this.state.loadingPlaylists ? (
                this.state.searchedPlaylists.length > 0 ? (
                  this.renderPlaylists()
                ) : (
                  <li>Inga matchande spellistor</li>
                )
              ) : (
                <Loading />
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Search)
