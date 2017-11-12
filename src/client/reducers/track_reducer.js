const INITIAL_STATE = {
  tracklist: {},
  activeTracklist: {},
  loadingTracklist: false,
  activeTrack: {},
  activeTrackIndex: '',
  latestPlayedTacks: [],
  queuedTracks: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state
  }
}
