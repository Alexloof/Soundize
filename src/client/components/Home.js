import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import {
  getPlaylists,
  getPrivatePlaylists,
  getFeaturedPlaylists,
  createPlaylist
} from '../actions/playlist_actions'

import Tracklist from './Tracklist'
import Playlists from './Playlists'
import ExtraInfolist from './ExtraInfolist'
import CreateNewPlaylistModal from './modals/CreateNewPlaylistModal'
import Loading from './general/Loading'

class Home extends Component {
  state = {
    modalClassName: 'modal create-playlist-modal'
  }
  async componentWillReceiveProps(newProps) {
    if (this.props.user !== newProps.user) {
      await this.props.getPlaylists(newProps.user.id)
      this.props.getPrivatePlaylists(this.props.playlists, newProps.user.id)
      this.props.getFeaturedPlaylists()
    }
  }
  closeModal = () => {
    this.setState({ modalClassName: 'modal create-playlist-modal' })
  }
  openModal = () => {
    this.setState({ modalClassName: 'modal create-playlist-modal is-active' })
  }
  createPlaylist = async (name, desc) => {
    this.closeModal()
    await this.props.createPlaylist(this.props.user.id, name, desc)
    this.props.getPlaylists()
    this.props.getPrivatePlaylists()
  }
  render() {
    return (
      <div>
        <div className="columns">
          <div className="column playlists-menu">
            <Playlists
              onOpenCreatePlaylistModal={this.openModal}
              //playing={this.props.playing}
              //playingPlaylist={this.props.playingPlaylist}
            />
          </div>
          <div className="column is-6 tracklist">
            {!this.props.activeTracklist ? (
              <div>Välkommen Tillbaka!</div>
            ) : this.props.loadingPlaylist ? (
              <Loading />
            ) : (
              <Tracklist
                //setActiveTrack={this.props.setActiveTrack}
                activeTrack={this.props.activeTrack}
                //stopActiveTrack={this.props.stopActiveTrack}
                //startActiveTrack={this.props.startActiveTrack}
                //playing={this.props.playing}
                playedTime={this.props.playedTime}
                onSeekMouseDown={this.props.onSeekMouseDown}
                onSeekChange={this.props.onSeekChange}
                onSeekMouseUp={this.props.onSeekMouseUp}
                //privatePlaylists={this.props.privatePlaylists}
                addTrackToPlaylist={this.props.addTrackToPlaylist}
                addTrackToQueue={this.props.addTrackToQueue}
                removeTrackFromPlaylist={this.props.removeTrackFromPlaylist}
                //playingPlaylist={this.props.playingPlaylist}
                //playVisibleTracklist={this.props.playVisibleTracklist}
                //checkFollowStatusOnPlaylist={
                //  this.props.checkFollowStatusOnPlaylist
                //}
              />
            )}
          </div>
          <div className="column extra-infolist">
            <ExtraInfolist
              //latestPlayed={this.props.latestPlayed}
              startActiveTrack={this.props.startActiveTrack}
              setActiveTrack={this.props.setActiveTrack}
              //queuedTracks={this.props.queuedTracks}
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

const mapStateToProps = ({ user, playlist, track }) => {
  return {
    user: user.user,
    playlists: playlist.playlists,
    privatePlaylists: playlist.privatePlaylists,
    featuredPlaylists: playlist.featuredPlaylists,
    activeTracklist: track.activeTracklist
  }
}

export default connect(mapStateToProps, {
  getPlaylists,
  getPrivatePlaylists,
  getFeaturedPlaylists,
  createPlaylist
})(Home)
