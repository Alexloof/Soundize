import React, { Component } from 'react'
import { connect } from 'react-redux'
import screenfull from 'screenfull'
import { withRouter } from 'react-router-dom'

import AudioPlayer from './AudioPlayer'
import MusicBarActions from './MusicBarActions'
import TrackMenu from './TrackMenu'

import {
  removeTrackFromQueuedTracks,
  setActiveTrack,
  setActiveTrackindex,
  addTrackToPlaylist,
  addTrackToQueuedList
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
  playPrevTrack,
  toggleShuffle
} from '../actions/player_actions'

class MusicBar extends Component {
  state = {
    duration: 30, // Placeholder just for Spotify
    muted: false,
    volume: 0.5,
    loop: false,
    dropdownClassName: 'dropdown'
  }
  componentDidMount() {
    this.createVisualization()
  }

  createVisualization = () => {
    let context = new (window.AudioContext || window.webkitAudioContext)()
    let analyser = context.createAnalyser()
    let canvas = this.refs.analyzerCanvas
    //let canvasTwo = document.getElementById('analyzerTwo')
    let ctx = canvas.getContext('2d')
    // let ctx2 = canvasTwo ? canvasTwo.getContext('2d') : null
    var audio = document.getElementById('audioPlayer')
    this.audioSrc = context.createMediaElementSource(audio)
    this.audioSrc.connect(analyser)
    this.audioSrc.connect(context.destination)
    analyser.connect(context.destination)

    const renderFrame = () => {
      if (document.getElementById('analyzerTwo')) {
        canvasTwo = document.getElementById('analyzerTwo')
        ctx2 = canvasTwo.getContext('2d')
      }
      let freqData = new Uint8Array(analyser.frequencyBinCount)

      analyser.getByteFrequencyData(freqData)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#ff6b42'
      // ctx2 ? ctx2.clearRect(0, 0, canvasTwo.width, canvasTwo.height) : null
      // ctx2 ? (ctx2.fillStyle = '#ff6b42') : null

      let bars = 100
      for (var i = 0; i < analyser.frequencyBinCount; i++) {
        let bar_x = i * 3
        let bar_width = 2
        let bar_height = -(freqData[i] / 2)
        ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
        // ctx2
        //   ? ctx2.fillRect(bar_x, canvasTwo.height, bar_width, bar_height)
        //   : null
      }
      requestAnimationFrame(renderFrame)
    }
    const draw = () => {
      if (document.getElementById('analyzerTwo')) {
        ctx2.clearRect(0, 0, WIDTH, HEIGHT)
        drawVisual = requestAnimationFrame(draw)
        analyser.getByteTimeDomainData(dataArray)

        ctx2.fillStyle = 'rgb(200, 200, 200)'
        ctx2.fillRect(0, 0, WIDTH, HEIGHT)
        ctx2.lineWidth = 2
        ctx2.strokeStyle = 'rgb(0, 0, 0)'

        ctx2.beginPath()
        var sliceWidth = WIDTH * 1.0 / bufferLength
        var x = 0

        for (var i = 0; i < bufferLength; i++) {
          var v = dataArray[i] / 128.0
          var y = v * HEIGHT / 2

          if (i === 0) {
            ctx2.moveTo(x, y)
          } else {
            ctx2.lineTo(x, y)
          }

          x += sliceWidth
        }

        ctx2.lineTo(canvas.width, canvas.height / 2)
        myCanvas.stroke()
      }
    }

    renderFrame()
  }

  navigateToTrackDetailPage = () => {
    this.props.history.push(`/tracks/${this.props.activeTrack.id}`)
  }
  navigateToArtistDetailPage = id => {
    this.props.history.push(`/artists/${id}`)
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
        return (
          <span
            key={index}
            onClick={() => this.navigateToArtistDetailPage(artist.id)}
          >
            {artist.name}
          </span>
        )
      } else {
        return (
          <span
            key={index}
            onClick={() => this.navigateToArtistDetailPage(artist.id)}
          >
            {artist.name + ', '}
          </span>
        )
      }
    })
  }
  addTrackToPlaylist = (ownerId, playlistId, spotifyURI) => {
    this.props.addTrackToPlaylist(ownerId, playlistId, spotifyURI)
    this.toggleDropdown()
  }
  addTrackToQueuedList = track => {
    this.props.addTrackToQueuedList(track)
    this.toggleDropdown()
  }
  toggleDropdown = () => {
    if (this.state.dropdownClassName === 'dropdown') {
      this.setState({ dropdownClassName: 'dropdown is-active' })
      document.addEventListener('mousedown', this.handleClick)
    } else {
      this.setState({ dropdownClassName: 'dropdown' })
      document.removeEventListener('mousedown', this.handleClick)
    }
  }
  handleClick = event => {
    if (this.state.dropdownClassName === 'dropdown is-active') {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.setState({ dropdownClassName: 'dropdown' })
      }
    }
  }
  setMenuWrapperRef = node => {
    this.wrapperRef = node
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
            <div className={this.state.dropdownClassName}>
              <TrackMenu
                privatePlaylists={this.props.privatePlaylists}
                track={this.props.activeTrack}
                setMenuWrapperRef={this.setMenuWrapperRef}
                toggleDropdown={() => this.toggleDropdown()}
                addTrackToPlaylist={(ownerId, playlistId, uri) =>
                  this.addTrackToPlaylist(ownerId, playlistId, uri)
                }
                addTrackToQueuedList={track => this.addTrackToQueuedList(track)}
                isMyPlaylist={false}
              />
            </div>
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
              <p
                onClick={() => this.navigateToTrackDetailPage()}
                className="track-title"
              >
                {this.props.activeTrack.name}
              </p>
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
            isShuffling={this.props.isShuffling}
            toggleShuffle={() => this.props.toggleShuffle()}
          />
          <div className="fullscreen" onClick={e => this.requestFullScreen(e)}>
            <span className="icon">
              <i className="fa fa-expand" aria-hidden="true" />
            </span>
          </div>
          <div className="track-running-wrapper">
            <div className="time-counter">
              {(
                Math.round(this.state.duration * this.props.playedTime) / 100
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

const mapStateToProps = ({ track, player, playlist }) => {
  return {
    activeTrack: track.activeTrack,
    isPlaying: player.isPlaying,
    isSeeking: player.isSeeking,
    playedTime: player.playedTime,
    showMusicbar: player.showMusicbar,
    queuedTracklist: track.queuedTracks,
    playingTracklist: track.playingTracklist,
    activeTrackIndex: track.activeTrackIndex,
    latestPlayedTracks: track.latestPlayedTracks,
    privatePlaylists: playlist.privatePlaylists,
    isShuffling: player.isShuffling
  }
}

export default withRouter(
  connect(mapStateToProps, {
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
    playPrevTrack,
    addTrackToPlaylist,
    addTrackToQueuedList,
    toggleShuffle
  })(MusicBar)
)
