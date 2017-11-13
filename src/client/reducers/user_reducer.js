import { SET_USER } from '../actions/user_actions'

let INITIAL_STATE = {
  user: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }

    default:
      return state
  }
}
