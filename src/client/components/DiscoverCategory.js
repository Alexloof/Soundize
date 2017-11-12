import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class DiscoverCategory extends Component {
  state = {
    categoryPlaylists: []
  }
  componentWillMount = () => {
    window.scroll(0, 0)
    this.props.spotifyApi
      .getPlaylistsForCategory(this.props.match.params.category, {
        country: 'SE',
        locale: 'sv_SE'
      })
      .then(
        data => {
          this.setState({ categoryPlaylists: data.body.playlists.items })
        },
        function(err) {
          console.log('Something went wrong!', err)
        }
      )
  }
  navigateToPlaylist = (userId, playlistId) => {
    this.props.history.push(`/stream/discover/playlist/${userId}/${playlistId}`)
  }
  render() {
    return (
      <div className="discover-category-component">
        <button
          onClick={() => this.props.history.goBack()}
          className="go-back-button"
        >
          <i className="fa fa-chevron-left" aria-hidden="true" />
        </button>
        <ul className="menu-list discover-category-list">
          {this.state.categoryPlaylists.map((playlist, index) => {
            return (
              <li
                onClick={() =>
                  this.navigateToPlaylist(playlist.owner.id, playlist.id)}
                key={index}
                className="discover-category-item"
              >
                <img src={playlist.images[0].url} />
                <div className="discovery-category-item-name">
                  <h2>{playlist.name}</h2>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default withRouter(DiscoverCategory)
