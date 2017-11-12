import {
  SET_PLAYLISTS,
  SET_PRIVATE_PLAYLISTS,
  SET_FEATURED_PLAYLISTS
} from '../actions/playlist_actions'

const INITIAL_STATE = {
  playlists: [],
  privatePlaylists: [],
  featuredPlaylists: [],
  activePlaylist: '',
  playingPlaylist: ''
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_PLAYLISTS:
      return { ...state, playlists: action.payload }
    case SET_PRIVATE_PLAYLISTS:
      return { ...state, privatePlaylists: action.payload }
    case SET_FEATURED_PLAYLISTS:
      return { ...state, featuredPlaylists: action.payload }
    default:
      return state
  }
}
