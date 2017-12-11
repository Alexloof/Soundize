import axios from 'axios'

import { showSuccessAlert, showErrorAlert } from './alert_actions'

const BASE_URL = 'https://api.spotify.com/v1'

// AUTH
export const setAccessToken = async (token, dispatch) => {
  localStorage.setItem('token', token)
  const a_token = localStorage.getItem('token')
}

// USER
export const fetchUser = async dispatch => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  return await axios
    .get(BASE_URL + '/me', {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        return data.data
      },
      err => {
        console.log('Something went wrong getting user details!', err)
      }
    )
}

export const fetchTopTracks = async dispatch => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  await axios
    .get(BASE_URL + '/me/top/tracks', {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        console.log(data.data)
      },
      function(err) {
        console.log('Something went wrong getting categories!', err)
      }
    )
}

export const fetchTopArtists = async dispatch => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  await axios
    .get(BASE_URL + '/me/top/artists', {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        console.log(data.data)
      },
      function(err) {
        console.log('Something went wrong getting categories!', err)
      }
    )
}

// PLAYLISTS
export const fetchPlaylists = async (userId, dispatch) => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  return await axios
    .get(BASE_URL + `/users/${userId}/playlists`, {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        return data.data.items
      },
      err => {
        console.log('Something went wrong getting playlists!', err)
      }
    )
}

export const fetchFeaturedPlaylists = async (timestamp, dispatch) => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  return await axios
    .get(
      BASE_URL + `/browse/featured-playlists?country=SE&locale=sv_SE&limit=5`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: authString
        }
      }
    )
    .then(
      data => {
        return data.data.playlists.items
      },
      err => {
        console.log('Something went wrong getting featured playlists!', err)
      }
    )
}

export const fetchNewReleases = async dispatch => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  return await axios
    .get(BASE_URL + `/browse/new-releases?country=SE`, {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        return data.data.albums.items
      },
      err => {
        console.log('Something went wrong getting new releases!', err)
      }
    )
}

export const createUserPlaylist = async (userId, name, desc, dispatch) => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  await axios
    .post(
      BASE_URL + `/users/${userId}/playlists`,
      {
        name: name,
        description: desc
      },
      {
        headers: {
          Accept: 'application/json',
          Authorization: authString
        }
      }
    )
    .then(
      data => {
        console.log('Playlist created', data)
        dispatch(showSuccessAlert(name + ' har skapats!'))
      },
      err => {
        console.log('Something went wrong!', err)
        dispatch(showErrorAlert(name + ' kunde inte skapas...'))
      }
    )
}

export const unfollowPlaylistCall = async (ownerId, playlistId, dispatch) => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  await axios
    .delete(BASE_URL + `/users/${ownerId}/playlists/${playlistId}/followers`, {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        console.log('Unfollowed a playlist', data)
        dispatch(showSuccessAlert('Du slutade följa en spellista!'))
      },
      err => {
        console.log('Something went wrong!', err)
        dispatch(
          showErrorAlert('Det gick inte att sluta följa denna spellista')
        )
      }
    )
}

export const followPlaylistCall = async (ownerId, playlistId, dispatch) => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  await axios
    .put(BASE_URL + `/users/${ownerId}/playlists/${playlistId}/followers`, {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        console.log('Followed a playlist', data)
        dispatch(showSuccessAlert('Du började följa en spellista!'))
      },
      err => {
        console.log('Something went wrong!', err)
        dispatch(showErrorAlert('Det gick inte att följa denna spellista'))
      }
    )
}

export const deleteUserPlaylist = async (userId, playlistId, dispatch) => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  await axios
    .delete(BASE_URL + `/users/${userId}/playlists/${playlistId}/followers`, {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        console.log('deleted a playlist', data)
        dispatch(showSuccessAlert('Spellistan är nu borttagen'))
      },
      err => {
        console.log('Something went wrong!', err)
        dispatch(showErrorAlert('Det gick inte att deleta spellistan'))
      }
    )
}

// TRACK
export const fetchTrack = async id => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  return await axios
    .get(BASE_URL + '/tracks/' + id, {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        return data.data
      },
      function(err) {
        console.log('Something went wrong getting categories!', err)
      }
    )
}
export const fetchTrackDetails = async id => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  return await axios
    .get(BASE_URL + '/audio-features/' + id, {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        return data.data
      },
      function(err) {
        console.log('Something went wrong getting categories!', err)
      }
    )
}

export const getTracklistOfPlaylist = async (userId, playlistId, dispatch) => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  return await axios
    .get(BASE_URL + `/users/${userId}/playlists/${playlistId}`, {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        return data.data
      },
      err => {
        console.log(
          'Something went wrong getting tracklist for a specific playlist!',
          err
        )
      }
    )
}

export const addTrackToPlaylistCall = async (
  ownerId,
  playlistId,
  spotifyURI,
  dispatch
) => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  await axios
    .post(
      BASE_URL + `/users/${ownerId}/playlists/${playlistId}/tracks`,
      {
        uris: [spotifyURI]
      },
      {
        headers: {
          Accept: 'application/json',
          Authorization: authString
        }
      }
    )
    .then(
      data => {
        console.log('Added tracks to playlist!', data)
        dispatch(showSuccessAlert('Låten lades till i spellista'))
      },
      err => {
        console.log('Something went wrong!', err)
        dispatch(showErrorAlert('Det gick inte att lägga till låten'))
      }
    )
}

export const removeTrackFromPlaylistCall = async (
  ownerId,
  playlistId,
  spotifyURI,
  dispatch
) => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token
  await axios
    .delete(BASE_URL + `/users/${ownerId}/playlists/${playlistId}/tracks`, {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      },
      data: {
        tracks: [{ uri: spotifyURI }]
      }
    })
    .then(
      data => {
        console.log('Track removed from playlist!', data)
        dispatch(showSuccessAlert('Låten tog borts från spellistan'))
      },
      err => {
        console.log('Something went wrong!', err)
        dispatch(
          showErrorAlert('Det gick inte att ta bort låten från spellistan')
        )
      }
    )
}

// CATEGORIES
export const getCategoriesCall = async dispatch => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  return await axios
    .get(BASE_URL + '/browse/categories', {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        return data.data.categories.items
      },
      function(err) {
        console.log('Something went wrong getting categories!', err)
      }
    )
}

export const getActiveCategoryPlaylistsCall = async (category, dispatch) => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  return await axios
    .get(BASE_URL + `/browse/categories/${category}/playlists?country=SE`, {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        return data.data.playlists.items
      },
      err => {
        console.log(
          'Something went wrong getting playlists for a category!',
          err
        )
      }
    )
}

// SEARCH
export const getSearchedTracksCall = async (word, dispatch) => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  return await axios
    .get(BASE_URL + `/search?q=${word}&type=track`, {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        return data.data.tracks.items
      },
      err => {
        console.log('Something went wrong when searching for', word, err)
      }
    )
}

export const getSearchedArtistsCall = async (word, dispatch) => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  return await axios
    .get(BASE_URL + `/search?q=${word}&type=artist`, {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        return data.data.artists.items
      },
      err => {
        console.log('Something went wrong when searching for', word, err)
      }
    )
}

export const getSearchedPlaylistsCall = async (word, dispatch) => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  return await axios
    .get(BASE_URL + `/search?q=${word}&type=playlist`, {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        return data.data.playlists.items
      },
      err => {
        console.log('Something went wrong when searching for', word, err)
      }
    )
}

//ALBUM
export const fetchAlbum = async id => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  return await axios
    .get(`${BASE_URL}/albums/${id}`, {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        return data.data
      },
      function(err) {
        console.log('Something went wrong getting album!', err)
      }
    )
}

//ARTIST
export const fetchArtist = async id => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  return await axios
    .get(`${BASE_URL}/artists/${id}`, {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        return data.data
      },
      function(err) {
        console.log('Something went wrong getting album!', err)
      }
    )
}

export const fetchArtistAlbums = async id => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  return await axios
    .get(`${BASE_URL}/artists/${id}/albums`, {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        return data.data.items
      },
      function(err) {
        console.log('Something went wrong getting album!', err)
      }
    )
}

export const fetchArtistTopTracks = async id => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  return await axios
    .get(`${BASE_URL}/artists/${id}/top-tracks?country=SE`, {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        return data.data.tracks
      },
      function(err) {
        console.log('Something went wrong getting album!', err)
      }
    )
}

export const fetchRelatedArtists = async id => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  return await axios
    .get(`${BASE_URL}/artists/${id}/related-artists`, {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    })
    .then(
      data => {
        return data.data.artists
      },
      function(err) {
        console.log('Something went wrong getting album!', err)
      }
    )
}
