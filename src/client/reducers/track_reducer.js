import { SET_ACTIVE_TRACKLIST } from '../actions/track_actions'

const INITIAL_STATE = {
  tracklist: {},
  activeTracklist: {},
  loadingTracklist: false,
  activeTrack: {},
  activeTrackIndex: '',
  latestPlayedTacks: [],
  queuedTracks: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ACTIVE_TRACKLIST:
      return { ...state, activeTracklist: action.payload }
    default:
      return state
  }
}
