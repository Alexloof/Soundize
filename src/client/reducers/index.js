import { combineReducers } from 'redux'

import playlist from './playlist_reducer'
import track from './track_reducer'
import user from './user_reducer'
import player from './player_reducer'

export default combineReducers({
  playlist,
  track,
  user,
  player
})
