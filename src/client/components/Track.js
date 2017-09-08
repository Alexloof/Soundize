import React, { Component } from "react"
import ReactPlayer from "react-player"

class Track extends Component {
  onSeekMouseDown = e => {
    this.setState({ seeking: true })
    this.props.onSeekMouseDown()
  }
  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
    this.props.onSeekChange(parseFloat(e.target.value))
  }
  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.props.onSeekMouseUp(parseFloat(e.target.value))
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
    this.props.setActiveTrack(track)
    this.props.startActiveTrack(track)
  }
  stopTrack = track => {
    this.props.stopActiveTrack(track)
  }
  setClassName = () => {
    if (this.props.activeTrack) {
      return "track active-track"
    } else {
      return "track"
    }
  }
  renderStartStopButton = () => {
    if (this.props.track.track.preview_url !== null) {
      return this.props.playing && this.props.activeTrack ? (
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
      )
    } else {
      return (
        <button className="button play-btn">
          <span className="icon">
            <i className="fa fa-stop" />
          </span>
        </button>
      )
    }
  }
  render() {
    return (
      <li className={this.setClassName()}>
        <div className="img-wrapper">
          <div className="img-click-play">
            {this.props.playing && this.props.activeTrack ? (
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
          </div>
          {this.props.track.track.album.images.length !== 0 ? (
            <img src={this.props.track.track.album.images[0].url} />
          ) : (
            <img />
          )}
        </div>

        <div className="track-info">
          <div className="track-section-higher">
            <div className="artist-label">
              {this.renderArtists(this.props.track.track.artists)}
            </div>
            <div className="title-label">{this.props.track.track.name}</div>
            {!this.props.activeTrack ? (
              <div className="time-counter hidden">
                {(Math.round(30 * this.props.playedTime) / 100).toFixed(2)}
              </div>
            ) : (
              <div className="time-counter">
                {(Math.round(30 * (this.props.playedTime || 0)) / 100).toFixed(
                  2
                )}
              </div>
            )}
            <div className="time-duration">
              {(Math.round(30) / 100).toFixed(2)}
            </div>
          </div>
          <div className="track-section-lower">
            {this.renderStartStopButton()}

            <input
              type="range"
              min={0}
              max={1}
              step="any"
              value={this.props.playedTime || 0}
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
