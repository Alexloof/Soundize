import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getActiveCategoryPlaylists } from '../actions/category_actions'

class Toplists extends Component {
  componentDidMount() {
    this.props.getActiveCategoryPlaylists('toplists')
  }
  navigateToPlaylist = (userId, playlistId) => {
    this.props.history.push(`/playlists/${userId}/${playlistId}`)
  }
  renderToplists = () => {
    return this.props.toplists.map((playlist, index) => {
      return (
        <li
          onClick={() =>
            this.navigateToPlaylist(playlist.owner.id, playlist.id)}
          className="toplists-item"
          key={index}
        >
          <img src={playlist.images[0].url} />
        </li>
      )
    })
  }
  render() {
    return (
      <div className="toplists-component ">
        <h1>Topplistor</h1>
        <ul className="toplists-list">{this.renderToplists()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => {
  return {
    toplists: categories.activeCategoryPlaylists
  }
}

export default withRouter(
  connect(mapStateToProps, { getActiveCategoryPlaylists })(Toplists)
)
