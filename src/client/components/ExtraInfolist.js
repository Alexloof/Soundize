import React, { Component } from 'react'
import FlipMove from 'react-flip-move'
import { connect } from 'react-redux'

class ExtraInfolist extends Component {
  startTrack = track => {
    this.props.setActiveTrack(track)
    this.props.startActiveTrack(track)
  }
  renderArtists(artists) {
    return artists.map((artist, index) => {
      if (index + 1 === artists.length) {
        return artist.name
      } else {
        return artist.name + ', '
      }
    })
  }
  renderLatestPlayed = tracks => {
    return tracks.map((track, index) => {
      return (
        <li key={index}>
          <div className="left-grp">
            {track.album.images.length !== 0 ? (
              <img src={track.album.images[0].url} />
            ) : (
              <img />
            )}
            <div className="track-info">
              <div className="artist-label">
                {this.renderArtists(track.artists)}
              </div>
              <div className="title-label">{track.name}</div>
            </div>
          </div>
          <div className="right-grp">
            <button
              onClick={() => this.startTrack(track)}
              className="button play-btn"
            >
              <span className="icon">
                <i className="fa fa-play" />
              </span>
            </button>
          </div>
        </li>
      )
    })
  }
  renderQueuedTracks = tracks => {
    return tracks.map((track, index) => {
      return (
        <li key={index}>
          <div className="left-grp">
            {track.album.images.length !== 0 ? (
              <img src={track.album.images[0].url} />
            ) : (
              <img />
            )}
            <div className="track-info">
              <div className="artist-label">
                {this.renderArtists(track.artists)}
              </div>
              <div className="title-label">{track.name}</div>
            </div>
          </div>
          <div className="right-grp">
            <span
              onClick={() => this.props.removeTrackFromQueuedTracks(index)}
              className="icon"
            >
              <i className="fa fa-remove" />
            </span>
          </div>
        </li>
      )
    })
  }
  render() {
    return (
      <aside className="menu">
        <p className="menu-label top-label">
          <span>Senast spelade</span>
        </p>
        <ul className="menu-list latest-played">
          <FlipMove
            duration={350}
            easing="ease-out"
            appearAnimation="accordionHorizontal"
          >
            {this.props.latestPlayedTacks ? (
              this.renderLatestPlayed(this.props.latestPlayedTacks)
            ) : (
              <li style={{ marginLeft: '30px' }}>Inga spelade låtar...</li>
            )}
          </FlipMove>
        </ul>
        <p style={{ marginTop: '30px' }} className="menu-label top-label">
          <span>Köade låtar</span>
        </p>
        <ul className="menu-list queued-tracks">
          <FlipMove
            duration={350}
            easing="ease-out"
            appearAnimation="accordionHorizontal"
          >
            {this.props.queuedTracks ? (
              this.renderQueuedTracks(this.props.queuedTracks)
            ) : (
              <li style={{ marginLeft: '30px' }}>Du har inga låtar på kö</li>
            )}
          </FlipMove>
        </ul>
      </aside>
    )
  }
}

const mapStateToProps = ({ track }) => {
  return {
    queuedTracks: track.queuedTracks,
    latestPlayedTacks: track.latestPlayedTacks
  }
}

export default connect()(ExtraInfolist)
