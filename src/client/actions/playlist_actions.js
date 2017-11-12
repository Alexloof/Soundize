import { fetchPlaylists, fetchFeaturedPlaylists } from './spotifyApi_actions'

// actions
export const SET_PLAYLISTS = 'set_playlists'
export const SET_PRIVATE_PLAYLISTS = 'set_private_playlists'
export const SET_FEATURED_PLAYLISTS = 'set_featured_playlists'

export const getPlaylists = userId => async dispatch => {
  let playlists = await fetchPlaylists(userId, dispatch)

  if (playlists) {
    dispatch({ type: SET_PLAYLISTS, payload: playlists })
  }
}

export const getPrivatePlaylists = (playlists, userId) => async dispatch => {
  let privatePlaylists = []
  playlists.map(playlist => {
    if (playlist.collaborative === true || playlist.owner.id === userId) {
      privatePlaylists.push(playlist)
    }
  })
  dispatch({ type: SET_PRIVATE_PLAYLISTS, payload: privatePlaylists })
}

export const getFeaturedPlaylists = () => async dispatch => {
  let timestamp = new Date().toISOString()
  let featuredPlaylists = await fetchFeaturedPlaylists(timestamp, dispatch)

  if (featuredPlaylists) {
    dispatch({ type: SET_FEATURED_PLAYLISTS, payload: featuredPlaylists })
  }
}
