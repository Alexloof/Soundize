import React, { Component } from "react"

class Playlists extends Component {
  setActivePlaylist = (owner, id) => {
    this.props.setActivePlaylist(id)
    this.props.onClickPlaylist(owner, id)
  }
  renderPlaylists() {
    return this.props.playlists.map(playlist => {
      let className
      if (playlist.id === this.props.activePlaylist) {
        className = "tooltip active"
      } else {
        className = "tooltip"
      }
      return (
        <li
          className={className}
          key={playlist.id}
          onClick={() => this.setActivePlaylist(playlist.owner.id, playlist.id)}
        >
          <a>
            {playlist.name}
            <span className="tooltiptext">
              {playlist.owner.display_name || playlist.owner.id}
            </span>
          </a>
        </li>
      )
    })
  }

  render() {
    return (
      <aside className="menu ">
        <p className="menu-label">Spellistor</p>
        <ul className="menu-list">
          {this.props.playlists ? this.renderPlaylists() : null}
        </ul>
        <p className="menu-label new-playlist">
          <a>
            <i className="fa fa-chevron-up" aria-hidden="true" />Ny spellista
          </a>
        </p>
      </aside>
    )
  }
}

export default Playlists
