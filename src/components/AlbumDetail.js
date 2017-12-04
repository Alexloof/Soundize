import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Track from './Track'

import { setActiveTracklistSolo } from '../actions/track_actions'
import { setupAuthToAPI } from '../actions/user_actions'
import { getAlbum } from '../actions/album_actions'

class AlbumDetail extends Component {
  async componentDidMount() {
    window.scroll(0, 0)
    await this.props.setupAuthToAPI()
    await this.props.getAlbum(this.props.match.params.id)
    let tracklist = {
      owner: {},
      name: '',
      tracks: {
        items: []
      }
    }
    if (this.props.album.tracks) {
      this.props.album.tracks.items.map(track => {
        const extraAttribut = {
          album: {
            images: [
              {
                url: this.props.album.images[0]
                  ? this.props.album.images[0].url
                  : null
              }
            ]
          }
        }
        const newTrack = { ...track, ...extraAttribut }
        tracklist.tracks.items.push({ track: newTrack })
      })
      this.props.setActiveTracklistSolo(tracklist)
    }
  }
  renderTracks = tracks => {
    return tracks.map((track, index) => {
      const extraAttribut = {
        album: {
          images: [
            {
              url: this.props.album.images[0]
                ? this.props.album.images[0].url
                : null
            }
          ]
        }
      }
      const newTrack = { ...track, ...extraAttribut }
      return (
        <Track
          key={index}
          track={newTrack}
          isMyPlaylist={false}
          index={index}
        />
      )
    })
  }
  render() {
    return (
      <div className="album-detail-component">
        <div className="tracklist-banner effect8">
          <div className="tracklist-banner-info">
            <div className="large-info">
              <p className="menu-label">Album</p>
              <p className="tracklist-name title">{this.props.album.name}</p>
            </div>
            <div className="tracklist-banner-info-lower">
              <div className="small-info">
                <p>Releas date: {this.props.album.release_date}</p>
              </div>
            </div>
          </div>
          <div className="tracklist-img">
            {this.props.album.images ? (
              <img
                src={
                  this.props.album.images.length > 0
                    ? this.props.album.images[0].url
                    : null
                }
              />
            ) : null}
          </div>
        </div>
        <ul>
          {this.props.album.tracks
            ? this.renderTracks(this.props.album.tracks.items)
            : null}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ album, track, player }) => {
  return {
    album: album.album,
    activeTracklist: track.activeTracklist,
    playingTracklistId: track.playingTracklist.id,
    isPlaying: player.isPlaying
  }
}

export default withRouter(
  connect(mapStateToProps, {
    setupAuthToAPI,
    getAlbum,
    setActiveTracklistSolo
  })(AlbumDetail)
)
