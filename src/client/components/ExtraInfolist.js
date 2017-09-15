import React, { Component } from "react"
import FlipMove from "react-flip-move"

class ExtraInfolist extends Component {
  renderLatestPlayed = tracks => {
    return tracks.map((track, index) => {
      return (
        <li key={index}>
          <a>{track.name}</a>
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
