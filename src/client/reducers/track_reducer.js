import {
  SET_ACTIVE_TRACKLIST,
  SET_PLAYING_TRACKLIST,
  ADD_TRACK_TO_QUEUED_LIST,
  REMOVE_TRACK_FROM_QUEUED_LIST,
  ADD_TRACK_TO_LATEST_PLAYED,
  SET_ACTIVE_TRACK,
  SET_ACTIVE_TRACKINDEX
} from '../actions/track_actions'

const INITIAL_STATE = {
  activeTracklist: null,
  playingTracklist: {
    id: ''
  },
  loadingTracklist: false,
  activeTrack: {
    id: null,
    images: null,
    artists: [],
    name: null
  },
  activeTrackIndex: 0,
  latestPlayedTracks: null,
  queuedTracks: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ACTIVE_TRACKLIST:
      return { ...state, activeTracklist: action.payload }

    case SET_PLAYING_TRACKLIST:
      return { ...state, playingTracklist: action.payload }

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
        return index !== action.payload
      })
      return { ...state, queuedTracks: newQueuedTracks }

    case ADD_TRACK_TO_LATEST_PLAYED:
      if (state.latestPlayedTracks) {
        if (
          state.latestPlayedTracks[state.latestPlayedTracks.length - 1].id !==
          action.payload.id
        ) {
          return {
            ...state,
            latestPlayedTracks: [...state.latestPlayedTracks, action.payload]
          }
        } else {
          return { ...state }
        }
      } else {
        return { ...state, latestPlayedTracks: [action.payload] }
      }

    case SET_ACTIVE_TRACK:
      return { ...state, activeTrack: action.payload }

    case SET_ACTIVE_TRACKINDEX:
      if (!action.payload && action.payload !== 0) {
        console.log('Inget track index skickades med vid start')
        return { ...state }
      } else {
        return { ...state, activeTrackIndex: action.payload }
      }

    default:
      return state
  }
}
