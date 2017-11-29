import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { getTrackDetail } from '../actions/track_actions'
import { setupAuthToAPI } from '../actions/user_actions'

class TrackDetail extends Component {
  async componentWillMount() {
    window.scroll(0, 0)
    await this.props.setupAuthToAPI()
    this.props.getTrackDetail(this.props.match.params.id)
  }
  render() {
    return (
      <div className="track-detail-component">
        <h1>TrackDetail</h1>
        <p>{this.props.trackDetail.name}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ track }) => {
  return { trackDetail: track.trackDetail }
}

export default withRouter(
  connect(mapStateToProps, { setupAuthToAPI, getTrackDetail })(TrackDetail)
)
