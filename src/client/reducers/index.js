import { combineReducers } from 'redux'

import playlist from './playlist_reducer'
import track from './track_reducer'
import user from './user_reducer'
import player from './player_reducer'
import categories from './category_reducer'
import search from './search_reducer'
import album from './album_reducer'
import artist from './artist_reducer'

export default combineReducers({
  playlist,
  track,
  user,
  player,
  categories,
  search,
  album,
  artist
})
