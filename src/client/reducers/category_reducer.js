import {
  SET_CATEGORIES,
  SET_ACTIVE_CATEGORY_PLAYLISTS
} from '../actions/category_actions'

let INITIAL_STATE = {
  categories: [],
  activeCategoryPlaylists: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload }

    case SET_ACTIVE_CATEGORY_PLAYLISTS:
      return { ...state, activeCategoryPlaylists: action.payload }

    default:
      return state
  }
}
