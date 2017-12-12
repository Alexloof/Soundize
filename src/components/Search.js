import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import {
  getSearchedArtists,
  getSearchedTracks,
  getSearchedPlaylists
} from '../actions/search_actions'

import { setActiveTracklistSolo } from '../actions/track_actions'

import Track from './Track'

class Search extends Component {
  state = {
    loadingTracks: false,
    loadingArtists: false,
    loadingPlaylists: false
  }
  componentWillMount() {
    window.scroll(0, 0)
    this.makeSearch(this.props)
  }
  makeSearch = async props => {
    this.props.getSearchedArtists(props.location.search.slice(3))
    this.props.getSearchedPlaylists(props.location.search.slice(3))
    await this.props.getSearchedTracks(props.location.search.slice(3))
    let tracklist = {
      owner: {},
      name: '',
      tracks: {
        items: []
      }
    }
    this.props.searchedTracks.map(track => {
      tracklist.tracks.items.push({ track: track })
    })
    this.props.setActiveTracklistSolo(tracklist)
  }
  componentWillUpdate(nextProps) {
    if (
      nextProps.location.search.slice(3) !== this.props.location.search.slice(3)
    ) {
      this.makeSearch(nextProps)
      window.scroll(0, 0)
    }
  }
  componentWillUnmount() {
    this.props.setActiveTracklistSolo(null)
  }
  navigateToArtistDetailPage = id => {
    this.props.history.push(`/app/artists/${id}`)
  }
  navigateToPlaylist = (userId, playlistId) => {
    this.props.history.push(`/app/playlists/${userId}/${playlistId}`)
  }
  renderArtists = () => {
    return this.props.searchedArtists.map((artist, index) => {
      return (
        <li
          key={index}
          onClick={() => this.navigateToArtistDetailPage(artist.id)}
          className="artist-result"
        >
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
    return this.props.searchedTracks.map((track, index) => {
      if (track !== null) {
        return <Track key={index} track={track} index={index} />
      }
    })
  }
  renderPlaylists = () => {
    return this.props.searchedPlaylists.map((playlist, index) => {
      return (
        <li
          key={index}
          onClick={() =>
            this.navigateToPlaylist(playlist.owner.id, playlist.id)
          }
          className="playlist-result"
        >
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
          <h1 className="title">Result for: </h1>
          <h2 className="subtitle">{this.props.location.search.slice(3)}</h2>
        </div>
        <div className="search-data-wrapper">
          <div className="searched-artists">
            <h2>Artists</h2>
            <ul className="menu-list artist-list">
              {this.props.searchedArtists.length > 0 ? (
                this.renderArtists()
              ) : (
                <li>No matching artists</li>
              )}
            </ul>
          </div>
          <div className="searched-tracks">
            <h2>Tracks</h2>
            <ul className="menu-list track-list">
              {this.props.searchedTracks.length > 0 ? (
                this.renderTracks()
              ) : (
                <li style={{ textAlign: 'center' }}>No matching tracks</li>
              )}
            </ul>
          </div>
          <div className="searched-playlists">
            <h2>Playlists</h2>
            <ul className="menu-list playlist-list">
              {this.props.searchedPlaylists.length > 0 ? (
                this.renderPlaylists()
              ) : (
                <li>No matching playlists</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ search }) => {
  return {
    searchedArtists: search.searchedArtists,
    searchedPlaylists: search.searchedPlaylists,
    searchedTracks: search.searchedTracks
  }
}

export default withRouter(
  connect(mapStateToProps, {
    getSearchedArtists,
    getSearchedTracks,
    getSearchedPlaylists,
    setActiveTracklistSolo
  })(Search)
)
