import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import screenfull from 'screenfull'

class MusicBar extends Component {
  state = {
    activeTrack: {
      artists: [],
      album: ''
    },
    playing: false,
    duration: 0,
    played: 0,
    loaded: 0,
    muted: false,
    volume: 0.5,
    loop: false
  }
  componentWillReceiveProps(props) {
    if (props.activeTrack.id !== this.props.activeTrack.id) {
      if (props.activeTrack) {
        this.setState({ activeTrack: props.activeTrack })
      }
    }
  }
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
    if (!this.props.seeking) {
      this.props.setPlayedTime(state)
    }
  }
  startStopTrack = track => {
    this.setState({ playing: !this.state.playing })
  }
  onSeekMouseDown = e => {
    this.props.onSeekMouseDown()
  }
  onSeekChange = e => {
    this.props.onSeekChange(parseFloat(e.target.value))
  }
  onSeekMouseUp = e => {
    this.player.seekTo(parseFloat(e.target.value))
    this.props.onSeekMouseUp(parseFloat(e.target.value))
  }
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }
  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }
  renderPlayPauseButton = () => {
    return this.props.playing ? (
      <button
        onClick={() => this.props.stopTrack()}
        className="button play-btn"
      >
        <span className="icon">
          <i className="fa fa-pause" />
        </span>
      </button>
    ) : (
      <button
        onClick={() => this.props.startTrack(this.state.activeTrack)}
        className="button play-btn"
      >
        <span className="icon">
          <i className="fa fa-play" />
        </span>
      </button>
    )
  }
  trackEnded = () => {
    if (this.state.loop) {
      this.props.zeroTrack()
      this.props.startTrack(this.state.activeTrack)
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
    if (this.props.displayMusicBar) {
      className = 'music-bar display-music-bar'
    } else {
      className = 'music-bar'
    }
    return (
      <div className={className}>
        <div className="my-container">
          <div className="img-info">
            {this.state.activeTrack.album ? (
              <img src={this.state.activeTrack.album.images[0].url} />
            ) : (
              <img />
            )}
            <div className="track-info">
              <p className="artist-label">
                {this.renderArtists(this.state.activeTrack.artists)}
              </p>
              <p className="track-title">{this.state.activeTrack.name}</p>
            </div>
          </div>
          <div className="track-controls">
            <button
              onClick={() => console.log('stepBack track')}
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
              {(Math.round(this.state.duration * this.props.playedTime) /
                100).toFixed(2)}
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
                //ref={input => (this.props.playedTime = input)}
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
          <div className="fullscreen" onClick={e => this.requestFullScreen(e)}>
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
          key={this.state.activeTrack.id}
          playing={this.props.playing}
          url={
            this.state.activeTrack.preview_url ? (
              this.state.activeTrack.preview_url
            ) : null
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
  }
}

export default MusicBar
