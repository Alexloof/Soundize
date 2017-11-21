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
      return (
        <li className="new-releases-item" key={index}>
          <img src={release.images[0].url} />
          <div className="new-releases-item-name">
            <h2>{release.name}</h2>
          </div>
        </li>
      )
    })
  }
  render() {
    return (
      <div className="new-releases-component">
        <h1>Nya releaser</h1>
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
