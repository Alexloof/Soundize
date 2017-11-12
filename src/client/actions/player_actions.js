// actions
export const PLAY_ACTIVE_TRACK = 'play_active_track'
export const PAUSE_ACTIVE_TRACK = 'pause_active_track'
export const TOGGLE_ACTIVE_TRACK = 'toogle_active_track'
export const SHOW_MUSICBAR = 'show_musicbar'

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
