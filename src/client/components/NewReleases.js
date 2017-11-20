import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getNewReleases } from '../actions/playlist_actions'

class NewReleases extends Component {
  componentDidMount() {
    this.props.getNewReleases()
  }
  renderNewReleases = () => {
    return this.props.newReleases.map((release, index) => {
      return <li key={index}>{release.id}</li>
    })
  }
  render() {
    return (
      <div className="new-releases-component">
        <h1>new releases</h1>
        <ul className="new-releases-list">{this.renderNewReleases()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ playlist }) => {
  return {
    newReleases: playlist.newReleases
  }
}

export default withRouter(
  connect(mapStateToProps, { getNewReleases })(NewReleases)
)
