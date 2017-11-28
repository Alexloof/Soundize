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
  render() {
    return (
      <div className="artist-detail-component ">
        <h1>ArtistDetail</h1>
        <p>{this.props.artist.name}</p>
        <p>{this.props.artistAlbums[0].name}</p>
        <p>{this.props.artistTopTracks[0].name}</p>
        <p>{this.props.relatedArtists[0].name}</p>
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
