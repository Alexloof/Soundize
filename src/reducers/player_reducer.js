import {
  PLAY_ACTIVE_TRACK,
  PAUSE_ACTIVE_TRACK,
  TOGGLE_ACTIVE_TRACK,
  SHOW_MUSICBAR,
  SET_PLAYED_TIME,
  START_SEEK,
  STOP_SEEK,
  CHANGE_SEEK,
  ZERO_PLAYED_TIME,
  TOGGLE_SHUFFLE
} from '../actions/player_actions'

const INITIAL_STATE = {
  isPlaying: false,
  playedTime: 0,
  isSeeking: false,
  showMusicbar: false,
  isShuffling: false
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PLAY_ACTIVE_TRACK:
      return { ...state, isPlaying: true }

    case PAUSE_ACTIVE_TRACK:
      return { ...state, isPlaying: false }

    case TOGGLE_ACTIVE_TRACK:
      return { ...state, isPlaying: !state.isPlaying }

    case SHOW_MUSICBAR:
      return { ...state, showMusicbar: true }

    case SET_PLAYED_TIME:
      return { ...state, playedTime: action.payload }

    case START_SEEK:
      return { ...state, isSeeking: true }

    case STOP_SEEK:
      return { ...state, isSeeking: false }

    case CHANGE_SEEK:
      return { ...state, playedTime: action.payload }

    case ZERO_PLAYED_TIME:
      return { ...state, playedTime: 0 }

    case TOGGLE_SHUFFLE:
      return { ...state, isShuffling: !state.isShuffling }
    default:
      return state
  }
}
