import { fetchAlbum } from './spotifyApi_actions'

export const SET_ALBUM = 'set_album'

export const getAlbum = id => async dispatch => {
  let album = await fetchAlbum(id)

  if (album) {
    dispatch({ type: SET_ALBUM, payload: album })
  }
}
