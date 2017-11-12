import { fetchUser, setAccessToken } from './spotifyApi_actions'

export const SET_USER = 'set_user'

export const setupAuthToAPI = () => async dispatch => {
  setAccessToken(dispatch)
}

export const getCurrentUser = () => async dispatch => {
  let user = await fetchUser(dispatch)

  if (user) {
    dispatch({ type: SET_USER, payload: user })
  }
}
