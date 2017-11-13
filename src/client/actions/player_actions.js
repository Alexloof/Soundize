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
