const SpotifyWebApi = require('spotify-web-api-node')
const spotifyApi = new SpotifyWebApi()

export const setAccessToken = async dispatch => {
  const token = localStorage.getItem('token')

  if (token) {
    spotifyApi.setAccessToken(token)
  } else {
    console.log('Missing token - Could not set access token to spotifyApi')
  }
}

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
