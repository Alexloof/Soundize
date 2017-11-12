import {
  PLAY_ACTIVE_TRACK,
  PAUSE_ACTIVE_TRACK,
  TOGGLE_ACTIVE_TRACK
} from '../actions/player_actions'

const INITIAL_STATE = {
  isPlaying: false,
  playedTime: 0,
  seeking: false,
  showMusicbar: false
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
    default:
      return state
  }
}
