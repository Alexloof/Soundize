import React, { Component } from "react"

import Tracklist from "./Tracklist"
import Playlists from "./Playlists"

class Home extends Component {
  render() {
    return (
      <div>
        <div className="columns">
          <div className="column playlists-menu">
            <Playlists
              onClickPlaylist={this.props.onClickPlaylist}
              playlists={this.props.playlists}
            />
          </div>
          <div className="column is-6 tracklist">
            {this.props.tracklist ? (
              <Tracklist
                tracklist={this.props.tracklist}
                setActiveTrack={this.props.setActiveTrack}
                activeTrack={this.props.activeTrack}
                stopActiveTrack={this.props.stopActiveTrack}
                startActiveTrack={this.props.startActiveTrack}
              />
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
