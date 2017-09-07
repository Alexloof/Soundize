import React, { Component } from "react"
import ReactPlayer from "react-player"

class Track extends Component {
  state = {
    playing: false,
    duration: 0,
    played: 0,
    loaded: 0
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
  onProgress = state => {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
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
  startTrack = track => {
    this.setState({ playing: true })
    this.props.setActiveTrack(track)
    this.props.startActiveTrack(track)
  }
  stopTrack = track => {
    this.setState({ playing: false })
    this.props.stopActiveTrack(track)
  }
  setClassName = () => {
    if (this.props.activeTrack) {
      return "track active-track"
    } else {
      return "track"
    }
  }
  render() {
    return (
      <li className={this.setClassName()}>
        {this.props.track.track.album.images.length !== 0 ? (
          <img src={this.props.track.track.album.images[0].url} />
        ) : (
          <img />
        )}
        <div className="track-info">
          <div className="track-section-higher">
            <div className="artist-label">
              {this.renderArtists(this.props.track.track.artists)}
            </div>
            <div className="title-label">{this.props.track.track.name}</div>
            {Math.round(this.state.duration * this.state.played) === 0 ? (
              <div className="time-counter hidden">
                {(Math.round(this.state.duration * this.state.played) /
                  100).toFixed(2)}
              </div>
            ) : (
              <div className="time-counter">
                {(Math.round(this.state.duration * this.state.played) /
                  100).toFixed(2)}
              </div>
            )}
            <div className="time-duration">
              {(Math.round(this.state.duration) / 100).toFixed(2)}
            </div>
          </div>
          <div className="track-section-lower">
            {this.state.playing && this.props.activeTrack ? (
              <button
                onClick={() => this.stopTrack(this.props.track.track)}
                className="button play-btn"
              >
                <span className="icon">
                  <i className="fa fa-pause" />
                </span>
              </button>
            ) : (
              <button
                onClick={() => this.startTrack(this.props.track.track)}
                className="button play-btn"
              >
                <span className="icon">
                  <i className="fa fa-play" />
                </span>
              </button>
            )}
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
          </div>
        </div>
      </li>
    )
  }
}

export default Track
