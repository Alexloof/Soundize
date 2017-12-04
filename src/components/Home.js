import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import {
  getPlaylists,
  getPrivatePlaylists,
  getFeaturedPlaylists,
  createPlaylist
} from '../actions/playlist_actions'

import { setActivePlaylist } from '../actions/playlist_actions'
import { setActiveTracklist } from '../actions/track_actions'

import Tracklist from './Tracklist'
import Playlists from './Playlists'
import ExtraInfolist from './ExtraInfolist'
import CreateNewPlaylistModal from './modals/CreateNewPlaylistModal'
import Loading from './general/Loading'

class Home extends Component {
  state = {
    modalClassName: 'modal create-playlist-modal'
  }
  componentDidMount() {
    this.getAllPlaylists(this.props)
    window.scroll(0, 0)
  }
  async componentWillReceiveProps(newProps) {
    if (this.props.user !== newProps.user) {
      this.getAllPlaylists(newProps)
    }
  }
  getAllPlaylists = async newProps => {
    await this.props.getPlaylists(newProps.user.id)
    this.props.getPrivatePlaylists(this.props.playlists, newProps.user.id)
    this.props.getFeaturedPlaylists()
    if (this.props.playlists.length > 1) {
      this.setStandardPlaylist(this.props.playlists)
    }
  }
  setStandardPlaylist = playlists => {
    this.props.setActivePlaylist(playlists[0].id)
    this.props.setActiveTracklist(playlists[0].owner.id, playlists[0].id)
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
  renderTracklist = () => {
    return !this.props.activeTracklist || !this.props.activeTracklist.id ? (
      <Loading />
    ) : (
      <Tracklist />
    )
  }
  render() {
    return (
      <div>
        <div className="columns">
          <div className="column playlists-menu">
            <Playlists onOpenCreatePlaylistModal={this.openModal} />
          </div>
          <div className="column is-6 tracklist">{this.renderTracklist()}</div>
          <div className="column extra-infolist">
            <ExtraInfolist />
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
  createPlaylist,
  setActivePlaylist,
  setActiveTracklist
})(Home)
