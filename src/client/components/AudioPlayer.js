import React, { Component } from 'react'

class AudioPlayer extends Component {
  state = {
    isPlaying: false,
    muted: false,
    volume: '',
    playbackRate: '',
    url: ''
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.url !== nextProps.url) {
      this.setState({ url: nextProps.url }, () => {
        this.startPlayer()
      })
    }

    if (nextProps.isPlaying && !this.state.isPlaying) {
      this.startPlayer()
    }
    if (!nextProps.isPlaying && this.state.isPlaying) {
      this.pausePlayer()
    }
    if (this.state.volume !== nextProps.volume && !nextProps.muted) {
      this.audioPlayer.volume = nextProps.volume
    }
    if (this.state.muted !== nextProps.muted) {
      this.audioPlayer.volume = nextProps.muted ? 0 : nextProps.volume
    }
    if (
      this.state.playbackRate !== nextProps.playbackRate &&
      this.audioPlayer.setPlaybackRate
    ) {
      this.audioPlayer.setPlaybackRate(nextProps.playbackRate)
      this.setState({ playbackRate: nextProps.playbackRate })
    }
  }
  timeUpdate = e => {
    const duration = this.audioPlayer.duration
    if (duration) {
      this.props.onProgress(this.audioPlayer.currentTime / duration)
    }
  }
  startPlayer = () => {
    this.audioPlayer.play()
    this.setState({ isPlaying: true })
  }
  pausePlayer = () => {
    this.audioPlayer.pause()
    this.setState({ isPlaying: false })
  }
  stopPlayer = () => {
    this.audioPlayer.removeAttribute('src')
    return
  }
  render() {
    return (
      <audio
        ref={player => {
          this.audioPlayer = player
        }}
        id="audioPlayer"
        autoPlay={false}
        crossOrigin="anonymous"
        src={this.props.url}
        volume={0.5}
        onEnded={() => this.props.onEnded()}
        onTimeUpdate={e => this.timeUpdate(e)}
        loop={this.props.loop}
      />
    )
  }
}

export default AudioPlayer
