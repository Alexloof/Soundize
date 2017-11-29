import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { getArtistDetail } from '../actions/artist_actions'
import { setupAuthToAPI } from '../actions/user_actions'

class ArtistDetail extends Component {
  async componentWillMount() {
    window.scroll(0, 0)
    await this.props.setupAuthToAPI()
    this.props.getArtistDetail(this.props.match.params.id)
  }
  componentWillReceiveProps(newProps) {
    if (newProps.artist.id !== this.props.artist.id) {
      this.props.getArtistDetail(this.props.match.params.id)
    }
  }
  renderGenres = genres => {
    if (genres) {
      return genres.map(genre => {
        return genre
      })
    }
  }
  render() {
    return (
      <div className="artist-detail-component">
        <div className="artist-art-wrapper">
          <img
            className="artist-art"
            src={
              this.props.artist.images ? this.props.artist.images[0].url : null
            }
          />
          {this.props.artist.images ? (
            <div className="artist-art-fader" />
          ) : null}
          <h1>{this.props.artist.name}</h1>
        </div>
        <div className="artist-info">
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
  connect(mapStateToProps, { setupAuthToAPI, getArtistDetail })(ArtistDetail)
)
