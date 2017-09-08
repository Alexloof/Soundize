import React, { Component } from "react"
import { Link } from "react-router"
var SpotifyWebApi = require("spotify-web-api-node")
var spotifyApi = new SpotifyWebApi()

import { browserHistory } from "react-router"

import Nav from "./Nav"
import MusicBar from "./MusicBar"

class App extends Component {
  state = {
    token: "",
    user: "",
    playlists: "",
    tracklist: "",
    activeTrack: "",
    playing: false,
    playedTime: 0,
    seeking: false
  }

  componentDidMount() {
    console.log(localStorage.getItem("token"))
    if (
      !localStorage.getItem("token") ||
      (localStorage.getItem("token") !==
        this.props.location.hash.slice(14, -44) &&
        this.props.location.hash)
    ) {
      console.log("Ny token")
      let newHash = this.props.location.hash.slice(14, -44)
      localStorage.setItem("token", newHash)
    }
    spotifyApi.setAccessToken(localStorage.getItem("token"))
    this.getMe()
  }
  getPlaylists() {
    spotifyApi.getUserPlaylists(this.state.user.id).then(data => {
      this.onClickPlaylist(data.body.items[0].owner.id, data.body.items[0].id)
      this.setState({ playlists: data.body.items }, () =>
        browserHistory.replace("/app/stream")
      )
    }, function(err) {
      console.log("Something went wrong getting playlists!", err)
    })
  }
  getMe() {
    spotifyApi.getMe().then(data => {
      this.setState({ user: data.body }, () => this.getPlaylists())
    }, function(err) {
      console.log("Something went wrong getting user details!", err)
    })
  }
  onClickPlaylist = (user, id) => {
    spotifyApi.getPlaylist(user, id).then(data => {
      this.setState({ tracklist: data.body })
    }, function(err) {
      console.log("Something went wrong getting clickedtracklist!", err)
    })
  }
  getTrackAnalysis = id => {
    spotifyApi.getAudioAnalysisForTrack(id).then(
      function(data) {
        console.log(data.body)
      },
      function(err) {
        done(err)
      }
    )
  }
  setActiveTrack = track => {
    this.setState({ activeTrack: track })
  }
  stopActiveTrack = track => {
    this.setState({ playing: false })
  }
  startActiveTrack = track => {
    this.setState({ playing: true })
  }
  setPlayedTime = playedTime => {
    this.setState({ playedTime: playedTime.played })
  }
  onSeekMouseDown = () => {
    this.setState({ seeking: true })
  }
  onSeekChange = e => {
    this.setState({ playedTime: e })
  }
  onSeekMouseUp = e => {
    this.setState({ seeking: false, playedTime: e })
  }
  render() {
    const childrenWithExtraProp = React.Children.map(
      this.props.children,
      child => {
        return React.cloneElement(child, {
          playlists: this.state.playlists,
          tracklist: this.state.tracklist,
          onClickPlaylist: this.onClickPlaylist,
          getTrackAnalysis: this.getTrackAnalysis,
          setActiveTrack: this.setActiveTrack,
          stopActiveTrack: this.stopActiveTrack,
          startActiveTrack: this.startActiveTrack,
          activeTrack: this.state.activeTrack,
          playing: this.state.playing,
          playedTime: this.state.playedTime,
          onSeekMouseDown: this.onSeekMouseDown,
          onSeekChange: this.onSeekChange,
          onSeekMouseUp: this.onSeekMouseUp
        })
      }
    )
    return (
      <div>
        <Nav user={this.state.user} />
        {childrenWithExtraProp}
        <MusicBar
          activeTrack={this.state.activeTrack}
          playing={this.state.playing}
          startTrack={this.startActiveTrack}
          stopTrack={this.stopActiveTrack}
          setPlayedTime={this.setPlayedTime}
          playedTime={this.state.playedTime}
          seeking={this.state.seeking}
          onSeekMouseDown={this.onSeekMouseDown}
          onSeekChange={this.onSeekChange}
          onSeekMouseUp={this.onSeekMouseUp}
        />
      </div>
    )
  }
}

export default App
