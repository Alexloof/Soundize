import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setActivePlaylist } from '../actions/playlist_actions'
import { setActiveTracklist } from '../actions/track_actions'

class Playlists extends Component {
  setActivePlaylist = async (ownerId, playlistId) => {
    this.props.setActivePlaylist(playlistId)
    await this.props.setActiveTracklist(ownerId, playlistId)
    window.scrollTo(0, 0)
  }
  renderPlaylists(playlists) {
    return playlists.map(playlist => {
      let className
      if (playlist.id === this.props.activePlaylistId) {
        className = 'tooltip active'
      } else {
        className = 'tooltip'
      }
      return (
        <li
          className={className}
          key={playlist.id}
          onClick={() => this.setActivePlaylist(playlist.owner.id, playlist.id)}
        >
          <a>
            <img src={playlist.images[0] ? playlist.images[0].url : null} />

            <span className="playlist-name">{playlist.name}</span>
            {this.props.isPlaying &&
            this.props.playingPlaylist.id === playlist.id ? (
              <i className="fa fa-volume-up" aria-hidden="true" />
            ) : null}
            <span className="tooltiptext">
              {playlist.owner.display_name || playlist.owner.id}
            </span>
          </a>
        </li>
      )
    })
  }

  render() {
    return (
      <aside className="menu">
        <p className="menu-label top-label">
          <span>Mina Spellistor</span>
          <i
            onClick={() => this.props.onOpenCreatePlaylistModal()}
            className="fa fa-plus"
            aria-hidden="true"
          />
        </p>
        <ul className="menu-list my-playlists invisible-scrollbar">
          {this.props.playlists
            ? this.renderPlaylists(this.props.playlists)
            : null}
        </ul>
        <p
          className="menu-label"
          style={{ marginTop: '30px', marginBottom: '10px' }}
        >
          Spellistor för dig
        </p>
        <ul className="menu-list featured-playlists">
          {this.props.featuredPlaylists
            ? this.renderPlaylists(this.props.featuredPlaylists)
            : null}
        </ul>
      </aside>
    )
  }
}

Playlists.propTypes = {
  onOpenCreatePlaylistModal: PropTypes.func.isRequired
}

const mapStateToProps = ({ user, playlist, track, player }) => {
  return {
    user: user.user,
    playlists: playlist.playlists,
    featuredPlaylists: playlist.featuredPlaylists,
    activePlaylistId: playlist.activePlaylistId,
    playingPlaylist: track.playingTracklist,
    isPlaying: player.isPlaying
  }
}

export default connect(mapStateToProps, {
  setActivePlaylist,
  setActiveTracklist
})(Playlists)
