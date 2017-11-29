import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { setupAuthToAPI } from '../actions/user_actions'
import { getAlbum } from '../actions/album_actions'

class AlbumDetail extends Component {
  async componentWillMount() {
    window.scroll(0, 0)
    await this.props.setupAuthToAPI()
    this.props.getAlbum(this.props.match.params.id)
  }
  render() {
    return (
      <div className="album-detail-component">
        <h1>AlbumDetail</h1>
        <p>{this.props.album.name}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ album }) => {
  return { album: album.album }
}

export default withRouter(
  connect(mapStateToProps, { setupAuthToAPI, getAlbum })(AlbumDetail)
)
