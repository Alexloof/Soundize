import React, { Component } from 'react'

class AddTrackToPlaylistModal extends Component {
  prepareCloseModal = () => {
    let checkedBoxes = document.querySelectorAll('input[name=checkbox]:checked')
    checkedBoxes.forEach(input => {
      input.checked = false
    })
    this.props.closeModal()
  }
  addTrackToPlaylist = () => {
    let checkedBoxes = document.querySelectorAll('input[name=checkbox]:checked')
    let playlistsId = []
    checkedBoxes.forEach(input => {
      playlistsId.push({
        playlistId: input.dataset.id,
        ownerId: input.dataset.owner
      })
    })
    if (playlistsId.length > 0) {
      this.props.addTrackToPlaylists(playlistsId)
      this.prepareCloseModal()
    }
  }
  renderPlaylists = playlists => {
    return playlists.map((playlist, index) => {
      return (
        <li key={index}>
          <p>{playlist.name}</p>
          <input
            type="checkbox"
            data-id={playlist.id}
            data-owner={playlist.owner.id}
            name="checkbox"
          />
        </li>
      )
    })
  }
  render() {
    return (
      <div className="add-track-to-playlist-modal">
        <div
          onClick={() => this.prepareCloseModal()}
          className="modal-background"
        />
        <div className="modal-content">
          <h1 className="title">Add track to playlists</h1>
          <ul className="playlist-menu">
            {this.renderPlaylists(this.props.privatePlaylists)}
          </ul>

          <div className="field is-grouped is-grouped-centered">
            <p className="control">
              <a
                onClick={() => this.prepareCloseModal()}
                className="button is-light"
              >
                Avbryt
              </a>
            </p>
            <p className="control">
              <a
                onClick={() => this.addTrackToPlaylist()}
                className="button is-primary"
              >
                Skapa
              </a>
            </p>
          </div>
        </div>

        <button
          onClick={() => this.prepareCloseModal()}
          className="modal-close is-large"
          aria-label="close"
        />
      </div>
    )
  }
}

export default AddTrackToPlaylistModal
