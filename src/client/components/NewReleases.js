import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { setupAuthToAPI } from '../actions/user_actions'
import { getNewReleases } from '../actions/playlist_actions'

class NewReleases extends Component {
  async componentDidMount() {
    await this.props.setupAuthToAPI()
    this.props.getNewReleases()
  }
  navigateToDetailPage = release => {
    if (release.album_type === 'album') {
      this.props.history.push(`/albums/${release.id}`)
    } else {
      console.log(release, 'single')
    }
  }
  renderNewReleases = () => {
    return this.props.newReleases.map((release, index) => {
      return (
        <li
          onClick={() => this.navigateToDetailPage(release)}
          className="new-releases-item"
          key={index}
        >
          <img src={release.images[0].url} />
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
  connect(mapStateToProps, { getNewReleases, setupAuthToAPI })(NewReleases)
)
