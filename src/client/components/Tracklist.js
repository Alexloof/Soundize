import React, { Component } from 'react'

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
      if (window.pageYOffset > 240) {
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
  unfollowActivePlaylist = () => {
    this.props.unfollowActivePlaylist(
      this.props.tracklist.owner.id,
      this.props.tracklist.id
    )
    this.setState({ unfollowModalClassName: 'modal are-you-sure' })
  }
  deleteActivePlaylist = () => {
    this.props.deleteActivePlaylist(this.props.tracklist.id)
    this.setState({ deleteModalClassName: 'modal are-you-sure' })
  }
  checkPlaylistOwner = () => {
    if (this.props.tracklist.owner.id === this.props.me.id) {
      return true
    } else {
      false
    }
  }
  renderTracklist() {
    return this.props.tracklist.tracks.items.map((track, index) => {
      if (track.track !== null) {
        if (track.track.id === this.props.activeTrack.id) {
          return (
            <Track
              key={index}
              track={track}
              setActiveTrack={this.props.setActiveTrack}
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
            />
          )
        } else {
          return (
            <Track
              key={index}
              track={track}
              setActiveTrack={this.props.setActiveTrack}
              stopActiveTrack={this.props.stopActiveTrack}
              startActiveTrack={this.props.startActiveTrack}
              privatePlaylists={this.props.privatePlaylists}
              addTrackToPlaylist={this.props.addTrackToPlaylist}
              addTrackToQueue={this.props.addTrackToQueue}
              myPlaylist={this.checkPlaylistOwner()}
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
          <p className="tracklist-name title">
            {this.props.tracklist.name ? this.props.tracklist.name : 'Låtar'}
          </p>
          <div className="tracklist-scroll-banner-right-grp">
            <div className="tracklist-scroll-btn-grp">
              {!this.props.playing ? (
                <button className="button is-outlined">
                  <i className="fa fa-play" />
                </button>
              ) : (
                <button className="button is-outlined">
                  <i className="fa fa-pause" />
                </button>
              )}
              <button className="button">
                <span className="icon">
                  <i className="fa fa-navicon" />
                </span>
              </button>
            </div>
            <div className="tracklist-scroll-img">
              {this.props.tracklist.images ? (
                <img
                  src={
                    this.props.tracklist.images.length > 0 ? (
                      this.props.tracklist.images[0].url
                    ) : null
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
                {this.props.tracklist.name ? (
                  this.props.tracklist.name
                ) : (
                  'Låtar'
                )}
              </p>
            </div>
            <div className="tracklist-banner-info-lower">
              <div className="small-info">
                <p>
                  Följare:{' '}
                  {this.props.tracklist.followers ? (
                    this.props.tracklist.followers.total
                  ) : (
                    '0'
                  )}
                </p>
                <p>
                  Skapad av:{' '}
                  {this.props.tracklist.owner ? (
                    this.props.tracklist.owner.display_name ||
                    this.props.tracklist.owner.id
                  ) : (
                    'Okänd'
                  )}{' '}
                </p>
              </div>
              <div className="tracklist-banner-btn-group">
                {!this.props.playing ? (
                  <button className="button is-outlined">
                    {this.state.className ===
                      'tracklist-banner scroll-state scroll-position' ||
                    this.state.className === 'tracklist-banner scroll-state' ? (
                      <i className="fa fa-play" />
                    ) : (
                      'Spela Upp'
                    )}
                  </button>
                ) : (
                  <button className="button is-outlined">
                    {this.state.className ===
                      'tracklist-banner scroll-state scroll-position' ||
                    this.state.className === 'tracklist-banner scroll-state' ? (
                      <i className="fa fa-pause" />
                    ) : (
                      'Pausa'
                    )}
                  </button>
                )}
                {this.props.tracklist.owner.id === this.props.me.id ? (
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
                ) : (
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
                )}
              </div>
            </div>
          </div>
          <div className="tracklist-img">
            {this.props.tracklist.images ? (
              <img
                src={
                  this.props.tracklist.images.length > 0 ? (
                    this.props.tracklist.images[0].url
                  ) : null
                }
              />
            ) : null}
          </div>
        </div>
        <ul className="menu-list tracklist-tracks">
          {this.props.tracklist ? this.renderTracklist() : null}
        </ul>
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

export default Tracklist
