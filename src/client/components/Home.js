import React, { Component } from 'react'

import Tracklist from './Tracklist'
import Playlists from './Playlists'
import ExtraInfolist from './ExtraInfolist'
import CreateNewPlaylistModal from './modals/CreateNewPlaylistModal'

class Home extends Component {
  state = {
    modalClassName: 'modal create-playlist-modal'
  }
  closeModal = () => {
    this.setState({ modalClassName: 'modal create-playlist-modal' })
  }
  openModal = () => {
    this.setState({ modalClassName: 'modal create-playlist-modal is-active' })
  }
  createPlaylist = (name, desc) => {
    this.props.createPlaylist(name, desc)
    this.closeModal()
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
              playing={this.props.playing}
              playingPlaylist={this.props.playingPlaylist}
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
                me={this.props.me}
                unfollowActivePlaylist={this.props.unfollowActivePlaylist}
                deleteActivePlaylist={this.props.deleteActivePlaylist}
                privatePlaylists={this.props.privatePlaylists}
                addTrackToPlaylist={this.props.addTrackToPlaylist}
                addTrackToQueue={this.props.addTrackToQueue}
                removeTrackFromPlaylist={this.props.removeTrackFromPlaylist}
              />
            ) : null}
          </div>
          <div className="column extra-infolist">
            <ExtraInfolist
              latestPlayed={this.props.latestPlayed}
              startActiveTrack={this.props.startActiveTrack}
              setActiveTrack={this.props.setActiveTrack}
              queuedTracks={this.props.queuedTracks}
              removeTrackFromQueuedTracks={
                this.props.removeTrackFromQueuedTracks
              }
            />
          </div>
        </div>
        <div className={this.state.modalClassName}>
          <CreateNewPlaylistModal
            createPlaylist={(name, desc) => this.createPlaylist(name, desc)}
            closeModal={this.closeModal}
          />
        </div>
      </div>
    )
  }
}

export default Home
