import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

import { setActivePlaylist } from '../actions/playlist_actions'
import { setActiveTracklist } from '../actions/track_actions'

import Tracklist from './Tracklist'
import Loading from './general/Loading'

class PlaylistDetail extends Component {
  componentWillMount() {
    window.scroll(0, 0)
    this.setActivePlaylist(
      this.props.match.params.user,
      this.props.match.params.id
    )
  }
  setActivePlaylist = async (ownerId, playlistId) => {
    this.props.setActivePlaylist(playlistId)
    await this.props.setActiveTracklist(ownerId, playlistId)
  }

  renderTracklist = () => {
    return <Tracklist />
  }

  render() {
    return (
      <div className="columns">
        <button
          onClick={() => this.props.history.goBack()}
          className="go-back-button"
        >
          <i className="fa fa-chevron-left" aria-hidden="true" />
        </button>
        <div className="column is-6 tracklist">{this.renderTracklist()}</div>
      </div>
    )
  }
}

const mapStateToProps = ({ track }) => {
  return { activeTracklist: track.activeTracklist }
}

export default withRouter(
  connect(mapStateToProps, { setActiveTracklist, setActivePlaylist })(
    PlaylistDetail
  )
)
