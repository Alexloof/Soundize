import {
  SET_ARTIST,
  SET_ARTIST_ALBUMS,
  SET_ARTIST_TOP_TRACKS,
  SET_ARTIST_RELATED_ARTISTS
} from '../actions/artist_actions'

let INITIAL_STATE = {
  artist: {},
  albums: [],
  topTracks: [],
  relatedArtists: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ARTIST:
      return { ...state, artist: action.payload }

    case SET_ARTIST_ALBUMS:
      return { ...state, albums: action.payload }

    case SET_ARTIST_TOP_TRACKS:
      return { ...state, topTracks: action.payload }

    case SET_ARTIST_RELATED_ARTISTS:
      return { ...state, relatedArtists: action.payload }

    default:
      return state
  }
}
