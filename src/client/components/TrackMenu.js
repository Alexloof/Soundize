import React, { Component } from 'react'

export default ({
  toggleDropdown,
  setMenuWrapperRef,
  privatePlaylists,
  addTrackToPlaylist,
  removeTrackFromPlaylist,
  addTrackToQueuedList,
  track,
  isMyPlaylist
}) => {
  const renderPlaylists = () => {
    return privatePlaylists.map((playlist, index) => {
      return (
        <li key={index}>
          <a
            onClick={() =>
              addTrackToPlaylist(playlist.owner.id, playlist.id, track.uri)}
          >
            {playlist.name}
          </a>
        </li>
      )
    })
  }
  return (
    <div>
      <div className="dropdown-trigger">
        <div
          onClick={() => toggleDropdown()}
          className="track-open-mini-meny"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <i className="fa fa-circle" aria-hidden="true" />
          <i className="fa fa-circle" aria-hidden="true" />
          <i className="fa fa-circle" aria-hidden="true" />
        </div>
      </div>

      <div
        ref={setMenuWrapperRef}
        className="dropdown-menu track-mini-meny"
        id="dropdown-menu"
        role="menu"
      >
        <div className="dropdown-content">
          <div
            className="dropdown-item open-add-track"
            aria-haspopup="true"
            aria-controls="dropdown-menu4"
          >
            Lägg till i spellista<span className="icon is-small">
              <i className="fa fa-angle-right" aria-hidden="true" />
            </span>
            <div className="mini-meny-playlists">
              <ul className="menu-list">{renderPlaylists()}</ul>
            </div>
          </div>
          {track.preview_url !== null ? (
            <div
              onClick={() => addTrackToQueuedList(track)}
              className="dropdown-item"
            >
              Lägg till i kön
            </div>
          ) : null}
          {isMyPlaylist ? (
            <div
              onClick={() => removeTrackFromPlaylist(track.uri)}
              className="dropdown-item"
            >
              Ta bort från spellistan
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
