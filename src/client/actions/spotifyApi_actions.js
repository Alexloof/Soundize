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
  await spotifyApi.createPlaylist(userId, name, { public: true }).then(data => {
    console.log('Playlist created', data)
  },
  function(err) {
    console.log('Something went wrong!', err)
  })
}

export const unfollowPlaylistCall = async (ownerId, playlistId, dispatch) => {
  await spotifyApi.unfollowPlaylist(ownerId, playlistId).then(data => {
    console.log('Unfollowed a playlist', data)
  },
  function(err) {
    console.log('Something went wrong!', err)
  })
}

export const followPlaylistCall = async (ownerId, playlistId, dispatch) => {
  await spotifyApi.followPlaylist(ownerId, playlistId).then(data => {
    console.log('Followed a playlist', data)
  },
  function(err) {
    console.log('Something went wrong!', err)
  })
}

export const deleteUserPlaylist = async (userId, playlistId, dispatch) => {
  await spotifyApi.unfollowPlaylist(userId, playlistId).then(data => {
    console.log('deleted a playlist', data)
  },
  function(err) {
    console.log('Something went wrong!', err)
  })
}

// TRACK
export const getTracklistOfPlaylist = async (userId, playlistId, dispatch) => {
  return spotifyApi.getPlaylist(userId, playlistId).then(data => {
    return data.body
  },
  function(err) {
    console.log(
      'Something went wrong getting tracklist for a specific playlist!',
      err
    )
  })
}

export const addTrackToPlaylistCall = async (
  ownerId,
  playlistId,
  spotifyURI,
  dispatch
) => {
  await spotifyApi
    .addTracksToPlaylist(ownerId, playlistId, [spotifyURI])
    .then(
      data => {
        console.log('Added tracks to playlist!', data)
      },
      function(err) {
        console.log('Something went wrong!', err)
      }
    )
}

export const removeTrackFromPlaylistCall = async (
  ownerId,
  playlistId,
  tracks,
  dispatch
) => {
  await spotifyApi
    .removeTracksFromPlaylist(ownerId, playlistId, tracks)
    .then(
      data => {
        console.log('Track removed from playlist!', data)
      },
      function(err) {
        console.log('Something went wrong!', err)
      }
    )
}

// CATEGORIES
export const getCategoriesCall = async dispatch => {
  return spotifyApi
    .getCategories({
      offset: 0,
      country: 'SE',
      locale: 'sv_SE'
    })
    .then(
      data => {
        return data.body.categories.items
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
  return spotifyApi.searchTracks(word).then(data => {
    return data.body.tracks.items
  },
  function(err) {
    console.log('Something went wrong when searching for', word, err)
  })
}

export const getSearchedArtistsCall = async (word, dispatch) => {
  return spotifyApi.searchArtists(word).then(data => {
    return data.body.artists.items
  },
  function(err) {
    console.log('Something went wrong when searching for', word, err)
  })
}

export const getSearchedPlaylistsCall = async (word, dispatch) => {
  return spotifyApi.searchPlaylists(word).then(data => {
    return data.body.playlists.items
  },
  function(err) {
    console.log('Something went wrong when searching for', word, err)
  })
}
