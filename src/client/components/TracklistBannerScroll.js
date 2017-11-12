import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TracklistBannerScroll extends Component {
  render() {
    return (
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
            this.props.isPlaying === false ? (
              <button
                onClick={() => this.props.playActiveTracklist()}
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
            <button
              onClick={() => this.props.showDeleteModal()}
              className="button"
            >
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
    )
  }
}

TracklistBannerScroll.propTypes = {
  activeTracklist: PropTypes.object,
  isPlaying: PropTypes.bool,
  playingPlaylist: PropTypes.string,
  playActiveTracklist: PropTypes.func.isRequired,
  stopActiveTrack: PropTypes.func.isRequired,
  showDeleteModal: PropTypes.func.isRequired
}

export default TracklistBannerScroll
