import {
  SET_SEARCHED_ARTISTS,
  SET_SEARCHED_TRACKS,
  SET_SEARCHED_PLAYLISTS,
  SET_SEARCH_STATUS
} from '../actions/search_actions'

let INITIAL_STATE = {
  searchedArtists: [],
  searchedPlaylists: [],
  searchedTracks: [],
  searchStatus: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SEARCHED_ARTISTS:
      return { ...state, searchedArtists: action.payload }

    case SET_SEARCHED_TRACKS:
      return { ...state, searchedTracks: action.payload }

    case SET_SEARCHED_PLAYLISTS:
      return { ...state, searchedPlaylists: action.payload }

    case SET_SEARCH_STATUS:
      return { ...state, searchStatus: action.payload }
    default:
      return state
  }
}
