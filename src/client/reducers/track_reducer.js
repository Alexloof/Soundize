import {
  SET_ACTIVE_TRACKLIST,
  ADD_TRACK_TO_QUEUED_LIST,
  REMOVE_TRACK_FROM_QUEUED_LIST,
  ADD_TRACK_TO_LATEST_PLAYED
} from '../actions/track_actions'

const INITIAL_STATE = {
  tracklist: {},
  activeTracklist: null,
  loadingTracklist: false,
  activeTrack: {},
  activeTrackIndex: '',
  latestPlayedTacks: null,
  queuedTracks: null
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ACTIVE_TRACKLIST:
      return { ...state, activeTracklist: action.payload }

    case ADD_TRACK_TO_QUEUED_LIST:
      if (state.queuedTracks) {
        return {
          ...state,
          queuedTracks: [...state.queuedTracks, action.payload]
        }
      } else {
        return { ...state, queuedTracks: [action.payload] }
      }

    case REMOVE_TRACK_FROM_QUEUED_LIST:
      let newQueuedTracks = state.queuedTracks.filter((track, index) => {
        return index !== indexToRemove
      })
      return { ...state, queuedTracks: newQueuedTracks }

    case ADD_TRACK_TO_LATEST_PLAYED:
      if (state.latestPlayedTacks) {
        return {
          ...state,
          latestPlayedTacks: [action.payload, ...state.latestPlayedTacks]
        }
      } else {
        return { ...state, latestPlayedTacks: [action.payload] }
      }

    default:
      return state
  }
}
