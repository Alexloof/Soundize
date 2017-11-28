import { SET_ALBUM } from '../actions/album_actions'

let INITIAL_STATE = {
  album: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ALBUM:
      return { ...state, album: action.payload }

    default:
      return state
  }
}
