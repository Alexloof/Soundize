import React, { Component } from "react"
import ReactPlayer from "react-player"

class MusicBar extends Component {
  state = {
    activeTrack: {
      artists: [],
      album: ""
    },
    playing: false,
    duration: 0,
    played: 0,
    loaded: 0,
    muted: false,
    volume: 0.5
  }
  componentWillReceiveProps(props) {
    if (props.activeTrack.id !== this.props.activeTrack.id) {
      if (props.activeTrack) {
        this.setState({ activeTrack: props.activeTrack })
        //this.setState({ playing: true })
      }
    }
    if (props.playing === false) {
      this.setState({ playing: false })
    } else if (props.playing === true) {
      this.setState({ playing: true })
    }
  }
  renderArtists(artists) {
    return artists.map((artist, index) => {
      if (index + 1 === artists.length) {
        return artist.name
      } else {
        return artist.name + ", "
      }
    })
  }
  onProgress = state => {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }
  startStopTrack = track => {
    this.setState({ playing: !this.state.playing })
  }
  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }
  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }
  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }
  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }
  render() {
    return (
      <div className="music-bar">
        <div className="container">
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
          <button
            onClick={() => console.log("stepBack track")}
            className="button step-change-btn"
          >
            <span className="icon">
              <i className="fa fa-step-backward" />
            </span>
          </button>
          <button
            onClick={() => this.setState({ playing: !this.state.playing })}
            className="button play-btn"
          >
            <span className="icon">
              {!this.state.playing ? (
                <i className="fa fa-play" />
              ) : (
                <i className="fa fa-pause" />
              )}
            </span>
          </button>
          <button
            onClick={() => console.log("stepForward track")}
            className="button step-change-btn"
          >
            <span className="icon">
              <i className="fa fa-step-forward" />
            </span>
          </button>
          <button
            onClick={() => console.log("loop track")}
            className="button step-change-btn"
          >
            <span className="icon">
              <i className="fa fa-retweet" />
            </span>
          </button>
          <div className="time-counter">
            {(Math.round(this.state.duration * this.state.played) /
              100).toFixed(2)}
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={this.state.played}
            onMouseDown={this.onSeekMouseDown}
            onChange={this.onSeekChange}
            onMouseUp={this.onSeekMouseUp}
          />
          <div className="time-duration">
            {(Math.round(this.state.duration) / 100).toFixed(2)}
          </div>
          <div className="sound-options">
            <span className="icon" onClick={() => this.toggleMuted()}>
              {!this.state.muted ? (
                <i className="fa fa-volume-up" />
              ) : (
                <i className="fa fa-volume-off" />
              )}
            </span>
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
        <ReactPlayer
          ref={player => {
            this.player = player
          }}
          width={1}
          height={1}
          key={this.state.activeTrack.id}
          playing={this.state.playing}
          url={
            this.state.activeTrack.preview_url ? (
              this.state.activeTrack.preview_url
            ) : null
          }
          onError={e => console.log("error", e)}
          onDuration={duration => this.setState({ duration })}
          onEnded={() => this.setState({ playing: false })}
          onProgress={this.onProgress}
          onPlay={() => this.setState({ playing: true })}
          onPause={() => this.setState({ playing: false })}
          onEnded={() => this.setState({ playing: false })}
          progressFrequency={100}
          volume={this.state.volume}
          muted={this.state.muted}
        />
      </div>
    )
  }
}

export default MusicBar
