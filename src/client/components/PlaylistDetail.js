import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Tracklist from './Tracklist'
import Loading from './general/Loading'

class PlaylistDetail extends Component {
  componentWillMount() {
    this.props.onClickPlaylist(
      this.props.match.params.user,
      this.props.match.params.id
    )
  }
  renderTracklistWithProps = props => {
    if (props.tracklist.id === props.match.params.id) {
      return <Tracklist {...props} />
    } else {
      return <Loading />
    }
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
        <div className="column is-6 tracklist">
          {this.renderTracklistWithProps(this.props)}
        </div>
      </div>
    )
  }
}

export default withRouter(PlaylistDetail)
