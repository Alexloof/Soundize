import {
  getTracklistOfPlaylist,
  addTrackToPlaylistCall,
  removeTrackFromPlaylistCall
} from './spotifyApi_actions'

// actions
export const SET_ACTIVE_TRACKLIST = 'set_active_tracklist'
export const ADD_TRACK_TO_QUEUED_LIST = 'add_track_to_queued_list'
export const REMOVE_TRACK_FROM_QUEUED_LIST = 'remove_track_from_queued_list'
export const ADD_TRACK_TO_LATEST_PLAYED = 'add_track_to_latest_played'

export const setActiveTracklist = (ownerId, playlistId) => async dispatch => {
  let tracklist = await getTracklistOfPlaylist(ownerId, playlistId, dispatch)

  if (tracklist) {
    dispatch({ type: SET_ACTIVE_TRACKLIST, payload: tracklist })
  }
}

export const addTrackToQueuedList = track => async dispatch => {
  dispatch({ type: ADD_TRACK_TO_QUEUED_LIST, payload: track })
}

export const removeTrackFromQueuedTracks = indexToRemove => async dispatch => {
  dispatch({ type: REMOVE_TRACK_FROM_QUEUED_LIST, payload: indexToRemove })
}

export const addTrackToLatestPlayed = track => async dispatch => {
  dispatch({ type: ADD_TRACK_TO_LATEST_PLAYED, payload: track })
}

export const addTrackToPlaylist = (
  ownerId,
  playlistId,
  spotifyURI,
  dispatch
) => async dispatch => {
  await addTrackToPlaylistCall()
}

export const removeTrackFromPlaylist = (
  ownerId,
  playlistId,
  spotifyURI
) => async dispatch => {
  const tracks = [{ uri: spotifyURI }]
  await removeTrackFromPlaylistCall(ownerId, playlistId, tracks, dispatch)
}
