import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getNewReleases } from '../actions/playlist_actions'

class NewReleases extends Component {
  componentDidMount() {
    this.props.getNewReleases()
  }
  renderFormattedArtists(artists) {
    return artists.map((artist, index) => {
      if (index + 1 === artists.length) {
        return artist.name
      } else {
        return artist.name + ', '
      }
    })
  }
  renderNewReleases = () => {
    return this.props.newReleases.map((release, index) => {
      return (
        <li className="new-releases-item" key={index}>
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
  connect(mapStateToProps, { getNewReleases })(NewReleases)
)
