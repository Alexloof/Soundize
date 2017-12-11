import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import PieChart from './PieChart'
import AddTrackToPlaylistModal from './modals/AddTrackToPlaylistModal'

import { setupAuthToAPI } from '../actions/user_actions'

import {
  getTrackDetail,
  setActiveTrack,
  addTrackToQueuedList,
  addTrackToPlaylist
} from '../actions/track_actions'

import {
  pauseActiveTrack,
  playActiveTrack,
  showMusicbar
} from '../actions/player_actions'

class TrackDetail extends Component {
  state = {
    modalClassName: 'modal create-playlist-modal'
  }
  async componentWillMount() {
    window.scroll(0, 0)
    this.props.getTrackDetail(this.props.match.params.id)
  }
  componentDidMount() {
    const wavesurfer = WaveSurfer.create({
      container: '#waveform',
      height: 200,
      interact: false,
      waveColor: '#444444',
      hideScrollbar: true
    })

    // time issue with wavesurfer module
    setTimeout(() => {
      this.createVisuals(wavesurfer)
    }, 200)

    this.unlisten = this.props.history.listen(async (location, action) => {
      let incID = location.pathname.slice(12)
      let word = location.pathname.slice(5, 11)
      if (incID && word == 'tracks') {
        if (incID !== this.props.match.params.id) {
          await this.props.getTrackDetail(incID)
          this.createVisuals(wavesurfer)
        }
      }
    })
  }

  createVisuals = wavesurfer => {
    wavesurfer.load(this.props.trackDetail.preview_url)
    wavesurfer.on('ready', () => {
      let canvasWave = document.getElementById('waveform').childNodes[0]
        .childNodes[1]
      let width = '1300px'
      canvasWave.style.maxWidth = width
      var ctx = canvasWave.getContext('2d')
    })
  }
  componentWillUnmount() {
    this.unlisten()
  }
  closeModal = () => {
    this.setState({ modalClassName: 'modal create-playlist-modal' })
  }
  openModal = () => {
    this.setState({ modalClassName: 'modal create-playlist-modal is-active' })
  }
  navigateToArtistDetailPage = id => {
    this.props.history.push(`/app/artists/${id}`)
  }
  renderFormattedArtists = artists => {
    return artists.map((artist, index) => {
      if (index + 1 === artists.length) {
        return (
          <h2
            key={index}
            onClick={() => this.navigateToArtistDetailPage(artist.id)}
          >
            {artist.name}
          </h2>
        )
      } else {
        return (
          <h2
            key={index}
            onClick={() => this.navigateToArtistDetailPage(artist.id)}
          >
            {artist.name + ', '}
          </h2>
        )
      }
    })
  }
  renderKey = key => {
    switch (key) {
      case 0:
        return 'C'
      case 1:
        return 'C#'
      case 2:
        return 'D'
      case 3:
        return 'D#'
      case 4:
        return 'E'
      case 5:
        return 'F'
      case 6:
        return 'F#'
      case 7:
        return 'G'
      case 8:
        return 'G#'
      case 9:
        return 'A'
      case 10:
        return 'A#'
      case 11:
        return 'B'
    }
  }
  startTrack = async track => {
    if (track.id === this.props.activeTrack.id) {
      this.props.playActiveTrack()
    } else {
      await this.props.setActiveTrack(track)
      this.props.playActiveTrack()
    }
    this.props.showMusicbar()
  }
  addTrackToPlaylists = playlists => {
    playlists.map(playlist => {
      this.props.addTrackToPlaylist(
        playlist.ownerId,
        playlist.playlistId,
        this.props.trackDetail.uri
      )
    })
  }
  renderStartStopButton = track => {
    if (track.preview_url !== null) {
      return this.props.isPlaying && this.props.activeTrack.id === track.id ? (
        <button
          onClick={() => this.props.pauseActiveTrack()}
          className="button"
        >
          Pause
        </button>
      ) : (
        <button onClick={() => this.startTrack(track)} className="button">
          Play
        </button>
      )
    } else {
      return <button className="button">Broken link :(</button>
    }
  }
  render() {
    const { trackDetail } = this.props
    return (
      <div className="track-detail-component">
        <div className="track-header">
          <div className="track-art-wrapper">
            <img
              className="track-art"
              src={
                trackDetail.album.images
                  ? trackDetail.album.images[0].url
                  : 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif'
              }
            />
          </div>
          <div className="track-info-details">
            <div className="track-names">
              <div className="track-artists">
                {trackDetail.artists
                  ? this.renderFormattedArtists(trackDetail.artists)
                  : null}
              </div>
              <h1>{trackDetail.name}</h1>
            </div>
            <div className="track-character">
              <p>
                BPM: <span>{Math.round(trackDetail.tempo || 0)}</span>
              </p>
              <p>
                Key:{' '}
                <span>
                  {this.renderKey(trackDetail.key)}{' '}
                  {trackDetail.mode == 0 ? 'minor' : 'major'}
                </span>
              </p>
            </div>
            <div className="track-measurements">
              <div>
                <p>Acousticness</p>
                <PieChart
                  measure={trackDetail.acousticness}
                  cn={'graph-one'}
                  cnt={'updated-text-one'}
                />
              </div>
              <div>
                <p>Danceability</p>
                <PieChart
                  measure={trackDetail.danceability}
                  cn={'graph-two'}
                  cnt={'updated-text-two'}
                />
              </div>
              <div>
                <p>Energy</p>
                <PieChart
                  measure={trackDetail.energy}
                  cn={'graph-three'}
                  cnt={'updated-text-three'}
                />
              </div>
              <div>
                <p>Instrumentalness</p>
                <PieChart
                  measure={trackDetail.instrumentalness}
                  cn={'graph-four'}
                  cnt={'updated-text-four'}
                />
              </div>
              <div>
                <p>Speechiness</p>
                <PieChart
                  measure={trackDetail.speechiness}
                  cn={'graph-five'}
                  cnt={'updated-text-five'}
                />
              </div>
              <div>
                <p>Valence</p>
                <PieChart
                  measure={trackDetail.valence}
                  cn={'graph-six'}
                  cnt={'updated-text-six'}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="track-player-view">
          <div className="track-player-options">
            {this.renderStartStopButton(trackDetail)}
            <button className="button" onClick={() => this.openModal()}>
              Add to playlist
            </button>
            <button
              className="button"
              onClick={() => this.props.addTrackToQueuedList(trackDetail)}
            >
              Queue
            </button>
          </div>

          {/* {this.props.activeTrack.id === trackDetail.id ? (
            <canvas ref="analyzerCanvasTwo" id="analyzerTwo" />
          ) : null} */}
          <div id="waveform" />
          <div className={this.state.modalClassName}>
            <AddTrackToPlaylistModal
              addTrackToPlaylists={this.addTrackToPlaylists}
              closeModal={this.closeModal}
              privatePlaylists={this.props.privatePlaylists}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ track, player, playlist }) => {
  return {
    trackDetail: track.trackDetail,
    isPlaying: player.isPlaying,
    activeTrack: track.activeTrack,
    playedTime: player.playedTime,
    privatePlaylists: playlist.privatePlaylists || []
  }
}

export default withRouter(
  connect(mapStateToProps, {
    setupAuthToAPI,
    getTrackDetail,
    setActiveTrack,
    pauseActiveTrack,
    playActiveTrack,
    showMusicbar,
    addTrackToQueuedList,
    addTrackToPlaylist
  })(TrackDetail)
)
