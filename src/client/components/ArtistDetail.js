import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Track from './Track'

import { getArtistDetail } from '../actions/artist_actions'
import { setupAuthToAPI } from '../actions/user_actions'
import { setActiveTracklistSolo } from '../actions/track_actions'

class ArtistDetail extends Component {
  async componentWillMount() {
    window.scroll(0, 0)
    await this.props.setupAuthToAPI()
    this.getArtistDetail(this.props.match.params.id)
    this.unlisten = this.props.history.listen((location, action) => {
      let incID = location.pathname.slice(9)
      let artists = location.pathname.slice(1, 8)
      if (incID && artists == 'artists') {
        if (incID !== this.props.match.params.id) {
          this.getArtistDetail(incID)
        }
      }
    })
  }
  getArtistDetail = async id => {
    await this.props.getArtistDetail(id)

    let tracklist = {
      owner: {},
      name: '',
      tracks: {
        items: []
      }
    }
    this.props.artistTopTracks.map(track => {
      tracklist.tracks.items.push({ track: track })
    })
    this.props.setActiveTracklistSolo(tracklist)
  }
  componentWillUnmount() {
    this.unlisten()
  }

  componentWillReceiveProps(newProps) {
    if (newProps.artist.id !== this.props.artist.id) {
      this.props.getArtistDetail(this.props.match.params.id)
    }
  }
  renderGenres = genres => {
    if (genres) {
      return genres.map((genre, index) => {
        return (
          <span key={index} className="genre">
            {genre}
          </span>
        )
      })
    }
  }
  renderTracks = () => {
    return this.props.artistTopTracks.map((track, index) => {
      if (track !== null) {
        return <Track key={index} track={track} index={index} />
      }
    })
  }
  render() {
    return (
      <div className="artist-detail-component">
        <div className="artist-info">
          <div className="artist-art-wrapper">
            <img
              className="artist-art"
              src={
                this.props.artist.images
                  ? this.props.artist.images[0].url
                  : null
              }
            />
            {this.props.artist.images ? (
              <div className="artist-art-fader" />
            ) : null}
            <h1>{this.props.artist.name}</h1>
          </div>
          <p className="artist-genres">
            Genres: {this.renderGenres(this.props.artist.genres)}
          </p>
          <p className="artist-followers">
            Följare:{' '}
            {this.props.artist.followers
              ? this.props.artist.followers.total
              : null}
          </p>
          <p className="artist-popularity">
            Populäritet: {this.props.artist.popularity}
          </p>
        </div>
        <div className="artist-top-tracks">
          <h2>Låtar</h2>
          <ul className="menu-list track-list">
            {this.props.artistTopTracks.length > 0 ? (
              this.renderTracks()
            ) : (
              <li style={{ textAlign: 'center' }}>Inga matchande låtar</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ artist }) => {
  return {
    artist: artist.artist,
    artistAlbums: artist.albums,
    artistTopTracks: artist.topTracks,
    relatedArtists: artist.relatedArtists
  }
}

export default withRouter(
  connect(mapStateToProps, {
    setupAuthToAPI,
    getArtistDetail,
    setActiveTracklistSolo
  })(ArtistDetail)
)
