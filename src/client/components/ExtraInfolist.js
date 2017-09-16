import React, { Component } from "react"
import FlipMove from "react-flip-move"

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
        return artist.name + ", "
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
            {this.props.latestPlayed.length > 0 ? (
              this.renderLatestPlayed(this.props.latestPlayed)
            ) : (
              <li>Inga spelade låtar...</li>
            )}
          </FlipMove>
        </ul>
      </aside>
    )
  }
}

export default ExtraInfolist
