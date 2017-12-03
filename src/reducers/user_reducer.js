import { SET_USER, FAIL_USER } from '../actions/user_actions'

let INITIAL_STATE = {
  user: 'loading'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload || false }

    case FAIL_USER:
      return { ...state, user: null }
    default:
      return state
  }
}
