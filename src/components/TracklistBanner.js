import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TracklistBanner extends Component {
  render() {
    return (
      <div className="tracklist-banner effect8">
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
              {this.props.playingTracklistId !==
              this.props.activeTracklist.id ? (
                <button
                  onClick={() => this.props.playActiveTracklist()}
                  className="button is-outlined"
                >
                  Spela Upp
                </button>
              ) : this.props.isPlaying === false ? (
                <button
                  onClick={() => this.props.playActiveTracklist()}
                  className="button is-outlined"
                >
                  Spela Upp
                </button>
              ) : (
                <button
                  onClick={() => this.props.stopActiveTrack()}
                  className="button is-outlined"
                >
                  Pausa
                </button>
              )}

              {this.props.activeTracklist.owner.id === this.props.userId ? (
                <button
                  onClick={() => this.props.showDeleteModal()}
                  className="button"
                >
                  Radera
                </button>
              ) : this.props.checkFollowStatusOnPlaylist(
                this.props.activeTracklist.id
              ) ? (
                <button
                  onClick={() => this.props.showUnfollowModal()}
                  className="button"
                >
                  Sluta följ
                </button>
              ) : (
                <button
                  onClick={() => this.props.followActivePlaylist()}
                  className="button"
                >
                  Följ
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
    )
  }
}

TracklistBanner.propTypes = {
  activeTracklist: PropTypes.object,
  isPlaying: PropTypes.bool,
  playingTracklistId: PropTypes.string,
  playActiveTracklist: PropTypes.func.isRequired,
  stopActiveTrack: PropTypes.func.isRequired,
  showDeleteModal: PropTypes.func.isRequired,
  checkFollowStatusOnPlaylist: PropTypes.func.isRequired,
  showUnfollowModal: PropTypes.func.isRequired,
  followActivePlaylist: PropTypes.func.isRequired
}

export default TracklistBanner
