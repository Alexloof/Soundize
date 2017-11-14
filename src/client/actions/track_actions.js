import {
  getTracklistOfPlaylist,
  addTrackToPlaylistCall,
  removeTrackFromPlaylistCall
} from './spotifyApi_actions'

import { ZERO_PLAYED_TIME } from './player_actions'

// actions
export const SET_ACTIVE_TRACKLIST = 'set_active_tracklist'
export const SET_PLAYING_TRACKLIST = 'set_playing_tracklist'
export const ADD_TRACK_TO_QUEUED_LIST = 'add_track_to_queued_list'
export const REMOVE_TRACK_FROM_QUEUED_LIST = 'remove_track_from_queued_list'
export const ADD_TRACK_TO_LATEST_PLAYED = 'add_track_to_latest_played'
export const SET_ACTIVE_TRACK = 'set_active_track'
export const SET_ACTIVE_TRACKINDEX = 'set_active_trackindex'

export const setActiveTracklist = (ownerId, playlistId) => async dispatch => {
  let tracklist = await getTracklistOfPlaylist(ownerId, playlistId, dispatch)

  if (tracklist) {
    dispatch({ type: SET_ACTIVE_TRACKLIST, payload: tracklist })
  }
}

export const setPlayingTracklist = tracklist => async dispatch => {
  dispatch({ type: SET_PLAYING_TRACKLIST, payload: tracklist })
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
  spotifyURI
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

export const setActiveTrack = (track, trackIndex) => async dispatch => {
  dispatch({ type: SET_ACTIVE_TRACK, payload: track })
  dispatch({ type: SET_ACTIVE_TRACKINDEX, payload: trackIndex })
  dispatch({ type: ZERO_PLAYED_TIME })
  dispatch(addTrackToLatestPlayed(track))
}

export const setActiveTrackindex = trackIndex => async dispatch => {
  dispatch({ type: SET_ACTIVE_TRACKINDEX, payload: trackIndex })
}
