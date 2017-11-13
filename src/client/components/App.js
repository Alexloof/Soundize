import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { getCurrentUser, setupAuthToAPI } from '../actions/user_actions'

import Nav from './Nav'
import MusicBar from './MusicBar'
import Home from './Home'
import Search from './Search'

var SpotifyWebApi = require('spotify-web-api-node')
var spotifyApi = new SpotifyWebApi()

import { Route } from 'react-router-dom'

class App extends Component {
  async componentDidMount() {
    await this.props.setupAuthToAPI()
    await this.props.getCurrentUser()
    console.log(this.props.user)
  }
  playNextTrack = () => {
    let nextTrack
    let newQueuedTracks = []
    if (this.state.queuedTracks.length > 0) {
      nextTrack = this.state.queuedTracks[0]
      this.state.queuedTracks.map((track, index) => {
        if (index !== 0) {
          newQueuedTracks.push(track)
        }
      })
      this.setState({ queuedTracks: newQueuedTracks })
      if (this.state.latestPlayed[0] === nextTrack) {
        this.zeroTrack()
        this.startActiveTrack(nextTrack)
      } else {
        this.setActiveTrack(
          nextTrack,
          this.state.activeTracklist,
          this.state.activeTrackIndex
        )
      }
    } else {
      this.state.activeTracklist.tracks
        ? (nextTrack = this.state.activeTracklist.tracks.items[
            this.state.activeTrackIndex + 1
          ].track)
        : (nextTrack = this.state.activeTracklist[
            this.state.activeTrackIndex + 1
          ])
      this.setActiveTrack(
        nextTrack,
        this.state.activeTracklist,
        this.state.activeTrackIndex + 1
      )
    }
    if (!nextTrack.preview_url) {
      setTimeout(() => {
        this.playNextTrack()
      }, 500)
    } else {
      this.addTrackToLatestPlayed(nextTrack)
    }
  }
  playPreviousTrack = () => {
    if (this.state.latestPlayed.length > 1) {
      let newTrack = this.state.latestPlayed[1]
      if (newTrack === this.state.activeTrack) {
        newTrack = this.state.latestPlayed[2]
      }
      this.setActiveTrack(newTrack)
      this.setState({ playing: true })
    }
  }
  render() {
    const extraProps = {
      spotifyApi: spotifyApi
    }
    const getProps = props => {
      return Object.assign({}, props, extraProps)
    }
    return (
      <div style={{ marginTop: '52px' }}>
        <Nav user={this.props.user} />
        {this.props.routes.map((route, i) => (
          <Route
            key={i}
            exact
            path={route.path}
            render={props => (
              <route.component {...getProps(props)} routes={route.routes} />
            )}
          />
        ))}
        <MusicBar />
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return { user: user.user }
}

export default connect(mapStateToProps, { getCurrentUser, setupAuthToAPI })(App)
