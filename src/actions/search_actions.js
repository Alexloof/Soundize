import {
  getSearchedArtistsCall,
  getSearchedTracksCall,
  getSearchedPlaylistsCall
} from './spotifyApi_actions'

// Actions
export const SET_SEARCHED_ARTISTS = 'set_searched_artists'
export const SET_SEARCHED_TRACKS = 'set_searched_tracks'
export const SET_SEARCHED_PLAYLISTS = 'set_searched_playlists'

export const getSearchedArtists = word => async dispatch => {
  let artists = await getSearchedArtistsCall(word)

  if (artists) {
    dispatch({ type: SET_SEARCHED_ARTISTS, payload: artists })
  }
}

export const getSearchedTracks = word => async dispatch => {
  let tracks = await getSearchedTracksCall(word)

  if (tracks) {
    dispatch({ type: SET_SEARCHED_TRACKS, payload: tracks })
  }
}

export const getSearchedPlaylists = word => async dispatch => {
  let playlists = await getSearchedPlaylistsCall(word)

  if (playlists) {
    dispatch({ type: SET_SEARCHED_PLAYLISTS, payload: playlists })
  }
}
