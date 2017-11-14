import {
  getCategoriesCall,
  getActiveCategoryPlaylistsCall
} from './spotifyApi_actions'

// Actions
export const SET_CATEGORIES = 'set_categories'
export const SET_ACTIVE_CATEGORY_PLAYLISTS = 'set_active_category_playlists'

export const getCategories = () => async dispatch => {
  let categories = await getCategoriesCall()

  if (categories) {
    dispatch({ type: SET_CATEGORIES, payload: categories })
  }
}

export const getActiveCategoryPlaylists = category => async dispatch => {
  let playlists = await getActiveCategoryPlaylistsCall(category)

  if (playlists) {
    dispatch({ type: SET_ACTIVE_CATEGORY_PLAYLISTS, payload: playlists })
  }
}
