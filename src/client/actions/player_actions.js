import {
  removeTrackFromQueuedTracks,
  setActiveTrack,
  setActiveTrackindex
} from './track_actions'

// actions
export const PLAY_ACTIVE_TRACK = 'play_active_track'
export const PAUSE_ACTIVE_TRACK = 'pause_active_track'
export const TOGGLE_ACTIVE_TRACK = 'toogle_active_track'
export const SHOW_MUSICBAR = 'show_musicbar'
export const SET_PLAYED_TIME = 'set_played_time'
export const START_SEEK = 'start_seek'
export const STOP_SEEK = 'stop_seek'
export const CHANGE_SEEK = 'change_seek'
export const ZERO_PLAYED_TIME = 'zero_played_time'

export const playActiveTrack = () => async dispatch => {
  dispatch({ type: PLAY_ACTIVE_TRACK })
}

export const pauseActiveTrack = () => async dispatch => {
  dispatch({ type: PAUSE_ACTIVE_TRACK })
}

export const toggleStartPauseTrack = () => async dispatch => {
  dispatch({ type: TOGGLE_ACTIVE_TRACK })
}

export const showMusicbar = () => async dispatch => {
  dispatch({ type: SHOW_MUSICBAR })
}

export const setPlayedTime = playedTime => async dispatch => {
  dispatch({ type: SET_PLAYED_TIME, payload: playedTime })
}

export const startSeek = () => async dispatch => {
  dispatch({ type: START_SEEK })
}

export const stopSeek = () => async dispatch => {
  dispatch({ type: STOP_SEEK })
}

export const changeSeek = event => async dispatch => {
  dispatch({ type: CHANGE_SEEK, payload: event })
}

export const zeroPlayedTime = () => async dispatch => {
  dispatch({ type: ZERO_PLAYED_TIME })
}

export const playNextTrack = () => async (dispatch, getState) => {
  const queuedTracklist = getState().track.queuedTracks
  const activeTrackIndex = getState().track.activeTrackIndex
  const playingTracklist = getState().track.playingTracklist
  const searchStatus = getState().search.searchStatus
  const searchedTracks = getState().search.searchedTracks
  let nextTrack
  if (queuedTracklist.length > 0) {
    nextTrack = queuedTracklist[0]
    dispatch(removeTrackFromQueuedTracks(0))
    await dispatch(setActiveTrack(nextTrack))
    dispatch(playActiveTrack())
  } else {
    if (searchStatus) {
      if (activeTrackIndex !== searchedTracks.length - 1) {
        nextTrack = searchedTracks[activeTrackIndex + 1]
        if (!nextTrack.preview_url) {
          await dispatch(setActiveTrackindex(activeTrackIndex + 1))
          setTimeout(() => {
            dispatch(playNextTrack())
          }, 100)
        } else {
          await dispatch(setActiveTrack(nextTrack, activeTrackIndex + 1))
          dispatch(playActiveTrack())
        }
      }
    } else {
      if (activeTrackIndex !== playingTracklist.tracks.items.length - 1) {
        nextTrack = playingTracklist.tracks.items[activeTrackIndex + 1].track
        if (!nextTrack.preview_url) {
          await dispatch(setActiveTrackindex(activeTrackIndex + 1))
          setTimeout(() => {
            dispatch(playNextTrack())
          }, 100)
        } else {
          await dispatch(setActiveTrack(nextTrack, activeTrackIndex + 1))
          dispatch(playActiveTrack())
        }
      }
    }
  }
}

export const playPrevTrack = () => async (dispatch, getState) => {
  const latestPlayedTracks = getState().track.latestPlayedTracks
  let nextTrackPlay
  if (latestPlayedTracks.length > 1) {
    nextTrackPlay = latestPlayedTracks[latestPlayedTracks.length - 2]
    await dispatch(setActiveTrack(nextTrackPlay))
    dispatch(playActiveTrack())
  }
}
