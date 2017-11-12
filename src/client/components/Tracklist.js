import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  deletePlaylist,
  getPlaylists,
  setActivePlaylist,
  unfollowPlaylist,
  followPlaylist
} from '../actions/playlist_actions'
import { setActiveTracklist } from '../actions/track_actions'

import Track from './Track'
import UnfollowPlaylistModal from './modals/UnfollowPlaylistModal'
import DeletePlaylistModal from './modals/DeletePlaylistModal'

class Tracklist extends Component {
  state = {
    scrolled: false,
    unfollowModalClassName: 'modal are-you-sure',
    deleteModalClassName: 'modal are-you-sure'
  }
  componentDidMount = () => {
    let scrolled = false
    const el = document.getElementsByClassName('tracklist-scroll-banner')
    this.interval = setInterval(() => {
      if (window.pageYOffset > 300) {
        if (scrolled === false) {
          scrolled = true
          el[0].classList = [el[0].classList[0] + ' banner-show']
        }
      } else {
        scrolled = false
        el[0].classList = ['tracklist-scroll-banner']
      }
    }, 700)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  showUnfollowModal = () => {
    this.setState({ unfollowModalClassName: 'modal are-you-sure is-active' })
  }
  showDeleteModal = () => {
    this.setState({ deleteModalClassName: 'modal are-you-sure is-active' })
  }
  closeUnfollowPlaylistModal = () => {
    this.setState({ unfollowModalClassName: 'modal are-you-sure' })
  }
  closeDeletePlaylistModal = () => {
    this.setState({ deleteModalClassName: 'modal are-you-sure' })
  }
  followActivePlaylist = () => {
    this.props.followPlaylist(
      this.props.activeTracklist.owner.id,
      this.props.activeTracklist.id
    )
  }
  unfollowActivePlaylist = () => {
    this.closeUnfollowPlaylistModal()
    this.props.unfollowPlaylist(
      this.props.activeTracklist.owner.id,
      this.props.activeTracklist.id
    )
  }
  deleteActivePlaylist = async () => {
    this.closeDeletePlaylistModal()
    await this.props.deletePlaylist(
      this.props.user.id,
      this.props.activeTracklist.id
    )
    await this.props.getPlaylists()

    // set new active tracklist to hide the deleted one
    this.props.setActiveTracklist(
      this.props.userPlaylists[0].owner.id,
      this.props.userPlaylists[0].id
    )
    this.props.setActivePlaylist(this.props.userPlaylists[0].id)
  }
  checkPlaylistOwner = () => {
    if (this.props.activeTracklist.owner.id === this.props.user.id) {
      return true
    } else {
      false
    }
  }

  removeTrackFromPlaylist = spotifyURI => {
    this.props.removeTrackFromPlaylist(
      this.props.activeTracklist.owner.id,
      this.props.activeTracklist.id,
      spotifyURI
    )
  }
  setActiveTrack = (track, index) => {
    this.props.setActiveTrack(track, this.props.activeTracklist, index)
  }
  checkFollowStatusOnPlaylist = playlistId => {
    const status = this.props.userPlaylists.map(playlist => {
      if (playlist.id === playlistId) {
        return true
      }
    })
    if (status.includes(true)) {
      return true
    } else {
      return false
    }
  }
  renderTracklist() {
    return this.props.activeTracklist.tracks.items.map((track, index) => {
      if (track.track !== null) {
        if (track.track.id === this.props.activeTrack.id) {
          return (
            <Track
              key={index}
              track={track.track}
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
              myPlaylist={this.checkPlaylistOwner()}
              removeTrackFromPlaylist={this.removeTrackFromPlaylist}
              index={index}
            />
          )
        } else {
          return (
            <Track
              key={index}
              track={track.track}
              setActiveTrack={this.setActiveTrack}
              stopActiveTrack={this.props.stopActiveTrack}
              startActiveTrack={this.props.startActiveTrack}
              privatePlaylists={this.props.privatePlaylists}
              addTrackToPlaylist={this.props.addTrackToPlaylist}
              addTrackToQueue={this.props.addTrackToQueue}
              myPlaylist={this.checkPlaylistOwner()}
              removeTrackFromPlaylist={this.removeTrackFromPlaylist}
              index={index}
            />
          )
        }
      }
    })
  }
  render() {
    return (
      <div className="menu ">
        <div className="tracklist-scroll-banner">
          <div className="tracklist-name title">
            <div onClick={() => window.scroll(0, 0)}>
              {this.props.activeTracklist.name}
            </div>
            <span>
              {this.props.activeTracklist.owner.display_name
                ? this.props.activeTracklist.owner.display_name
                : this.props.activeTracklist.owner.id}
            </span>
          </div>
          <div className="tracklist-scroll-banner-right-grp">
            <div className="tracklist-scroll-btn-grp">
              {this.props.playingPlaylist !== this.props.activeTracklist.id ||
              this.props.playing === false ? (
                <button
                  onClick={() => this.props.playVisibleTracklist()}
                  className="button is-outlined"
                >
                  <i className="fa fa-play" />
                </button>
              ) : (
                <button
                  onClick={() => this.props.stopActiveTrack()}
                  className="button is-outlined"
                >
                  <i className="fa fa-pause" />
                </button>
              )}
              <button onClick={() => this.showDeleteModal()} className="button">
                <span className="icon">
                  <i className="fa fa-remove" />
                </span>
              </button>
            </div>
            <div className="tracklist-scroll-img">
              {this.props.activeTracklist.images ? (
                <img
                  src={
                    this.props.activeTracklist.images.length > 0
                      ? this.props.activeTracklist.images[0].url
                      : null
                  }
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className={'tracklist-banner'}>
          <div className="tracklist-banner-info">
            <div className="large-info">
              <p className="menu-label">Spellista</p>
              <p className="tracklist-name title">
                {this.props.activeTracklist.name
                  ? this.props.activeTracklist.name
                  : 'Låtar'}
              </p>
            </div>
            <div className="tracklist-banner-info-lower">
              <div className="small-info">
                <p>
                  Följare:{' '}
                  {this.props.activeTracklist.followers
                    ? this.props.activeTracklist.followers.total
                    : '0'}
                </p>
                <p>
                  Skapad av:{' '}
                  {this.props.activeTracklist.owner
                    ? this.props.activeTracklist.owner.display_name ||
                      this.props.activeTracklist.owner.id
                    : 'Okänd'}{' '}
                </p>
              </div>
              <div className="tracklist-banner-btn-group">
                {this.props.playingPlaylist !== this.props.activeTracklist.id ||
                this.props.playing === false ? (
                  <button
                    onClick={() => this.props.playVisibleTracklist()}
                    className="button is-outlined"
                  >
                    {this.state.className ===
                      'tracklist-banner scroll-state scroll-position' ||
                    this.state.className === 'tracklist-banner scroll-state' ? (
                      <i className="fa fa-play" />
                    ) : (
                      'Spela Upp'
                    )}
                  </button>
                ) : (
                  <button
                    onClick={() => this.props.stopActiveTrack()}
                    className="button is-outlined"
                  >
                    {this.state.className ===
                      'tracklist-banner scroll-state scroll-position' ||
                    this.state.className === 'tracklist-banner scroll-state' ? (
                      <i className="fa fa-pause" />
                    ) : (
                      'Pausa'
                    )}
                  </button>
                )}
                {}
                {this.props.activeTracklist.owner.id === this.props.user.id ? (
                  <button
                    onClick={() => this.showDeleteModal()}
                    className="button"
                  >
                    {this.state.className ===
                      'tracklist-banner scroll-state scroll-position' ||
                    this.state.className === 'tracklist-banner scroll-state' ? (
                      <span className="icon">
                        <i className="fa fa-navicon" />
                      </span>
                    ) : (
                      'Radera'
                    )}
                  </button>
                ) : this.checkFollowStatusOnPlaylist(
                  this.props.activeTracklist.id
                ) ? (
                  <button
                    onClick={() => this.showUnfollowModal()}
                    className="button"
                  >
                    {this.state.className ===
                      'tracklist-banner scroll-state scroll-position' ||
                    this.state.className === 'tracklist-banner scroll-state' ? (
                      <span className="icon">
                        <i className="fa fa-navicon" />
                      </span>
                    ) : (
                      'Sluta följ'
                    )}
                  </button>
                ) : (
                  <button
                    onClick={() => this.followActivePlaylist()}
                    className="button"
                  >
                    {this.state.className ===
                      'tracklist-banner scroll-state scroll-position' ||
                    this.state.className === 'tracklist-banner scroll-state' ? (
                      <span className="icon">
                        <i className="fa fa-navicon" />
                      </span>
                    ) : (
                      'Följ'
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="tracklist-img">
            {this.props.activeTracklist.images ? (
              <img
                src={
                  this.props.activeTracklist.images.length > 0
                    ? this.props.activeTracklist.images[0].url
                    : null
                }
              />
            ) : null}
          </div>
        </div>

        <ul className="menu-list tracklist-tracks">{this.renderTracklist()}</ul>

        <div className={this.state.unfollowModalClassName}>
          <UnfollowPlaylistModal
            unfollowPlaylist={this.unfollowActivePlaylist}
            closeModal={this.closeUnfollowPlaylistModal}
          />
        </div>
        <div className={this.state.deleteModalClassName}>
          <DeletePlaylistModal
            deletePlaylist={this.deleteActivePlaylist}
            closeModal={this.closeDeletePlaylistModal}
          />
        </div>
      </div>
    )
  }
}

Tracklist.propTypes = {}

const mapStateToProps = ({ user, track, playlist }) => {
  return {
    user: user.user,
    userPlaylists: playlist.playlists,
    activeTracklist: track.activeTracklist
  }
}

export default connect(mapStateToProps, {
  deletePlaylist,
  getPlaylists,
  setActiveTracklist,
  setActivePlaylist,
  unfollowPlaylist,
  followPlaylist
})(Tracklist)
