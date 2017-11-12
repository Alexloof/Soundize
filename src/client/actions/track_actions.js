import { getTracklistOfPlaylist } from './spotifyApi_actions'

// actions
export const SET_ACTIVE_TRACKLIST = 'set_active_tracklist'

export const setActiveTracklist = (ownerId, playlistId) => async dispatch => {
  let tracklist = await getTracklistOfPlaylist(ownerId, playlistId, dispatch)

  if (tracklist) {
    dispatch({ type: SET_ACTIVE_TRACKLIST, payload: tracklist })
  }
}
