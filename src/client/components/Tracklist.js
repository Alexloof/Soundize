import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  deletePlaylist,
  getPlaylists,
  setActivePlaylist,
  unfollowPlaylist,
  followPlaylist
} from '../actions/playlist_actions'

import {
  setActiveTracklist,
  setActiveTrack,
  setPlayingTracklist
} from '../actions/track_actions'

import {
  playActiveTrack,
  pauseActiveTrack,
  showMusicbar
} from '../actions/player_actions'

import Track from './Track'
import UnfollowPlaylistModal from './modals/UnfollowPlaylistModal'
import DeletePlaylistModal from './modals/DeletePlaylistModal'
import TracklistBannerScroll from './TracklistBannerScroll'
import TracklistBanner from './TracklistBanner'

class Tracklist extends Component {
  state = {
    scrolled: false,
    unfollowModalClassName: 'modal are-you-sure',
    deleteModalClassName: 'modal are-you-sure'
  }
  componentDidMount = () => {
    let scrolled = false
    const el = document.getElementsByClassName('tracklist-scroll-banner')
    this.interval = setInterval(() => {
      if (window.pageYOffset > 300) {
        if (scrolled === false) {
          scrolled = true
          el[0].classList = [el[0].classList[0] + ' banner-show']
        }
      } else {
        scrolled = false
        el[0].classList = ['tracklist-scroll-banner']
      }
    }, 700)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  showUnfollowModal = () => {
    this.setState({ unfollowModalClassName: 'modal are-you-sure is-active' })
  }
  showDeleteModal = () => {
    this.setState({ deleteModalClassName: 'modal are-you-sure is-active' })
  }
  closeUnfollowPlaylistModal = () => {
    this.setState({ unfollowModalClassName: 'modal are-you-sure' })
  }
  closeDeletePlaylistModal = () => {
    this.setState({ deleteModalClassName: 'modal are-you-sure' })
  }
  followActivePlaylist = () => {
    this.props.followPlaylist(
      this.props.activeTracklist.owner.id,
      this.props.activeTracklist.id
    )
  }
  unfollowActivePlaylist = () => {
    this.closeUnfollowPlaylistModal()
    this.props.unfollowPlaylist(
      this.props.activeTracklist.owner.id,
      this.props.activeTracklist.id
    )
  }
  deleteActivePlaylist = async () => {
    this.closeDeletePlaylistModal()
    await this.props.deletePlaylist(
      this.props.user.id,
      this.props.activeTracklist.id
    )
    await this.props.getPlaylists()

    // set new active tracklist to hide the deleted one
    this.props.setActiveTracklist(
      this.props.userPlaylists[0].owner.id,
      this.props.userPlaylists[0].id
    )
    this.props.setActivePlaylist(this.props.userPlaylists[0].id)
  }
  checkPlaylistOwner = () => {
    if (this.props.activeTracklist.owner.id === this.props.user.id) {
      return true
    } else {
      false
    }
  }
  playActiveTracklist = async () => {
    this.props.showMusicbar()
    await this.props.setActiveTrack(
      this.props.activeTracklist.tracks.items[0].track,
      0
    )
    this.props.playActiveTrack()
    this.props.setPlayingTracklist(this.props.activeTracklist)
  }
  removeTrackFromPlaylist = spotifyURI => {
    this.props.removeTrackFromPlaylist(
      this.props.activeTracklist.owner.id,
      this.props.activeTracklist.id,
      spotifyURI
    )
  }
  setActiveTrack = (track, index) => {
    this.props.setActiveTrack(track, this.props.activeTracklist, index)
  }
  checkFollowStatusOnPlaylist = playlistId => {
    const status = this.props.userPlaylists.map(playlist => {
      if (playlist.id === playlistId) {
        return true
      }
    })
    if (status.includes(true)) {
      return true
    } else {
      return false
    }
  }
  renderTracklist() {
    return this.props.activeTracklist.tracks.items.map((track, index) => {
      if (track.track !== null) {
        return (
          <Track
            key={index}
            track={track.track}
            setActiveTrack={this.setActiveTrack}
            stopActiveTrack={this.props.stopActiveTrack}
            startActiveTrack={this.props.startActiveTrack}
            activeTrack={this.props.activeTrack}
            playing={this.props.playing}
            playedTime={this.props.playedTime}
            onSeekMouseDown={this.props.onSeekMouseDown}
            onSeekChange={this.props.onSeekChange}
            onSeekMouseUp={this.props.onSeekMouseUp}
            privatePlaylists={this.props.privatePlaylists}
            addTrackToPlaylist={this.props.addTrackToPlaylist}
            addTrackToQueue={this.props.addTrackToQueue}
            myPlaylist={this.checkPlaylistOwner()}
            removeTrackFromPlaylist={this.removeTrackFromPlaylist}
            index={index}
          />
        )
      }
    })
  }
  render() {
    console.log(this.props)
    return (
      <div className="menu ">
        <TracklistBannerScroll
          activeTracklist={this.props.activeTracklist}
          playingTracklist={this.props.playingTracklist}
          isPlaying={this.props.isPlaying}
          playActiveTracklist={this.playActiveTracklist}
          stopActiveTrack={this.props.pauseActiveTrack}
          showDeleteModal={this.showDeleteModal}
        />

        <TracklistBanner
          activeTracklist={this.props.activeTracklist}
          playingTracklist={this.props.playingTracklist}
          isPlaying={this.props.isPlaying}
          playActiveTracklist={this.playActiveTracklist}
          stopActiveTrack={this.props.pauseActiveTrack}
          showDeleteModal={this.showDeleteModal}
          checkFollowStatusOnPlaylist={this.checkFollowStatusOnPlaylist}
          showUnfollowModal={this.showUnfollowModal}
          followActivePlaylist={this.followActivePlaylist}
          userId={this.props.user.id}
        />

        <ul className="menu-list tracklist-tracks">
          {this.props.activeTracklist ? this.renderTracklist() : null}
        </ul>

        <div className={this.state.unfollowModalClassName}>
          <UnfollowPlaylistModal
            unfollowPlaylist={this.unfollowActivePlaylist}
            closeModal={this.closeUnfollowPlaylistModal}
          />
        </div>
        <div className={this.state.deleteModalClassName}>
          <DeletePlaylistModal
            deletePlaylist={this.deleteActivePlaylist}
            closeModal={this.closeDeletePlaylistModal}
          />
        </div>
      </div>
    )
  }
}

Tracklist.propTypes = {}

const mapStateToProps = ({ user, track, playlist, player }) => {
  return {
    user: user.user,
    userPlaylists: playlist.playlists,
    activeTracklist: track.activeTracklist,
    privatePlaylists: playlist.privatePlaylists,
    activeTracklist: track.activeTracklist,
    playingTracklist: track.playingTracklist,
    isPlaying: player.isPlaying
  }
}

export default connect(mapStateToProps, {
  deletePlaylist,
  getPlaylists,
  setActiveTracklist,
  setActivePlaylist,
  unfollowPlaylist,
  followPlaylist,
  playActiveTrack,
  pauseActiveTrack,
  setActiveTrack,
  showMusicbar,
  setPlayingTracklist
})(Tracklist)
