import React, { Component } from "react"

import Track from "./Track"

class Tracklist extends Component {
  state = {
    isPlaying: false,
    className: "tracklist-banner",
    scrolled: false
  }
  componentDidMount = () => {
    let scrolled = false

    setInterval(() => {
      if (window.pageYOffset > 180) {
        if (scrolled === false) {
          scrolled = true
          this.setState({ className: "tracklist-banner scroll-state" })
          setTimeout(() => {
            this.setState({
              className: "tracklist-banner scroll-state scroll-position"
            })
          }, 100)
        }
      } else {
        this.setState({ className: "tracklist-banner" })
        scrolled = false
      }
    }, 1000)
  }

  renderTracklist() {
    return this.props.tracklist.tracks.items.map((track, index) => {
      if (track.track !== null) {
        if (track.track.id === this.props.activeTrack.id) {
          return (
            <Track
              key={index}
              track={track}
              setActiveTrack={this.props.setActiveTrack}
              stopActiveTrack={this.props.stopActiveTrack}
              startActiveTrack={this.props.startActiveTrack}
              activeTrack={this.props.activeTrack}
              playing={this.props.playing}
              playedTime={this.props.playedTime}
              onSeekMouseDown={this.props.onSeekMouseDown}
              onSeekChange={this.props.onSeekChange}
              onSeekMouseUp={this.props.onSeekMouseUp}
            />
          )
        } else {
          return (
            <Track
              key={index}
              track={track}
              setActiveTrack={this.props.setActiveTrack}
              stopActiveTrack={this.props.stopActiveTrack}
              startActiveTrack={this.props.startActiveTrack}
            />
          )
        }
      }
    })
  }
  render() {
    return (
      <div className="menu ">
        <div className={this.state.className}>
          <div className="tracklist-banner-info">
            <div className="large-info">
              <p className="menu-label">Spellista</p>
              <p className="tracklist-name title">
                {this.props.tracklist.name ? (
                  this.props.tracklist.name
                ) : (
                  "Låtar"
                )}
              </p>
            </div>
            <div className="tracklist-banner-info-lower">
              <div className="small-info">
                <p>
                  Följare:{" "}
                  {this.props.tracklist.followers ? (
                    this.props.tracklist.followers.total
                  ) : (
                    "0"
                  )}
                </p>
                <p>
                  Skapad av:{" "}
                  {this.props.tracklist.owner ? (
                    this.props.tracklist.owner.display_name ||
                    this.props.tracklist.owner.id
                  ) : (
                    "Okänd"
                  )}{" "}
                </p>
              </div>
              <div className="tracklist-banner-btn-group">
                <button className="button is-outlined">
                  {this.state.className ===
                    "tracklist-banner scroll-state scroll-position" ||
                  this.state.className === "tracklist-banner scroll-state" ? (
                    <i className="fa fa-play" />
                  ) : (
                    "Spela Upp"
                  )}
                </button>
                <button className="button">
                  {this.state.className ===
                    "tracklist-banner scroll-state scroll-position" ||
                  this.state.className === "tracklist-banner scroll-state" ? (
                    <span className="icon">
                      <i className="fa fa-navicon" />
                    </span>
                  ) : (
                    "Följer"
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="tracklist-img">
            {this.props.tracklist.images ? (
              <img
                src={
                  this.props.tracklist.images[0].url ||
                  this.props.tracklist.images[0].url
                }
              />
            ) : null}
          </div>
        </div>
        <ul className="menu-list tracklist-tracks">
          {this.props.tracklist ? this.renderTracklist() : null}
        </ul>
      </div>
    )
  }
}

export default Tracklist
