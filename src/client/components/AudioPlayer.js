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
    console.log(this.audioPlayer)
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
      <div>
        <audio
          ref={player => {
            this.audioPlayer = player
          }}
          id="audioPlayer"
          autoPlay={false}
          crossOrigin="anonymous"
          src={this.props.url}
        />
      </div>
    )
  }
}

export default AudioPlayer
