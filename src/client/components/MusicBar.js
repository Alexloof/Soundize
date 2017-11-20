import React, { Component } from 'react'
import { connect } from 'react-redux'
import screenfull from 'screenfull'

import AudioPlayer from './AudioPlayer'
import MusicBarActions from './MusicBarActions'

import {
  removeTrackFromQueuedTracks,
  setActiveTrack,
  setActiveTrackindex
} from '../actions/track_actions'

import {
  toggleStartPauseTrack,
  setPlayedTime,
  playActiveTrack,
  pauseActiveTrack,
  startSeek,
  stopSeek,
  changeSeek,
  zeroPlayedTime,
  playNextTrack,
  playPrevTrack
} from '../actions/player_actions'

class MusicBar extends Component {
  state = {
    duration: 30, // Placeholder just for Spotify
    muted: false,
    volume: 0.5,
    loop: false
  }
  componentDidMount() {
    this.createVisualization()
  }
  createVisualization = () => {
    let context = new (window.AudioContext || window.webkitAudioContext)()
    let analyser = context.createAnalyser()
    let canvas = this.refs.analyzerCanvas
    let ctx = canvas.getContext('2d')
    var audio = document.getElementById('audioPlayer')
    let audioSrc = context.createMediaElementSource(audio)
    audioSrc.connect(analyser)
    audioSrc.connect(context.destination)
    analyser.connect(context.destination)

    const renderFrame = () => {
      let freqData = new Uint8Array(analyser.frequencyBinCount)
      requestAnimationFrame(renderFrame)
      analyser.getByteFrequencyData(freqData)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#ff6b42'
      let bars = 100
      for (var i = 0; i < bars; i++) {
        let bar_x = i * 3
        let bar_width = 2
        let bar_height = -(freqData[i] / 2)
        ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
      }
    }
    renderFrame()
  }
  onProgress = time => {
    // We only want to update time slider if we are not currently seeking
    if (!this.props.isSeeking) {
      this.props.setPlayedTime(time)
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
    const audioPlayer = document.getElementById('audioPlayer')
    audioPlayer.currentTime = parseFloat(e.target.value * this.state.duration)
    this.props.stopSeek()
    this.props.changeSeek(parseFloat(e.target.value))
  }
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }
  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }
  onEnded = () => {
    if (!this.state.loop) {
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
  renderFormattedArtists(artists) {
    return artists.map((artist, index) => {
      if (index + 1 === artists.length) {
        return artist.name
      } else {
        return artist.name + ', '
      }
    })
  }

  render() {
    let className
    if (this.props.showMusicbar) {
      className = 'music-bar display-music-bar'
    } else {
      className = 'music-bar'
    }

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
                {this.renderFormattedArtists(this.props.activeTrack.artists)}
              </p>
              <p className="track-title">{this.props.activeTrack.name}</p>
            </div>
          </div>
          <MusicBarActions
            playPreviousTrack={() => this.props.playPrevTrack()}
            playNextTrack={() => this.props.playNextTrack()}
            toggleLoop={() => this.setState({ loop: !this.state.loop })}
            isLooping={this.state.loop}
            isPlaying={this.props.isPlaying}
            pauseActiveTrack={() => this.props.pauseActiveTrack()}
            playActiveTrack={() => this.props.playActiveTrack()}
          />
          <div className="fullscreen" onClick={e => this.requestFullScreen(e)}>
            <span className="icon">
              <i className="fa fa-expand" aria-hidden="true" />
            </span>
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
          <AudioPlayer
            isPlaying={this.props.isPlaying}
            muted={this.state.muted}
            volume={this.state.volume}
            url={this.props.activeTrack.preview_url}
            onEnded={this.onEnded}
            onProgress={this.onProgress}
            loop={this.state.loop}
          />
          <canvas ref="analyzerCanvas" id="analyzer" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ track, player }) => {
  return {
    activeTrack: track.activeTrack,
    isPlaying: player.isPlaying,
    isSeeking: player.isSeeking,
    playedTime: player.playedTime,
    showMusicbar: player.showMusicbar,
    queuedTracklist: track.queuedTracks,
    playingTracklist: track.playingTracklist,
    activeTrackIndex: track.activeTrackIndex,
    latestPlayedTracks: track.latestPlayedTracks
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
  zeroPlayedTime,
  removeTrackFromQueuedTracks,
  setActiveTrack,
  setActiveTrackindex,
  playNextTrack,
  playPrevTrack
})(MusicBar)
