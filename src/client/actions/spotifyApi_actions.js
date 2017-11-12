const SpotifyWebApi = require('spotify-web-api-node')
const spotifyApi = new SpotifyWebApi()

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

// PLAYLISTS
export const fetchPlaylists = async (userId, dispatch) => {
  return spotifyApi.getUserPlaylists(userId).then(data => {
    return data.body.items
  },
  function(err) {
    console.log('Something went wrong getting playlists!', err)
  })
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

export const createUserPlaylist = async (userId, name, desc, dispatch) => {
  spotifyApi.createPlaylist(userId, name, { public: true }).then(data => {
    console.log('Playlist created', data)
  },
  function(err) {
    console.log('Something went wrong!', err)
  })
}

export const unfollowPlaylistCall = async (ownerId, playlistId, dispatch) => {
  spotifyApi.unfollowPlaylist(ownerId, playlistId).then(data => {
    console.log('Unfollowed a playlist', data)
  },
  function(err) {
    console.log('Something went wrong!', err)
  })
}

export const followPlaylistCall = async (ownerId, playlistId, dispatch) => {
  spotifyApi.followPlaylist(userId, playlistId).then(data => {
    console.log('Followed a playlist', data)
  },
  function(err) {
    console.log('Something went wrong!', err)
  })
}

export const deleteUserPlaylist = async (userId, playlistId, dispatch) => {
  spotifyApi.unfollowPlaylist(userId, playlistId).then(data => {
    console.log('deleted a playlist', data)
  },
  function(err) {
    console.log('Something went wrong!', err)
  })
}
