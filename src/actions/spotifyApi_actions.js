const SpotifyWebApi = require('spotify-web-api-node')
const spotifyApi = new SpotifyWebApi()
import axios from 'axios'

import { showSuccessAlert, showErrorAlert } from './alert_actions'

const BASE_URL = 'https://api.spotify.com/v1'

// AUTH
export const setAccessToken = async dispatch => {
  const token = localStorage.getItem('token')

  if (token) {
    spotifyApi.setAccessToken(token)
  } else {
    console.log('Missing token - Could not set access token to spotifyApi')
  }
}

// USER
export const fetchUser = async dispatch => {
  return spotifyApi.getMe().then(
    data => {
      return data.body
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
  return spotifyApi.getUserPlaylists(userId).then(
    data => {
      return data.body.items
    },
    function(err) {
      console.log('Something went wrong getting playlists!', err)
    }
  )
}

export const fetchFeaturedPlaylists = async (timestamp, dispatch) => {
  return spotifyApi
    .getFeaturedPlaylists({
      limit: 5,
      offset: 0,
      country: 'SE',
      locale: 'sv_SE',
      timestamp: timestamp
    })
    .then(
      data => {
        return data.body.playlists.items
      },
      function(err) {
        console.log('Something went wrong getting featured playlists!', err)
      }
    )
}

export const fetchNewReleases = async dispatch => {
  return spotifyApi.getNewReleases({ country: 'SE' }).then(
    data => {
      return data.body.albums.items
    },
    function(err) {
      console.log('Something went wrong getting new releases!', err)
    }
  )
}

export const createUserPlaylist = async (userId, name, desc, dispatch) => {
  await spotifyApi.createPlaylist(userId, name, { public: true }).then(
    data => {
      console.log('Playlist created', data)
      dispatch(showSuccessAlert(name + ' har skapats!'))
    },
    function(err) {
      console.log('Something went wrong!', err)
      dispatch(showErrorAlert(name + ' kunde inte skapas...'))
    }
  )
}

export const unfollowPlaylistCall = async (ownerId, playlistId, dispatch) => {
  await spotifyApi.unfollowPlaylist(ownerId, playlistId).then(
    data => {
      console.log('Unfollowed a playlist', data)
      dispatch(showSuccessAlert('Du slutade följa en spellista!'))
    },
    function(err) {
      console.log('Something went wrong!', err)
      dispatch(showErrorAlert('Det gick inte att sluta följa denna spellista'))
    }
  )
}

export const followPlaylistCall = async (ownerId, playlistId, dispatch) => {
  await spotifyApi.followPlaylist(ownerId, playlistId).then(
    data => {
      console.log('Followed a playlist', data)
      dispatch(showSuccessAlert('Du började följa en spellista!'))
    },
    function(err) {
      console.log('Something went wrong!', err)
      dispatch(showErrorAlert('Det gick inte att följa denna spellista'))
    }
  )
}

export const deleteUserPlaylist = async (userId, playlistId, dispatch) => {
  await spotifyApi.unfollowPlaylist(userId, playlistId).then(
    data => {
      console.log('deleted a playlist', data)
      dispatch(showSuccessAlert('Spellistan är nu borttagen'))
    },
    function(err) {
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
  return spotifyApi.getPlaylist(userId, playlistId).then(
    data => {
      return data.body
    },
    function(err) {
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
  await spotifyApi.addTracksToPlaylist(ownerId, playlistId, [spotifyURI]).then(
    data => {
      console.log('Added tracks to playlist!', data)
      dispatch(showSuccessAlert('Låten lades till i spellista'))
    },
    function(err) {
      console.log('Something went wrong!', err)
      dispatch(showErrorAlert('Det gick inte att lägga till låten'))
    }
  )
}

export const removeTrackFromPlaylistCall = async (
  ownerId,
  playlistId,
  tracks,
  dispatch
) => {
  await spotifyApi.removeTracksFromPlaylist(ownerId, playlistId, tracks).then(
    data => {
      console.log('Track removed from playlist!', data)
      dispatch(showSuccessAlert('Låten tog borts från spellistan'))
    },
    function(err) {
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
  return spotifyApi
    .getPlaylistsForCategory(category, {
      country: 'SE',
      locale: 'sv_SE'
    })
    .then(
      data => {
        return data.body.playlists.items
      },
      function(err) {
        console.log(
          'Something went wrong getting playlists for a category!',
          err
        )
      }
    )
}

// SEARCH
export const getSearchedTracksCall = async (word, dispatch) => {
  return spotifyApi.searchTracks(word).then(
    data => {
      return data.body.tracks.items
    },
    function(err) {
      console.log('Something went wrong when searching for', word, err)
    }
  )
}

export const getSearchedArtistsCall = async (word, dispatch) => {
  return spotifyApi.searchArtists(word).then(
    data => {
      return data.body.artists.items
    },
    function(err) {
      console.log('Something went wrong when searching for', word, err)
    }
  )
}

export const getSearchedPlaylistsCall = async (word, dispatch) => {
  return spotifyApi.searchPlaylists(word).then(
    data => {
      return data.body.playlists.items
    },
    function(err) {
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
