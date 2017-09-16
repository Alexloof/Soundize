import React, { Component } from "react"

import Tracklist from "./Tracklist"
import Playlists from "./Playlists"
import ExtraInfolist from "./ExtraInfolist"

class Home extends Component {
  state = {
    modalClassName: "modal create-playlist-modal"
  }
  closeModal = () => {
    this.setState({ modalClassName: "modal create-playlist-modal" })
  }
  openModal = () => {
    this.setState({ modalClassName: "modal create-playlist-modal is-active" })
  }
  render() {
    return (
      <div>
        <div className="columns">
          <div className="column playlists-menu">
            <Playlists
              onClickPlaylist={this.props.onClickPlaylist}
              playlists={this.props.playlists}
              featuredPlaylists={this.props.featuredPlaylists}
              activePlaylist={this.props.activePlaylist}
              setActivePlaylist={this.props.setActivePlaylist}
              onOpenCreatePlaylistModal={this.openModal}
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
                playing={this.props.playing}
                playedTime={this.props.playedTime}
                onSeekMouseDown={this.props.onSeekMouseDown}
                onSeekChange={this.props.onSeekChange}
                onSeekMouseUp={this.props.onSeekMouseUp}
              />
            ) : null}
          </div>
          <div className="column extra-infolist">
            <ExtraInfolist
              latestPlayed={this.props.latestPlayed}
              startActiveTrack={this.props.startActiveTrack}
              setActiveTrack={this.props.setActiveTrack}
            />
          </div>
        </div>
        <div className={this.state.modalClassName}>
          <div onClick={() => this.closeModal()} className="modal-background" />
          <div className="modal-content">Hej</div>
          <button
            onClick={() => this.closeModal()}
            className="modal-close is-large"
            aria-label="close"
          />
        </div>
      </div>
    )
  }
}

export default Home
