import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

import { getActiveCategoryPlaylists } from '../actions/category_actions'

class DiscoverCategory extends Component {
  componentWillMount = () => {
    window.scroll(0, 0)
    this.props.getActiveCategoryPlaylists(this.props.match.params.category)
  }
  navigateToPlaylist = (userId, playlistId) => {
    this.props.history.push(`/app/playlists/${userId}/${playlistId}`)
  }
  render() {
    return (
      <div className="discover-category-component ">
        <button
          onClick={() => this.props.history.goBack()}
          className="go-back-button"
        >
          <i className="fa fa-chevron-left" aria-hidden="true" />
        </button>
        <h1>{this.props.match.params.category}</h1>
        <ul className="menu-list discover-category-list">
          {this.props.categoryPlaylists.map((playlist, index) => {
            return (
              <li
                onClick={() =>
                  this.navigateToPlaylist(playlist.owner.id, playlist.id)
                }
                key={index}
                className="discover-category-item"
              >
                <img src={playlist.images[0].url} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => {
  return { categoryPlaylists: categories.activeCategoryPlaylists }
}

export default withRouter(
  connect(mapStateToProps, { getActiveCategoryPlaylists })(DiscoverCategory)
)
