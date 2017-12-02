import {
  fetchArtist,
  fetchArtistAlbums,
  fetchArtistTopTracks,
  fetchRelatedArtists
} from './spotifyApi_actions'

export const SET_ARTIST = 'set_artist'
export const SET_ARTIST_ALBUMS = 'set_artist_albums'
export const SET_ARTIST_TOP_TRACKS = 'set_artist_top_tracks'
export const SET_ARTIST_RELATED_ARTISTS = 'set_artist_related_artists'

export const getArtistDetail = id => async dispatch => {
  let artist = await fetchArtist(id)
  let artistAlbums = await fetchArtistAlbums(id)
  let artistTopTracks = await fetchArtistTopTracks(id)
  let relatedArtists = await fetchRelatedArtists(id)

  if (artist) {
    dispatch({ type: SET_ARTIST, payload: artist })
  }
  if (artistAlbums) {
    dispatch({ type: SET_ARTIST_ALBUMS, payload: artistAlbums })
  }
  if (artistTopTracks) {
    dispatch({ type: SET_ARTIST_TOP_TRACKS, payload: artistTopTracks })
  }
  if (relatedArtists) {
    dispatch({ type: SET_ARTIST_RELATED_ARTISTS, payload: relatedArtists })
  }
}
