import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'
import screenfull from 'screenfull'

import {
  toggleStartPauseTrack,
  setPlayedTime,
  playActiveTrack,
  pauseActiveTrack,
  startSeek,
  stopSeek,
  changeSeek,
  zeroPlayedTime
} from '../actions/player_actions'

class MusicBar extends Component {
  state = {
    duration: 0,
    muted: false,
    volume: 0.5,
    loop: false
  }
  // componentWillReceiveProps(props) {
  //   if (props.activeTrack.id !== this.props.activeTrack.id) {
  //     if (props.activeTrack) {
  //       this.setState({ activeTrack: props.activeTrack })
  //     }
  //   }
  // }
  renderArtists(artists) {
    return artists.map((artist, index) => {
      if (index + 1 === artists.length) {
        return artist.name
      } else {
        return artist.name + ', '
      }
    })
  }
  onProgress = state => {
    // We only want to update time slider if we are not currently seeking
    if (!this.props.isSeeking) {
      this.props.setPlayedTime(state.played)
    }
  }
  startStopTrack = () => {
    this.props.toggleStartPauseTrack()
  }

  onSeekMouseDown = () => {
    this.props.startSeek()
  }
  onSeekChange = e => {
    this.props.changeSeek(parseFloat(e.target.value))
  }
  onSeekMouseUp = e => {
    this.player.seekTo(parseFloat(e.target.value))
    this.props.stopSeek()
    this.props.changeSeek(parseFloat(e.target.value))
  }
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }
  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }
  renderPlayPauseButton = () => {
    return this.props.isPlaying ? (
      <button
        onClick={() => this.props.pauseActiveTrack()}
        className="button play-btn"
      >
        <span className="icon">
          <i className="fa fa-pause" />
        </span>
      </button>
    ) : (
      <button
        onClick={() => this.props.playActiveTrack()}
        className="button play-btn"
      >
        <span className="icon">
          <i className="fa fa-play" />
        </span>
      </button>
    )
  }

  //TODO PLAY NEXT TRACK
  trackEnded = () => {
    if (this.state.loop) {
      this.props.zeroPlayedTime()
      this.props.playActiveTrack()
    } else {
      this.props.playNextTrack()
    }
  }
  playedTimeColor = () => {
    let procent = 1.11 * this.props.playedTime
    let time = this.props.playedTime * 100 * 1 - procent
    return time + '%'
  }
  volumeAmount = () => {
    let amount = this.state.volume * 100
    return amount + '%'
  }
  requestFullScreen = e => {
    if (screenfull.enabled) {
      screenfull.request()
    }
  }
  render() {
    let className
    if (this.props.showMusicbar) {
      className = 'music-bar display-music-bar'
    } else {
      className = 'music-bar'
    }
    if (this.props.activeTrack.id) {
      return (
        <div className={className}>
          <div className="my-container">
            <div className="img-info">
              <img
                src={
                  this.props.activeTrack.id
                    ? this.props.activeTrack.album.images[0].url
                    : null
                }
              />

              <div className="track-info">
                <p className="artist-label">
                  {this.renderArtists(this.props.activeTrack.artists)}
                </p>
                <p className="track-title">{this.props.activeTrack.name}</p>
              </div>
            </div>
            <div className="track-controls">
              <button
                onClick={() => this.props.playPreviousTrack()}
                className="button step-change-btn"
              >
                <span className="icon">
                  <i className="fa fa-step-backward" />
                </span>
              </button>

              {this.renderPlayPauseButton()}

              <button
                onClick={() => this.props.playNextTrack()}
                className="button step-change-btn"
              >
                <span className="icon">
                  <i className="fa fa-step-forward" />
                </span>
              </button>
              <button
                onClick={() => this.setState({ loop: !this.state.loop })}
                className="button step-change-btn"
              >
                <span className="icon">
                  {this.state.loop ? (
                    <i className="fa fa-retweet active" />
                  ) : (
                    <i className="fa fa-retweet" />
                  )}
                </span>
              </button>
            </div>
            <div className="track-running-wrapper">
              <div className="time-counter">
                {(Math.round(this.state.duration * this.props.playedTime) / 100
                ).toFixed(2)}
              </div>
              <div className="running-track">
                <div
                  style={{ width: this.playedTimeColor() }}
                  className="played-color"
                />
                <div className="track-color" />
                <input
                  type="range"
                  min={0}
                  max={1}
                  step="any"
                  //ref={input => (input = this.props.playedTime)}
                  value={this.props.playedTime}
                  onMouseDown={this.onSeekMouseDown}
                  onChange={this.onSeekChange}
                  onMouseUp={this.onSeekMouseUp}
                />
              </div>

              <div className="time-duration">
                {(Math.round(this.state.duration) / 100).toFixed(2)}
              </div>
            </div>

            <div className="sound-options">
              <span className="icon" onClick={() => this.toggleMuted()}>
                {!this.state.muted ? (
                  <i className="fa fa-volume-up" />
                ) : (
                  <i className="fa fa-volume-off" />
                )}
              </span>
              <div className="volume-wrapper">
                <div
                  style={{ width: this.volumeAmount() }}
                  className="volume-amount-color"
                />
                <div className="volume-color" />
                <input
                  type="range"
                  min={0}
                  max={1}
                  step="any"
                  value={this.state.volume}
                  onChange={this.setVolume}
                />
              </div>
            </div>
            <div
              className="fullscreen"
              onClick={e => this.requestFullScreen(e)}
            >
              <span className="icon">
                <i className="fa fa-expand" aria-hidden="true" />
              </span>
            </div>
          </div>
          <ReactPlayer
            ref={player => {
              this.player = player
            }}
            width={1}
            height={1}
            key={this.props.activeTrack.id}
            playing={this.props.isPlaying}
            url={
              this.props.activeTrack.preview_url
                ? this.props.activeTrack.preview_url
                : null
            }
            onError={e => console.log('error', e)}
            onDuration={duration => this.setState({ duration })}
            onEnded={() => this.trackEnded()}
            onProgress={this.onProgress}
            progressFrequency={500}
            volume={this.state.volume}
            muted={this.state.muted}
          />
        </div>
      )
    } else {
      return <div />
    }
  }
}

const mapStateToProps = ({ track, player }) => {
  return {
    activeTrack: track.activeTrack,
    isPlaying: player.isPlaying,
    isSeeking: player.isSeeking,
    playedTime: player.playedTime,
    showMusicbar: player.showMusicbar
  }
}

export default connect(mapStateToProps, {
  toggleStartPauseTrack,
  setPlayedTime,
  startSeek,
  stopSeek,
  changeSeek,
  pauseActiveTrack,
  playActiveTrack,
  zeroPlayedTime
})(MusicBar)
