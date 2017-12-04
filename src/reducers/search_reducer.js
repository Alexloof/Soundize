import {
  SET_SEARCHED_ARTISTS,
  SET_SEARCHED_TRACKS,
  SET_SEARCHED_PLAYLISTS
} from '../actions/search_actions'

let INITIAL_STATE = {
  searchedArtists: [],
  searchedPlaylists: [],
  searchedTracks: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SEARCHED_ARTISTS:
      return { ...state, searchedArtists: action.payload }

    case SET_SEARCHED_TRACKS:
      return { ...state, searchedTracks: action.payload }

    case SET_SEARCHED_PLAYLISTS:
      return { ...state, searchedPlaylists: action.payload }

    default:
      return state
  }
}
