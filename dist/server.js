/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setActiveTrackindex = exports.setActiveTrack = exports.removeTrackFromPlaylist = exports.addTrackToPlaylist = exports.addTrackToLatestPlayed = exports.removeTrackFromQueuedTracks = exports.addTrackToQueuedList = exports.setPlayingTracklist = exports.getTrackDetail = exports.setActiveTracklistSolo = exports.setActiveTracklist = exports.SET_TRACK_DETAIL = exports.SET_ACTIVE_TRACKINDEX = exports.SET_ACTIVE_TRACK = exports.ADD_TRACK_TO_LATEST_PLAYED = exports.REMOVE_TRACK_FROM_QUEUED_LIST = exports.ADD_TRACK_TO_QUEUED_LIST = exports.SET_PLAYING_TRACKLIST = exports.SET_ACTIVE_TRACKLIST = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _spotifyApi_actions = __webpack_require__(6);

var _alert_actions = __webpack_require__(13);

var _player_actions = __webpack_require__(4);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// actions
var SET_ACTIVE_TRACKLIST = exports.SET_ACTIVE_TRACKLIST = 'set_active_tracklist';
var SET_PLAYING_TRACKLIST = exports.SET_PLAYING_TRACKLIST = 'set_playing_tracklist';
var ADD_TRACK_TO_QUEUED_LIST = exports.ADD_TRACK_TO_QUEUED_LIST = 'add_track_to_queued_list';
var REMOVE_TRACK_FROM_QUEUED_LIST = exports.REMOVE_TRACK_FROM_QUEUED_LIST = 'remove_track_from_queued_list';
var ADD_TRACK_TO_LATEST_PLAYED = exports.ADD_TRACK_TO_LATEST_PLAYED = 'add_track_to_latest_played';
var SET_ACTIVE_TRACK = exports.SET_ACTIVE_TRACK = 'set_active_track';
var SET_ACTIVE_TRACKINDEX = exports.SET_ACTIVE_TRACKINDEX = 'set_active_trackindex';
var SET_TRACK_DETAIL = exports.SET_TRACK_DETAIL = 'set_track_detail';

var setActiveTracklist = exports.setActiveTracklist = function setActiveTracklist(ownerId, playlistId) {
  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dispatch) {
      var tracklist;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _spotifyApi_actions.getTracklistOfPlaylist)(ownerId, playlistId, dispatch);

            case 2:
              tracklist = _context.sent;


              if (tracklist) {
                dispatch(setActiveTracklistSolo(tracklist));
              }

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var setActiveTracklistSolo = exports.setActiveTracklistSolo = function setActiveTracklistSolo(tracklist) {
  return function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(dispatch) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({ type: SET_ACTIVE_TRACKLIST, payload: tracklist });

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var getTrackDetail = exports.getTrackDetail = function getTrackDetail(id) {
  return function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(dispatch) {
      var track, trackdetails, fullTrack;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _spotifyApi_actions.fetchTrack)(id);

            case 2:
              track = _context3.sent;
              _context3.next = 5;
              return (0, _spotifyApi_actions.fetchTrackDetails)(id);

            case 5:
              trackdetails = _context3.sent;
              fullTrack = _extends({}, trackdetails, track);


              if (trackdetails && track) {
                dispatch({ type: SET_TRACK_DETAIL, payload: fullTrack });
              }

            case 8:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var setPlayingTracklist = exports.setPlayingTracklist = function setPlayingTracklist(tracklist) {
  return function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(dispatch) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch({ type: SET_PLAYING_TRACKLIST, payload: tracklist });

            case 1:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var addTrackToQueuedList = exports.addTrackToQueuedList = function addTrackToQueuedList(track) {
  return function () {
    var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(dispatch) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              dispatch({ type: ADD_TRACK_TO_QUEUED_LIST, payload: track });
              dispatch((0, _alert_actions.showSuccessAlert)('Track was queued'));

            case 2:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
};

var removeTrackFromQueuedTracks = exports.removeTrackFromQueuedTracks = function removeTrackFromQueuedTracks(indexToRemove) {
  return function () {
    var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(dispatch) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              dispatch({ type: REMOVE_TRACK_FROM_QUEUED_LIST, payload: indexToRemove });

            case 1:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined);
    }));

    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }();
};

var addTrackToLatestPlayed = exports.addTrackToLatestPlayed = function addTrackToLatestPlayed(track) {
  return function () {
    var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(dispatch) {
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              dispatch({ type: ADD_TRACK_TO_LATEST_PLAYED, payload: track });

            case 1:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, undefined);
    }));

    return function (_x7) {
      return _ref7.apply(this, arguments);
    };
  }();
};

var addTrackToPlaylist = exports.addTrackToPlaylist = function addTrackToPlaylist(ownerId, playlistId, spotifyURI) {
  return function () {
    var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(dispatch) {
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return (0, _spotifyApi_actions.addTrackToPlaylistCall)(ownerId, playlistId, spotifyURI, dispatch);

            case 2:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, undefined);
    }));

    return function (_x8) {
      return _ref8.apply(this, arguments);
    };
  }();
};

var removeTrackFromPlaylist = exports.removeTrackFromPlaylist = function removeTrackFromPlaylist(ownerId, playlistId, spotifyURI) {
  return function () {
    var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(dispatch) {
      var tracks;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              tracks = [{ uri: spotifyURI }];
              _context9.next = 3;
              return (0, _spotifyApi_actions.removeTrackFromPlaylistCall)(ownerId, playlistId, tracks, dispatch);

            case 3:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, undefined);
    }));

    return function (_x9) {
      return _ref9.apply(this, arguments);
    };
  }();
};

var setActiveTrack = exports.setActiveTrack = function setActiveTrack(track, trackIndex) {
  return function () {
    var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(dispatch) {
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              dispatch({ type: SET_ACTIVE_TRACK, payload: track });
              dispatch({ type: SET_ACTIVE_TRACKINDEX, payload: trackIndex });
              dispatch({ type: _player_actions.ZERO_PLAYED_TIME });
              dispatch(addTrackToLatestPlayed(track));

            case 4:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, undefined);
    }));

    return function (_x10) {
      return _ref10.apply(this, arguments);
    };
  }();
};

var setActiveTrackindex = exports.setActiveTrackindex = function setActiveTrackindex(trackIndex) {
  return function () {
    var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(dispatch) {
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              dispatch({ type: SET_ACTIVE_TRACKINDEX, payload: trackIndex });

            case 1:
            case 'end':
              return _context11.stop();
          }
        }
      }, _callee11, undefined);
    }));

    return function (_x11) {
      return _ref11.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playPrevTrack = exports.playNextTrack = exports.toggleShuffle = exports.zeroPlayedTime = exports.changeSeek = exports.stopSeek = exports.startSeek = exports.setPlayedTime = exports.showMusicbar = exports.toggleStartPauseTrack = exports.pauseActiveTrack = exports.playActiveTrack = exports.TOGGLE_SHUFFLE = exports.ZERO_PLAYED_TIME = exports.CHANGE_SEEK = exports.STOP_SEEK = exports.START_SEEK = exports.SET_PLAYED_TIME = exports.SHOW_MUSICBAR = exports.TOGGLE_ACTIVE_TRACK = exports.PAUSE_ACTIVE_TRACK = exports.PLAY_ACTIVE_TRACK = undefined;

var _track_actions = __webpack_require__(3);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// actions
var PLAY_ACTIVE_TRACK = exports.PLAY_ACTIVE_TRACK = 'play_active_track';
var PAUSE_ACTIVE_TRACK = exports.PAUSE_ACTIVE_TRACK = 'pause_active_track';
var TOGGLE_ACTIVE_TRACK = exports.TOGGLE_ACTIVE_TRACK = 'toogle_active_track';
var SHOW_MUSICBAR = exports.SHOW_MUSICBAR = 'show_musicbar';
var SET_PLAYED_TIME = exports.SET_PLAYED_TIME = 'set_played_time';
var START_SEEK = exports.START_SEEK = 'start_seek';
var STOP_SEEK = exports.STOP_SEEK = 'stop_seek';
var CHANGE_SEEK = exports.CHANGE_SEEK = 'change_seek';
var ZERO_PLAYED_TIME = exports.ZERO_PLAYED_TIME = 'zero_played_time';
var TOGGLE_SHUFFLE = exports.TOGGLE_SHUFFLE = 'toggle_suffle';

var playActiveTrack = exports.playActiveTrack = function playActiveTrack() {
  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dispatch) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({ type: PLAY_ACTIVE_TRACK });

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var pauseActiveTrack = exports.pauseActiveTrack = function pauseActiveTrack() {
  return function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(dispatch) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({ type: PAUSE_ACTIVE_TRACK });

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var toggleStartPauseTrack = exports.toggleStartPauseTrack = function toggleStartPauseTrack() {
  return function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(dispatch) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch({ type: TOGGLE_ACTIVE_TRACK });

            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var showMusicbar = exports.showMusicbar = function showMusicbar() {
  return function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(dispatch) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch({ type: SHOW_MUSICBAR });

            case 1:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var setPlayedTime = exports.setPlayedTime = function setPlayedTime(playedTime) {
  return function () {
    var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(dispatch) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              dispatch({ type: SET_PLAYED_TIME, payload: playedTime });

            case 1:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
};

var startSeek = exports.startSeek = function startSeek() {
  return function () {
    var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(dispatch) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              dispatch({ type: START_SEEK });

            case 1:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined);
    }));

    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }();
};

var stopSeek = exports.stopSeek = function stopSeek() {
  return function () {
    var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(dispatch) {
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              dispatch({ type: STOP_SEEK });

            case 1:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, undefined);
    }));

    return function (_x7) {
      return _ref7.apply(this, arguments);
    };
  }();
};

var changeSeek = exports.changeSeek = function changeSeek(event) {
  return function () {
    var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(dispatch) {
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              dispatch({ type: CHANGE_SEEK, payload: event });

            case 1:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, undefined);
    }));

    return function (_x8) {
      return _ref8.apply(this, arguments);
    };
  }();
};

var zeroPlayedTime = exports.zeroPlayedTime = function zeroPlayedTime() {
  return function () {
    var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(dispatch) {
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              dispatch({ type: ZERO_PLAYED_TIME });

            case 1:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, undefined);
    }));

    return function (_x9) {
      return _ref9.apply(this, arguments);
    };
  }();
};

var toggleShuffle = exports.toggleShuffle = function toggleShuffle() {
  return function () {
    var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(dispatch) {
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              dispatch({ type: TOGGLE_SHUFFLE });

            case 1:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, undefined);
    }));

    return function (_x10) {
      return _ref10.apply(this, arguments);
    };
  }();
};

var playNextTrack = exports.playNextTrack = function playNextTrack() {
  return function () {
    var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(dispatch, getState) {
      var queuedTracklist, activeTrackIndex, playingTracklist, isShuffling, nextTrack, randomIndex, nextTrackIndex;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              queuedTracklist = getState().track.queuedTracks;
              activeTrackIndex = getState().track.activeTrackIndex;
              playingTracklist = getState().track.playingTracklist;
              isShuffling = getState().player.isShuffling;
              nextTrack = void 0;

              if (!(queuedTracklist.length > 0)) {
                _context11.next = 13;
                break;
              }

              nextTrack = queuedTracklist[0];
              dispatch((0, _track_actions.removeTrackFromQueuedTracks)(0));
              _context11.next = 10;
              return dispatch((0, _track_actions.setActiveTrack)(nextTrack));

            case 10:
              dispatch(playActiveTrack());
              _context11.next = 38;
              break;

            case 13:
              if (!isShuffling) {
                _context11.next = 27;
                break;
              }

              randomIndex = Math.floor(Math.random() * (playingTracklist.tracks.items.length - 1));

              nextTrack = playingTracklist.tracks.items[randomIndex].track;
              nextTrackIndex = void 0;

              playingTracklist.tracks.items.map(function (item, index) {
                if (item.track.id === nextTrack.id) {
                  nextTrackIndex = index;
                }
              });

              if (nextTrack.preview_url) {
                _context11.next = 22;
                break;
              }

              setTimeout(function () {
                dispatch(playNextTrack());
              }, 100);
              _context11.next = 25;
              break;

            case 22:
              _context11.next = 24;
              return dispatch((0, _track_actions.setActiveTrack)(nextTrack, nextTrackIndex));

            case 24:
              dispatch(playActiveTrack());

            case 25:
              _context11.next = 38;
              break;

            case 27:
              if (!(activeTrackIndex !== playingTracklist.tracks.items.length - 1)) {
                _context11.next = 38;
                break;
              }

              nextTrack = playingTracklist.tracks.items[activeTrackIndex + 1].track;

              if (nextTrack.preview_url) {
                _context11.next = 35;
                break;
              }

              _context11.next = 32;
              return dispatch((0, _track_actions.setActiveTrackindex)(activeTrackIndex + 1));

            case 32:
              setTimeout(function () {
                dispatch(playNextTrack());
              }, 100);
              _context11.next = 38;
              break;

            case 35:
              _context11.next = 37;
              return dispatch((0, _track_actions.setActiveTrack)(nextTrack, activeTrackIndex + 1));

            case 37:
              dispatch(playActiveTrack());

            case 38:
            case 'end':
              return _context11.stop();
          }
        }
      }, _callee11, undefined);
    }));

    return function (_x11, _x12) {
      return _ref11.apply(this, arguments);
    };
  }();
};

var playPrevTrack = exports.playPrevTrack = function playPrevTrack() {
  return function () {
    var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(dispatch, getState) {
      var latestPlayedTracks, nextTrackPlay;
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              latestPlayedTracks = getState().track.latestPlayedTracks;
              nextTrackPlay = void 0;

              if (!(latestPlayedTracks.length > 1)) {
                _context12.next = 7;
                break;
              }

              nextTrackPlay = latestPlayedTracks[latestPlayedTracks.length - 2];
              _context12.next = 6;
              return dispatch((0, _track_actions.setActiveTrack)(nextTrackPlay));

            case 6:
              dispatch(playActiveTrack());

            case 7:
            case 'end':
              return _context12.stop();
          }
        }
      }, _callee12, undefined);
    }));

    return function (_x13, _x14) {
      return _ref12.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentUser = exports.setupAuthToAPI = exports.FAIL_USER = exports.SET_USER = undefined;

var _spotifyApi_actions = __webpack_require__(6);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var SET_USER = exports.SET_USER = 'set_user';
var FAIL_USER = exports.FAIL_USER = 'fail_user';

var setupAuthToAPI = exports.setupAuthToAPI = function setupAuthToAPI() {
  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dispatch) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              (0, _spotifyApi_actions.setAccessToken)(dispatch);

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var getCurrentUser = exports.getCurrentUser = function getCurrentUser() {
  return function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(dispatch) {
      var user;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _spotifyApi_actions.fetchUser)(dispatch);

            case 2:
              user = _context2.sent;


              if (user) {
                dispatch({ type: SET_USER, payload: user });
              } else {
                dispatch({ type: FAIL_USER });
              }

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchRelatedArtists = exports.fetchArtistTopTracks = exports.fetchArtistAlbums = exports.fetchArtist = exports.fetchAlbum = exports.getSearchedPlaylistsCall = exports.getSearchedArtistsCall = exports.getSearchedTracksCall = exports.getActiveCategoryPlaylistsCall = exports.getCategoriesCall = exports.removeTrackFromPlaylistCall = exports.addTrackToPlaylistCall = exports.getTracklistOfPlaylist = exports.fetchTrackDetails = exports.fetchTrack = exports.deleteUserPlaylist = exports.followPlaylistCall = exports.unfollowPlaylistCall = exports.createUserPlaylist = exports.fetchNewReleases = exports.fetchFeaturedPlaylists = exports.fetchPlaylists = exports.fetchTopArtists = exports.fetchTopTracks = exports.fetchUser = exports.setAccessToken = undefined;

var _axios = __webpack_require__(64);

var _axios2 = _interopRequireDefault(_axios);

var _alert_actions = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var SpotifyWebApi = __webpack_require__(72);
var spotifyApi = new SpotifyWebApi();


var BASE_URL = 'https://api.spotify.com/v1';

// AUTH
var setAccessToken = exports.setAccessToken = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dispatch) {
    var token;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = localStorage.getItem('token');


            if (token) {
              spotifyApi.setAccessToken(token);
            } else {
              console.log('Missing token - Could not set access token to spotifyApi');
            }

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function setAccessToken(_x) {
    return _ref.apply(this, arguments);
  };
}();

// USER
var fetchUser = exports.fetchUser = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(dispatch) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', spotifyApi.getMe().then(function (data) {
              return data.body;
            }, function (err) {
              console.log('Something went wrong getting user details!', err);
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function fetchUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var fetchTopTracks = exports.fetchTopTracks = function () {
  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(dispatch) {
    var token, authString;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            token = localStorage.getItem('token');
            authString = 'Bearer ' + token;
            _context3.next = 4;
            return _axios2.default.get(BASE_URL + '/me/top/tracks', {
              headers: {
                Accept: 'application/json',
                Authorization: authString
              }
            }).then(function (data) {
              console.log(data.data);
            }, function (err) {
              console.log('Something went wrong getting categories!', err);
            });

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function fetchTopTracks(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var fetchTopArtists = exports.fetchTopArtists = function () {
  var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(dispatch) {
    var token, authString;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            token = localStorage.getItem('token');
            authString = 'Bearer ' + token;
            _context4.next = 4;
            return _axios2.default.get(BASE_URL + '/me/top/artists', {
              headers: {
                Accept: 'application/json',
                Authorization: authString
              }
            }).then(function (data) {
              console.log(data.data);
            }, function (err) {
              console.log('Something went wrong getting categories!', err);
            });

          case 4:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function fetchTopArtists(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

// PLAYLISTS
var fetchPlaylists = exports.fetchPlaylists = function () {
  var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(userId, dispatch) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', spotifyApi.getUserPlaylists(userId).then(function (data) {
              return data.body.items;
            }, function (err) {
              console.log('Something went wrong getting playlists!', err);
            }));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function fetchPlaylists(_x5, _x6) {
    return _ref5.apply(this, arguments);
  };
}();

var fetchFeaturedPlaylists = exports.fetchFeaturedPlaylists = function () {
  var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(timestamp, dispatch) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt('return', spotifyApi.getFeaturedPlaylists({
              limit: 5,
              offset: 0,
              country: 'SE',
              locale: 'sv_SE',
              timestamp: timestamp
            }).then(function (data) {
              return data.body.playlists.items;
            }, function (err) {
              console.log('Something went wrong getting featured playlists!', err);
            }));

          case 1:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined);
  }));

  return function fetchFeaturedPlaylists(_x7, _x8) {
    return _ref6.apply(this, arguments);
  };
}();

var fetchNewReleases = exports.fetchNewReleases = function () {
  var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(dispatch) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt('return', spotifyApi.getNewReleases({ country: 'SE' }).then(function (data) {
              return data.body.albums.items;
            }, function (err) {
              console.log('Something went wrong getting new releases!', err);
            }));

          case 1:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, undefined);
  }));

  return function fetchNewReleases(_x9) {
    return _ref7.apply(this, arguments);
  };
}();

var createUserPlaylist = exports.createUserPlaylist = function () {
  var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(userId, name, desc, dispatch) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return spotifyApi.createPlaylist(userId, name, { public: true }).then(function (data) {
              console.log('Playlist created', data);
              dispatch((0, _alert_actions.showSuccessAlert)(name + ' har skapats!'));
            }, function (err) {
              console.log('Something went wrong!', err);
              dispatch((0, _alert_actions.showErrorAlert)(name + ' kunde inte skapas...'));
            });

          case 2:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, undefined);
  }));

  return function createUserPlaylist(_x10, _x11, _x12, _x13) {
    return _ref8.apply(this, arguments);
  };
}();

var unfollowPlaylistCall = exports.unfollowPlaylistCall = function () {
  var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(ownerId, playlistId, dispatch) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return spotifyApi.unfollowPlaylist(ownerId, playlistId).then(function (data) {
              console.log('Unfollowed a playlist', data);
              dispatch((0, _alert_actions.showSuccessAlert)('Du slutade följa en spellista!'));
            }, function (err) {
              console.log('Something went wrong!', err);
              dispatch((0, _alert_actions.showErrorAlert)('Det gick inte att sluta följa denna spellista'));
            });

          case 2:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, undefined);
  }));

  return function unfollowPlaylistCall(_x14, _x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}();

var followPlaylistCall = exports.followPlaylistCall = function () {
  var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(ownerId, playlistId, dispatch) {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return spotifyApi.followPlaylist(ownerId, playlistId).then(function (data) {
              console.log('Followed a playlist', data);
              dispatch((0, _alert_actions.showSuccessAlert)('Du började följa en spellista!'));
            }, function (err) {
              console.log('Something went wrong!', err);
              dispatch((0, _alert_actions.showErrorAlert)('Det gick inte att följa denna spellista'));
            });

          case 2:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, undefined);
  }));

  return function followPlaylistCall(_x17, _x18, _x19) {
    return _ref10.apply(this, arguments);
  };
}();

var deleteUserPlaylist = exports.deleteUserPlaylist = function () {
  var _ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(userId, playlistId, dispatch) {
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return spotifyApi.unfollowPlaylist(userId, playlistId).then(function (data) {
              console.log('deleted a playlist', data);
              dispatch((0, _alert_actions.showSuccessAlert)('Spellistan är nu borttagen'));
            }, function (err) {
              console.log('Something went wrong!', err);
              dispatch((0, _alert_actions.showErrorAlert)('Det gick inte att deleta spellistan'));
            });

          case 2:
          case 'end':
            return _context11.stop();
        }
      }
    }, _callee11, undefined);
  }));

  return function deleteUserPlaylist(_x20, _x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

// TRACK
var fetchTrack = exports.fetchTrack = function () {
  var _ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(id) {
    var token, authString;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            token = localStorage.getItem('token');
            authString = 'Bearer ' + token;
            _context12.next = 4;
            return _axios2.default.get(BASE_URL + '/tracks/' + id, {
              headers: {
                Accept: 'application/json',
                Authorization: authString
              }
            }).then(function (data) {
              return data.data;
            }, function (err) {
              console.log('Something went wrong getting categories!', err);
            });

          case 4:
            return _context12.abrupt('return', _context12.sent);

          case 5:
          case 'end':
            return _context12.stop();
        }
      }
    }, _callee12, undefined);
  }));

  return function fetchTrack(_x23) {
    return _ref12.apply(this, arguments);
  };
}();
var fetchTrackDetails = exports.fetchTrackDetails = function () {
  var _ref13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(id) {
    var token, authString;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            token = localStorage.getItem('token');
            authString = 'Bearer ' + token;
            _context13.next = 4;
            return _axios2.default.get(BASE_URL + '/audio-features/' + id, {
              headers: {
                Accept: 'application/json',
                Authorization: authString
              }
            }).then(function (data) {
              return data.data;
            }, function (err) {
              console.log('Something went wrong getting categories!', err);
            });

          case 4:
            return _context13.abrupt('return', _context13.sent);

          case 5:
          case 'end':
            return _context13.stop();
        }
      }
    }, _callee13, undefined);
  }));

  return function fetchTrackDetails(_x24) {
    return _ref13.apply(this, arguments);
  };
}();

var getTracklistOfPlaylist = exports.getTracklistOfPlaylist = function () {
  var _ref14 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(userId, playlistId, dispatch) {
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            return _context14.abrupt('return', spotifyApi.getPlaylist(userId, playlistId).then(function (data) {
              return data.body;
            }, function (err) {
              console.log('Something went wrong getting tracklist for a specific playlist!', err);
            }));

          case 1:
          case 'end':
            return _context14.stop();
        }
      }
    }, _callee14, undefined);
  }));

  return function getTracklistOfPlaylist(_x25, _x26, _x27) {
    return _ref14.apply(this, arguments);
  };
}();

var addTrackToPlaylistCall = exports.addTrackToPlaylistCall = function () {
  var _ref15 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(ownerId, playlistId, spotifyURI, dispatch) {
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return spotifyApi.addTracksToPlaylist(ownerId, playlistId, [spotifyURI]).then(function (data) {
              console.log('Added tracks to playlist!', data);
              dispatch((0, _alert_actions.showSuccessAlert)('Låten lades till i spellista'));
            }, function (err) {
              console.log('Something went wrong!', err);
              dispatch((0, _alert_actions.showErrorAlert)('Det gick inte att lägga till låten'));
            });

          case 2:
          case 'end':
            return _context15.stop();
        }
      }
    }, _callee15, undefined);
  }));

  return function addTrackToPlaylistCall(_x28, _x29, _x30, _x31) {
    return _ref15.apply(this, arguments);
  };
}();

var removeTrackFromPlaylistCall = exports.removeTrackFromPlaylistCall = function () {
  var _ref16 = _asyncToGenerator(regeneratorRuntime.mark(function _callee16(ownerId, playlistId, tracks, dispatch) {
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return spotifyApi.removeTracksFromPlaylist(ownerId, playlistId, tracks).then(function (data) {
              console.log('Track removed from playlist!', data);
              dispatch((0, _alert_actions.showSuccessAlert)('Låten tog borts från spellistan'));
            }, function (err) {
              console.log('Something went wrong!', err);
              dispatch((0, _alert_actions.showErrorAlert)('Det gick inte att ta bort låten från spellistan'));
            });

          case 2:
          case 'end':
            return _context16.stop();
        }
      }
    }, _callee16, undefined);
  }));

  return function removeTrackFromPlaylistCall(_x32, _x33, _x34, _x35) {
    return _ref16.apply(this, arguments);
  };
}();

// CATEGORIES
var getCategoriesCall = exports.getCategoriesCall = function () {
  var _ref17 = _asyncToGenerator(regeneratorRuntime.mark(function _callee17(dispatch) {
    var token, authString;
    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            token = localStorage.getItem('token');
            authString = 'Bearer ' + token;
            _context17.next = 4;
            return _axios2.default.get(BASE_URL + '/browse/categories', {
              headers: {
                Accept: 'application/json',
                Authorization: authString
              }
            }).then(function (data) {
              return data.data.categories.items;
            }, function (err) {
              console.log('Something went wrong getting categories!', err);
            });

          case 4:
            return _context17.abrupt('return', _context17.sent);

          case 5:
          case 'end':
            return _context17.stop();
        }
      }
    }, _callee17, undefined);
  }));

  return function getCategoriesCall(_x36) {
    return _ref17.apply(this, arguments);
  };
}();

var getActiveCategoryPlaylistsCall = exports.getActiveCategoryPlaylistsCall = function () {
  var _ref18 = _asyncToGenerator(regeneratorRuntime.mark(function _callee18(category, dispatch) {
    return regeneratorRuntime.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            return _context18.abrupt('return', spotifyApi.getPlaylistsForCategory(category, {
              country: 'SE',
              locale: 'sv_SE'
            }).then(function (data) {
              return data.body.playlists.items;
            }, function (err) {
              console.log('Something went wrong getting playlists for a category!', err);
            }));

          case 1:
          case 'end':
            return _context18.stop();
        }
      }
    }, _callee18, undefined);
  }));

  return function getActiveCategoryPlaylistsCall(_x37, _x38) {
    return _ref18.apply(this, arguments);
  };
}();

// SEARCH
var getSearchedTracksCall = exports.getSearchedTracksCall = function () {
  var _ref19 = _asyncToGenerator(regeneratorRuntime.mark(function _callee19(word, dispatch) {
    return regeneratorRuntime.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            return _context19.abrupt('return', spotifyApi.searchTracks(word).then(function (data) {
              return data.body.tracks.items;
            }, function (err) {
              console.log('Something went wrong when searching for', word, err);
            }));

          case 1:
          case 'end':
            return _context19.stop();
        }
      }
    }, _callee19, undefined);
  }));

  return function getSearchedTracksCall(_x39, _x40) {
    return _ref19.apply(this, arguments);
  };
}();

var getSearchedArtistsCall = exports.getSearchedArtistsCall = function () {
  var _ref20 = _asyncToGenerator(regeneratorRuntime.mark(function _callee20(word, dispatch) {
    return regeneratorRuntime.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            return _context20.abrupt('return', spotifyApi.searchArtists(word).then(function (data) {
              return data.body.artists.items;
            }, function (err) {
              console.log('Something went wrong when searching for', word, err);
            }));

          case 1:
          case 'end':
            return _context20.stop();
        }
      }
    }, _callee20, undefined);
  }));

  return function getSearchedArtistsCall(_x41, _x42) {
    return _ref20.apply(this, arguments);
  };
}();

var getSearchedPlaylistsCall = exports.getSearchedPlaylistsCall = function () {
  var _ref21 = _asyncToGenerator(regeneratorRuntime.mark(function _callee21(word, dispatch) {
    return regeneratorRuntime.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            return _context21.abrupt('return', spotifyApi.searchPlaylists(word).then(function (data) {
              return data.body.playlists.items;
            }, function (err) {
              console.log('Something went wrong when searching for', word, err);
            }));

          case 1:
          case 'end':
            return _context21.stop();
        }
      }
    }, _callee21, undefined);
  }));

  return function getSearchedPlaylistsCall(_x43, _x44) {
    return _ref21.apply(this, arguments);
  };
}();

//ALBUM
var fetchAlbum = exports.fetchAlbum = function () {
  var _ref22 = _asyncToGenerator(regeneratorRuntime.mark(function _callee22(id) {
    var token, authString;
    return regeneratorRuntime.wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            token = localStorage.getItem('token');
            authString = 'Bearer ' + token;
            _context22.next = 4;
            return _axios2.default.get(BASE_URL + '/albums/' + id, {
              headers: {
                Accept: 'application/json',
                Authorization: authString
              }
            }).then(function (data) {
              return data.data;
            }, function (err) {
              console.log('Something went wrong getting album!', err);
            });

          case 4:
            return _context22.abrupt('return', _context22.sent);

          case 5:
          case 'end':
            return _context22.stop();
        }
      }
    }, _callee22, undefined);
  }));

  return function fetchAlbum(_x45) {
    return _ref22.apply(this, arguments);
  };
}();

//ARTIST
var fetchArtist = exports.fetchArtist = function () {
  var _ref23 = _asyncToGenerator(regeneratorRuntime.mark(function _callee23(id) {
    var token, authString;
    return regeneratorRuntime.wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            token = localStorage.getItem('token');
            authString = 'Bearer ' + token;
            _context23.next = 4;
            return _axios2.default.get(BASE_URL + '/artists/' + id, {
              headers: {
                Accept: 'application/json',
                Authorization: authString
              }
            }).then(function (data) {
              return data.data;
            }, function (err) {
              console.log('Something went wrong getting album!', err);
            });

          case 4:
            return _context23.abrupt('return', _context23.sent);

          case 5:
          case 'end':
            return _context23.stop();
        }
      }
    }, _callee23, undefined);
  }));

  return function fetchArtist(_x46) {
    return _ref23.apply(this, arguments);
  };
}();

var fetchArtistAlbums = exports.fetchArtistAlbums = function () {
  var _ref24 = _asyncToGenerator(regeneratorRuntime.mark(function _callee24(id) {
    var token, authString;
    return regeneratorRuntime.wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            token = localStorage.getItem('token');
            authString = 'Bearer ' + token;
            _context24.next = 4;
            return _axios2.default.get(BASE_URL + '/artists/' + id + '/albums', {
              headers: {
                Accept: 'application/json',
                Authorization: authString
              }
            }).then(function (data) {
              return data.data.items;
            }, function (err) {
              console.log('Something went wrong getting album!', err);
            });

          case 4:
            return _context24.abrupt('return', _context24.sent);

          case 5:
          case 'end':
            return _context24.stop();
        }
      }
    }, _callee24, undefined);
  }));

  return function fetchArtistAlbums(_x47) {
    return _ref24.apply(this, arguments);
  };
}();

var fetchArtistTopTracks = exports.fetchArtistTopTracks = function () {
  var _ref25 = _asyncToGenerator(regeneratorRuntime.mark(function _callee25(id) {
    var token, authString;
    return regeneratorRuntime.wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            token = localStorage.getItem('token');
            authString = 'Bearer ' + token;
            _context25.next = 4;
            return _axios2.default.get(BASE_URL + '/artists/' + id + '/top-tracks?country=SE', {
              headers: {
                Accept: 'application/json',
                Authorization: authString
              }
            }).then(function (data) {
              return data.data.tracks;
            }, function (err) {
              console.log('Something went wrong getting album!', err);
            });

          case 4:
            return _context25.abrupt('return', _context25.sent);

          case 5:
          case 'end':
            return _context25.stop();
        }
      }
    }, _callee25, undefined);
  }));

  return function fetchArtistTopTracks(_x48) {
    return _ref25.apply(this, arguments);
  };
}();

var fetchRelatedArtists = exports.fetchRelatedArtists = function () {
  var _ref26 = _asyncToGenerator(regeneratorRuntime.mark(function _callee26(id) {
    var token, authString;
    return regeneratorRuntime.wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            token = localStorage.getItem('token');
            authString = 'Bearer ' + token;
            _context26.next = 4;
            return _axios2.default.get(BASE_URL + '/artists/' + id + '/related-artists', {
              headers: {
                Accept: 'application/json',
                Authorization: authString
              }
            }).then(function (data) {
              return data.data.artists;
            }, function (err) {
              console.log('Something went wrong getting album!', err);
            });

          case 4:
            return _context26.abrupt('return', _context26.sent);

          case 5:
          case 'end':
            return _context26.stop();
        }
      }
    }, _callee26, undefined);
  }));

  return function fetchRelatedArtists(_x49) {
    return _ref26.apply(this, arguments);
  };
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setActivePlaylist = exports.deletePlaylist = exports.followPlaylist = exports.unfollowPlaylist = exports.createPlaylist = exports.getNewReleases = exports.getFeaturedPlaylists = exports.getPrivatePlaylists = exports.getPlaylists = exports.SET_NEW_RELEASES = exports.SET_ACTIVE_PLAYLIST = exports.SET_FEATURED_PLAYLISTS = exports.SET_PRIVATE_PLAYLISTS = exports.SET_PLAYLISTS = undefined;

var _spotifyApi_actions = __webpack_require__(6);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// actions
var SET_PLAYLISTS = exports.SET_PLAYLISTS = 'set_playlists';
var SET_PRIVATE_PLAYLISTS = exports.SET_PRIVATE_PLAYLISTS = 'set_private_playlists';
var SET_FEATURED_PLAYLISTS = exports.SET_FEATURED_PLAYLISTS = 'set_featured_playlists';
var SET_ACTIVE_PLAYLIST = exports.SET_ACTIVE_PLAYLIST = 'set_active_playlist';
var SET_NEW_RELEASES = exports.SET_NEW_RELEASES = 'set_new_releases';

var getPlaylists = exports.getPlaylists = function getPlaylists(userId) {
  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dispatch) {
      var playlists;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _spotifyApi_actions.fetchPlaylists)(userId, dispatch);

            case 2:
              playlists = _context.sent;


              if (playlists) {
                dispatch({ type: SET_PLAYLISTS, payload: playlists });
              }

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var getPrivatePlaylists = exports.getPrivatePlaylists = function getPrivatePlaylists() {
  var playlists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var userId = arguments[1];
  return function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(dispatch) {
      var privatePlaylists;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              privatePlaylists = [];

              playlists.map(function (playlist) {
                if (playlist.collaborative === true || playlist.owner.id === userId) {
                  privatePlaylists.push(playlist);
                }
              });
              dispatch({ type: SET_PRIVATE_PLAYLISTS, payload: privatePlaylists });

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var getFeaturedPlaylists = exports.getFeaturedPlaylists = function getFeaturedPlaylists() {
  return function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(dispatch) {
      var timestamp, featuredPlaylists;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              timestamp = new Date().toISOString();
              _context3.next = 3;
              return (0, _spotifyApi_actions.fetchFeaturedPlaylists)(timestamp, dispatch);

            case 3:
              featuredPlaylists = _context3.sent;


              if (featuredPlaylists) {
                dispatch({ type: SET_FEATURED_PLAYLISTS, payload: featuredPlaylists });
              }

            case 5:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var getNewReleases = exports.getNewReleases = function getNewReleases() {
  return function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(dispatch) {
      var newReleases;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0, _spotifyApi_actions.fetchNewReleases)();

            case 2:
              newReleases = _context4.sent;


              if (newReleases) {
                dispatch({ type: SET_NEW_RELEASES, payload: newReleases });
              }

            case 4:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x5) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var createPlaylist = exports.createPlaylist = function createPlaylist(userId, name, desc) {
  return function () {
    var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(dispatch) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return (0, _spotifyApi_actions.createUserPlaylist)(userId, name, desc, dispatch);

            case 2:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function (_x6) {
      return _ref5.apply(this, arguments);
    };
  }();
};

var unfollowPlaylist = exports.unfollowPlaylist = function unfollowPlaylist(ownerId, playlistId) {
  return function () {
    var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(dispatch) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return (0, _spotifyApi_actions.unfollowPlaylistCall)(ownerId, playlistId, dispatch);

            case 2:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined);
    }));

    return function (_x7) {
      return _ref6.apply(this, arguments);
    };
  }();
};

var followPlaylist = exports.followPlaylist = function followPlaylist(ownerId, playlistId) {
  return function () {
    var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(dispatch) {
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return (0, _spotifyApi_actions.followPlaylistCall)(ownerId, playlistId, dispatch);

            case 2:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, undefined);
    }));

    return function (_x8) {
      return _ref7.apply(this, arguments);
    };
  }();
};

var deletePlaylist = exports.deletePlaylist = function deletePlaylist(userId, playlistId) {
  return function () {
    var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(dispatch) {
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return (0, _spotifyApi_actions.deleteUserPlaylist)(userId, playlistId, dispatch);

            case 2:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, undefined);
    }));

    return function (_x9) {
      return _ref8.apply(this, arguments);
    };
  }();
};

var setActivePlaylist = exports.setActivePlaylist = function setActivePlaylist(playlistId) {
  return function () {
    var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(dispatch) {
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              dispatch({ type: SET_ACTIVE_PLAYLIST, payload: playlistId });

            case 1:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, undefined);
    }));

    return function (_x10) {
      return _ref9.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getActiveCategoryPlaylists = exports.getCategories = exports.SET_ACTIVE_CATEGORY_PLAYLISTS = exports.SET_CATEGORIES = undefined;

var _spotifyApi_actions = __webpack_require__(6);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Actions
var SET_CATEGORIES = exports.SET_CATEGORIES = 'set_categories';
var SET_ACTIVE_CATEGORY_PLAYLISTS = exports.SET_ACTIVE_CATEGORY_PLAYLISTS = 'set_active_category_playlists';

var getCategories = exports.getCategories = function getCategories() {
  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dispatch) {
      var categories;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _spotifyApi_actions.getCategoriesCall)();

            case 2:
              categories = _context.sent;


              if (categories) {
                dispatch({ type: SET_CATEGORIES, payload: categories });
              }

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var getActiveCategoryPlaylists = exports.getActiveCategoryPlaylists = function getActiveCategoryPlaylists(category) {
  return function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(dispatch) {
      var playlists;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _spotifyApi_actions.getActiveCategoryPlaylistsCall)(category);

            case 2:
              playlists = _context2.sent;


              if (playlists) {
                dispatch({ type: SET_ACTIVE_CATEGORY_PLAYLISTS, payload: playlists });
              }

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _TrackMenu = __webpack_require__(18);

var _TrackMenu2 = _interopRequireDefault(_TrackMenu);

var _player_actions = __webpack_require__(4);

var _track_actions = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Track = function (_Component) {
  _inherits(Track, _Component);

  function Track() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Track);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Track.__proto__ || Object.getPrototypeOf(Track)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dropdownClassName: 'dropdown'
    }, _this.navigateToTrackDetailPage = function () {
      _this.props.history.push('/tracks/' + _this.props.track.id);
    }, _this.handleClick = function (event) {
      if (_this.state.dropdownClassName === 'dropdown is-active') {
        if (_this.wrapperRef && !_this.wrapperRef.contains(event.target)) {
          _this.setState({ dropdownClassName: 'dropdown' });
        }
      }
    }, _this.navigateToArtistDetailPage = function (id) {
      _this.props.history.push('/artists/' + id);
    }, _this.addTrackToQueuedList = function (track) {
      _this.props.addTrackToQueuedList(track);
      _this.toggleDropdown();
    }, _this.startTrack = function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(track) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(track.id === _this.props.activeTrack.id)) {
                  _context.next = 4;
                  break;
                }

                _this.props.playActiveTrack();
                _context.next = 8;
                break;

              case 4:
                _this.props.setPlayingTracklist(_this.props.activeTracklist);
                _context.next = 7;
                return _this.props.setActiveTrack(track, _this.props.index);

              case 7:
                _this.props.playActiveTrack();

              case 8:
                _this.props.showMusicbar();

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.setClassName = function () {
      if (_this.props.activeTrack.id === _this.props.track.id) {
        return 'track active-track';
      } else {
        return 'track';
      }
    }, _this.renderStartStopButton = function () {
      if (_this.props.track.preview_url !== null) {
        return _this.props.isPlaying && _this.props.activeTrack.id === _this.props.track.id ? _react2.default.createElement(
          'button',
          {
            style: { transform: 'translateY(' + 3 + 'px)', boxShadow: 'none' },
            onClick: function onClick() {
              return _this.props.pauseActiveTrack();
            },
            className: 'button play-btn'
          },
          _react2.default.createElement(
            'span',
            { className: 'icon' },
            _react2.default.createElement('i', { className: 'fa fa-pause' })
          )
        ) : _react2.default.createElement(
          'button',
          {
            onClick: function onClick() {
              return _this.startTrack(_this.props.track);
            },
            className: 'button play-btn'
          },
          _react2.default.createElement(
            'span',
            { className: 'icon' },
            _react2.default.createElement('i', { className: 'fa fa-play' })
          )
        );
      } else {
        return _react2.default.createElement(
          'button',
          { className: 'button play-btn' },
          _react2.default.createElement(
            'span',
            { className: 'icon' },
            _react2.default.createElement('i', { className: 'fa fa-remove' })
          )
        );
      }
    }, _this.playedTimeColor = function () {
      if (_this.props.activeTrack.id === _this.props.track.id) {
        return _this.props.playedTime * 100 + '%';
      } else {
        return 0;
      }
    }, _this.renderPopularity = function () {
      var pop = Math.round(_this.props.track.popularity / 10);
      var foo = [];
      for (var i = 1; i <= pop; i++) {
        foo.push(i);
      }
      return foo.map(function (div, index) {
        return _react2.default.createElement('div', { key: index, className: 'color-pop' });
      });
    }, _this.toggleDropdown = function () {
      if (_this.state.dropdownClassName === 'dropdown') {
        _this.setState({ dropdownClassName: 'dropdown is-active' });
        document.addEventListener('mousedown', _this.handleClick);
      } else {
        _this.setState({ dropdownClassName: 'dropdown' });
        document.removeEventListener('mousedown', _this.handleClick);
      }
    }, _this.addTrackToPlaylist = function (ownerId, playlistId, spotifyURI) {
      _this.props.addTrackToPlaylist(ownerId, playlistId, spotifyURI);
      _this.toggleDropdown();
    }, _this.removeTrackFromPlaylist = function () {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(spotifyURI) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.props.removeTrackFromPlaylist(_this.props.activeTracklist.owner.id, _this.props.activeTracklist.id, spotifyURI);

              case 2:
                _this.toggleDropdown();
                _this.props.setActiveTracklist(_this.props.activeTracklist.owner.id, _this.props.activeTracklist.id);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.setMenuWrapperRef = function (node) {
      _this.wrapperRef = node;
    }, _this.onSeekMouseDown = function () {
      _this.props.startSeek();
    }, _this.onSeekChange = function (e) {
      _this.props.changeSeek(parseFloat(e.target.value));
    }, _this.onSeekMouseUp = function (e) {
      var audioPlayer = document.getElementById('audioPlayer');
      audioPlayer.currentTime = parseFloat(e.target.value * 30);

      _this.props.changeSeek(parseFloat(e.target.value));
      _this.props.stopSeek();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Track, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      if (this.props.track.id !== this.props.activeTrack.id) {
        return false;
      }
    }
  }, {
    key: 'renderFormattedArtists',
    value: function renderFormattedArtists(artists) {
      var _this3 = this;

      return artists.map(function (artist, index) {
        if (index + 1 === artists.length) {
          return _react2.default.createElement(
            'span',
            {
              key: index,
              onClick: function onClick() {
                return _this3.navigateToArtistDetailPage(artist.id);
              }
            },
            artist.name
          );
        } else {
          return _react2.default.createElement(
            'span',
            {
              key: index,
              onClick: function onClick() {
                return _this3.navigateToArtistDetailPage(artist.id);
              }
            },
            artist.name + ', '
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'li',
        { className: this.setClassName() },
        _react2.default.createElement(
          'div',
          { className: 'img-wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'img-click-play' },
            this.props.isPlaying && this.props.activeTrack.id === this.props.track.id ? _react2.default.createElement(
              'button',
              {
                onClick: function onClick() {
                  return _this4.props.pauseActiveTrack();
                },
                className: 'button play-btn'
              },
              _react2.default.createElement(
                'span',
                { className: 'icon' },
                _react2.default.createElement('i', { className: 'fa fa-pause' })
              )
            ) : _react2.default.createElement(
              'button',
              {
                onClick: function onClick() {
                  return _this4.startTrack(_this4.props.track);
                },
                className: 'button play-btn'
              },
              _react2.default.createElement(
                'span',
                { className: 'icon' },
                _react2.default.createElement('i', { className: 'fa fa-play' })
              )
            )
          ),
          this.props.track.album.images.length !== 0 ? _react2.default.createElement('img', { src: this.props.track.album.images[0].url }) : _react2.default.createElement('img', null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'track-info' },
          _react2.default.createElement(
            'div',
            { className: 'track-section-higher' },
            _react2.default.createElement(
              'div',
              { className: 'track-details' },
              _react2.default.createElement(
                'div',
                { className: 'artist-label' },
                this.renderFormattedArtists(this.props.track.artists)
              ),
              _react2.default.createElement(
                'div',
                {
                  onClick: function onClick() {
                    return _this4.navigateToTrackDetailPage();
                  },
                  className: 'title-label'
                },
                this.props.track.name
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'track-section-higher-right-grp' },
              _react2.default.createElement(
                'div',
                { className: 'popularity' },
                _react2.default.createElement(
                  'div',
                  {
                    className: 'bg-pop-wrapper',
                    style: { position: 'absolute' }
                  },
                  this.renderPopularity()
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'bg-pop-wrapper' },
                  _react2.default.createElement('div', { className: 'bg-pop' }),
                  _react2.default.createElement('div', { className: 'bg-pop' }),
                  _react2.default.createElement('div', { className: 'bg-pop' }),
                  _react2.default.createElement('div', { className: 'bg-pop' }),
                  _react2.default.createElement('div', { className: 'bg-pop' }),
                  _react2.default.createElement('div', { className: 'bg-pop' }),
                  _react2.default.createElement('div', { className: 'bg-pop' }),
                  _react2.default.createElement('div', { className: 'bg-pop' }),
                  _react2.default.createElement('div', { className: 'bg-pop' }),
                  _react2.default.createElement('div', { className: 'bg-pop' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: this.state.dropdownClassName },
                _react2.default.createElement(_TrackMenu2.default, {
                  toggleDropdown: function toggleDropdown() {
                    return _this4.toggleDropdown();
                  },
                  setMenuWrapperRef: this.setMenuWrapperRef,
                  privatePlaylists: this.props.privatePlaylists,
                  addTrackToPlaylist: function addTrackToPlaylist(ownerId, playlistId, uri) {
                    return _this4.addTrackToPlaylist(ownerId, playlistId, uri);
                  },
                  removeTrackFromPlaylist: function removeTrackFromPlaylist(uri) {
                    return _this4.removeTrackFromPlaylist(uri);
                  },
                  addTrackToQueuedList: function addTrackToQueuedList(track) {
                    return _this4.addTrackToQueuedList(track);
                  },
                  track: this.props.track,
                  isMyPlaylist: this.props.isMyPlaylist
                })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'track-section-lower' },
            this.renderStartStopButton(),
            this.props.activeTrack.id === this.props.track.id ? _react2.default.createElement(
              'div',
              { className: 'time-counter' },
              (Math.round(30 * (this.props.playedTime || 0)) / 100).toFixed(2)
            ) : _react2.default.createElement('div', { className: 'time-counter hidden' }),
            _react2.default.createElement(
              'div',
              { className: 'time-duration' },
              (Math.round(30) / 100).toFixed(2)
            ),
            _react2.default.createElement(
              'div',
              { className: 'running-track' },
              _react2.default.createElement('div', {
                style: { width: this.playedTimeColor() },
                className: 'played-color'
              }),
              _react2.default.createElement('div', { className: 'track-color' }),
              this.props.track.id === this.props.activeTrack.id ? _react2.default.createElement('input', {
                type: 'range',
                min: 0,
                max: 1,
                step: 'any',
                value: this.props.playedTime,
                onMouseDown: this.onSeekMouseDown,
                onChange: this.onSeekChange,
                onMouseUp: this.onSeekMouseUp
              }) : _react2.default.createElement('input', { type: 'range', min: 0, max: 1, step: 'any', value: 0 })
            )
          )
        )
      );
    }
  }]);

  return Track;
}(_react.Component);

Track.propTypes = {
  track: _propTypes2.default.object.isRequired,
  index: _propTypes2.default.number.isRequired,
  isMyPlaylist: _propTypes2.default.bool
};

var mapStateToProps = function mapStateToProps(_ref4) {
  var playlist = _ref4.playlist,
      track = _ref4.track,
      player = _ref4.player;

  return {
    playlists: playlist.playlists,
    isPlaying: player.isPlaying,
    playedTime: player.playedTime,
    activeTrack: track.activeTrack,
    activeTracklist: track.activeTracklist,
    privatePlaylists: playlist.privatePlaylists
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, {
  pauseActiveTrack: _player_actions.pauseActiveTrack,
  playActiveTrack: _player_actions.playActiveTrack,
  setActiveTrack: _track_actions.setActiveTrack,
  removeTrackFromPlaylist: _track_actions.removeTrackFromPlaylist,
  addTrackToPlaylist: _track_actions.addTrackToPlaylist,
  addTrackToQueuedList: _track_actions.addTrackToQueuedList,
  showMusicbar: _player_actions.showMusicbar,
  setActiveTracklist: _track_actions.setActiveTracklist,
  setPlayingTracklist: _track_actions.setPlayingTracklist,
  changeSeek: _player_actions.changeSeek,
  startSeek: _player_actions.startSeek,
  stopSeek: _player_actions.stopSeek
})(Track));

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbum = exports.SET_ALBUM = undefined;

var _spotifyApi_actions = __webpack_require__(6);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var SET_ALBUM = exports.SET_ALBUM = 'set_album';

var getAlbum = exports.getAlbum = function getAlbum(id) {
  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dispatch) {
      var album;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _spotifyApi_actions.fetchAlbum)(id);

            case 2:
              album = _context.sent;


              console.log(album);

              if (album) {
                dispatch({ type: SET_ALBUM, payload: album });
              }

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showErrorAlert = exports.showSuccessAlert = undefined;

var _reactSAlert = __webpack_require__(23);

var _reactSAlert2 = _interopRequireDefault(_reactSAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showSuccessAlert = exports.showSuccessAlert = function showSuccessAlert(text) {
  return function (dispatch) {
    _reactSAlert2.default.success(text, {
      position: 'top-right',
      effect: 'slide',
      beep: false,
      timeout: 4000,
      offset: 30
    });
  };
};

var showErrorAlert = exports.showErrorAlert = function showErrorAlert(text) {
  return function (dispatch) {
    _reactSAlert2.default.error(text, {
      position: 'top-right',
      effect: 'slide',
      beep: false,
      timeout: 4000,
      offset: 30
    });
  };
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArtistDetail = exports.SET_ARTIST_RELATED_ARTISTS = exports.SET_ARTIST_TOP_TRACKS = exports.SET_ARTIST_ALBUMS = exports.SET_ARTIST = undefined;

var _spotifyApi_actions = __webpack_require__(6);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var SET_ARTIST = exports.SET_ARTIST = 'set_artist';
var SET_ARTIST_ALBUMS = exports.SET_ARTIST_ALBUMS = 'set_artist_albums';
var SET_ARTIST_TOP_TRACKS = exports.SET_ARTIST_TOP_TRACKS = 'set_artist_top_tracks';
var SET_ARTIST_RELATED_ARTISTS = exports.SET_ARTIST_RELATED_ARTISTS = 'set_artist_related_artists';

var getArtistDetail = exports.getArtistDetail = function getArtistDetail(id) {
  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dispatch) {
      var artist, artistAlbums, artistTopTracks, relatedArtists;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _spotifyApi_actions.fetchArtist)(id);

            case 2:
              artist = _context.sent;
              _context.next = 5;
              return (0, _spotifyApi_actions.fetchArtistAlbums)(id);

            case 5:
              artistAlbums = _context.sent;
              _context.next = 8;
              return (0, _spotifyApi_actions.fetchArtistTopTracks)(id);

            case 8:
              artistTopTracks = _context.sent;
              _context.next = 11;
              return (0, _spotifyApi_actions.fetchRelatedArtists)(id);

            case 11:
              relatedArtists = _context.sent;


              if (artist) {
                dispatch({ type: SET_ARTIST, payload: artist });
              }
              if (artistAlbums) {
                dispatch({ type: SET_ARTIST_ALBUMS, payload: artistAlbums });
              }
              if (artistTopTracks) {
                dispatch({ type: SET_ARTIST_TOP_TRACKS, payload: artistTopTracks });
              }
              if (relatedArtists) {
                dispatch({ type: SET_ARTIST_RELATED_ARTISTS, payload: relatedArtists });
              }

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSearchedPlaylists = exports.getSearchedTracks = exports.getSearchedArtists = exports.SET_SEARCHED_PLAYLISTS = exports.SET_SEARCHED_TRACKS = exports.SET_SEARCHED_ARTISTS = undefined;

var _spotifyApi_actions = __webpack_require__(6);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Actions
var SET_SEARCHED_ARTISTS = exports.SET_SEARCHED_ARTISTS = 'set_searched_artists';
var SET_SEARCHED_TRACKS = exports.SET_SEARCHED_TRACKS = 'set_searched_tracks';
var SET_SEARCHED_PLAYLISTS = exports.SET_SEARCHED_PLAYLISTS = 'set_searched_playlists';

var getSearchedArtists = exports.getSearchedArtists = function getSearchedArtists(word) {
  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dispatch) {
      var artists;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _spotifyApi_actions.getSearchedArtistsCall)(word);

            case 2:
              artists = _context.sent;


              if (artists) {
                dispatch({ type: SET_SEARCHED_ARTISTS, payload: artists });
              }

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var getSearchedTracks = exports.getSearchedTracks = function getSearchedTracks(word) {
  return function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(dispatch) {
      var tracks;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _spotifyApi_actions.getSearchedTracksCall)(word);

            case 2:
              tracks = _context2.sent;


              if (tracks) {
                dispatch({ type: SET_SEARCHED_TRACKS, payload: tracks });
              }

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var getSearchedPlaylists = exports.getSearchedPlaylists = function getSearchedPlaylists(word) {
  return function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(dispatch) {
      var playlists;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _spotifyApi_actions.getSearchedPlaylistsCall)(word);

            case 2:
              playlists = _context3.sent;


              if (playlists) {
                dispatch({ type: SET_SEARCHED_PLAYLISTS, payload: playlists });
              }

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _playlist_actions = __webpack_require__(7);

var _track_actions = __webpack_require__(3);

var _Tracklist = __webpack_require__(19);

var _Tracklist2 = _interopRequireDefault(_Tracklist);

var _Playlists = __webpack_require__(42);

var _Playlists2 = _interopRequireDefault(_Playlists);

var _ExtraInfolist = __webpack_require__(34);

var _ExtraInfolist2 = _interopRequireDefault(_ExtraInfolist);

var _CreateNewPlaylistModal = __webpack_require__(49);

var _CreateNewPlaylistModal2 = _interopRequireDefault(_CreateNewPlaylistModal);

var _Loading = __webpack_require__(20);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      modalClassName: 'modal create-playlist-modal'
    }, _this.getAllPlaylists = function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(newProps) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.props.getPlaylists(newProps.user.id);

              case 2:
                _this.props.getPrivatePlaylists(_this.props.playlists, newProps.user.id);
                _this.props.getFeaturedPlaylists();
                if (_this.props.playlists.length > 1) {
                  _this.setStandardPlaylist(_this.props.playlists);
                }

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.setStandardPlaylist = function (playlists) {
      _this.props.setActivePlaylist(playlists[0].id);
      _this.props.setActiveTracklist(playlists[0].owner.id, playlists[0].id);
    }, _this.closeModal = function () {
      _this.setState({ modalClassName: 'modal create-playlist-modal' });
    }, _this.openModal = function () {
      _this.setState({ modalClassName: 'modal create-playlist-modal is-active' });
    }, _this.createPlaylist = function () {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(name, desc) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.closeModal();
                _context2.next = 3;
                return _this.props.createPlaylist(_this.props.user.id, name, desc);

              case 3:
                _this.props.getPlaylists();
                _this.props.getPrivatePlaylists();

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2, _x3) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.renderTracklist = function () {
      return !_this.props.activeTracklist || !_this.props.activeTracklist.id ? _react2.default.createElement(_Loading2.default, null) : _react2.default.createElement(_Tracklist2.default, null);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getAllPlaylists(this.props);
      window.scroll(0, 0);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function () {
      var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(newProps) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.props.user !== newProps.user) {
                  this.getAllPlaylists(newProps);
                }

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentWillReceiveProps(_x4) {
        return _ref4.apply(this, arguments);
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'columns' },
          _react2.default.createElement(
            'div',
            { className: 'column playlists-menu' },
            _react2.default.createElement(_Playlists2.default, { onOpenCreatePlaylistModal: this.openModal })
          ),
          _react2.default.createElement(
            'div',
            { className: 'column is-6 tracklist' },
            this.renderTracklist()
          ),
          _react2.default.createElement(
            'div',
            { className: 'column extra-infolist' },
            _react2.default.createElement(_ExtraInfolist2.default, null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: this.state.modalClassName },
          _react2.default.createElement(_CreateNewPlaylistModal2.default, {
            createPlaylist: function createPlaylist(name, desc) {
              return _this3.createPlaylist(name, desc);
            },
            closeModal: this.closeModal
          })
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref5) {
  var user = _ref5.user,
      playlist = _ref5.playlist,
      track = _ref5.track;

  return {
    user: user.user,
    playlists: playlist.playlists,
    privatePlaylists: playlist.privatePlaylists,
    featuredPlaylists: playlist.featuredPlaylists,
    activeTracklist: track.activeTracklist
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  getPlaylists: _playlist_actions.getPlaylists,
  getPrivatePlaylists: _playlist_actions.getPrivatePlaylists,
  getFeaturedPlaylists: _playlist_actions.getFeaturedPlaylists,
  createPlaylist: _playlist_actions.createPlaylist,
  setActivePlaylist: _playlist_actions.setActivePlaylist,
  setActiveTracklist: _track_actions.setActiveTracklist
})(Home);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _search_actions = __webpack_require__(15);

var _track_actions = __webpack_require__(3);

var _Track = __webpack_require__(10);

var _Track2 = _interopRequireDefault(_Track);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loadingTracks: false,
      loadingArtists: false,
      loadingPlaylists: false
    }, _this.makeSearch = function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(props) {
        var tracklist;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.props.getSearchedArtists(props.location.search.slice(3));
                _this.props.getSearchedPlaylists(props.location.search.slice(3));
                _context.next = 4;
                return _this.props.getSearchedTracks(props.location.search.slice(3));

              case 4:
                tracklist = {
                  owner: {},
                  name: '',
                  tracks: {
                    items: []
                  }
                };

                _this.props.searchedTracks.map(function (track) {
                  tracklist.tracks.items.push({ track: track });
                });
                _this.props.setActiveTracklistSolo(tracklist);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.navigateToArtistDetailPage = function (id) {
      _this.props.history.push('/artists/' + id);
    }, _this.navigateToPlaylist = function (userId, playlistId) {
      _this.props.history.push('/playlists/' + userId + '/' + playlistId);
    }, _this.renderArtists = function () {
      return _this.props.searchedArtists.map(function (artist, index) {
        return _react2.default.createElement(
          'li',
          {
            key: index,
            onClick: function onClick() {
              return _this.navigateToArtistDetailPage(artist.id);
            },
            className: 'artist-result'
          },
          _react2.default.createElement('img', {
            src: artist.images[1] ? artist.images[1].url : 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif'
          }),
          _react2.default.createElement(
            'p',
            null,
            artist.name
          )
        );
      });
    }, _this.renderTracks = function () {
      return _this.props.searchedTracks.map(function (track, index) {
        if (track !== null) {
          return _react2.default.createElement(_Track2.default, { key: index, track: track, index: index });
        }
      });
    }, _this.renderPlaylists = function () {
      return _this.props.searchedPlaylists.map(function (playlist, index) {
        return _react2.default.createElement(
          'li',
          {
            key: index,
            onClick: function onClick() {
              return _this.navigateToPlaylist(playlist.owner.id, playlist.id);
            },
            className: 'playlist-result'
          },
          _react2.default.createElement('img', {
            src: playlist.images ? playlist.images[0].url : 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif'
          }),
          _react2.default.createElement(
            'p',
            null,
            playlist.name.length > 30 ? playlist.name.substr(0, 27) + '...' : playlist.name
          )
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      window.scroll(0, 0);
      this.makeSearch(this.props);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (nextProps.location.search.slice(3) !== this.props.location.search.slice(3)) {
        this.makeSearch(nextProps);
        window.scroll(0, 0);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.setActiveTracklistSolo(null);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'search-component' },
        _react2.default.createElement(
          'div',
          { className: 'search-banner' },
          _react2.default.createElement(
            'h1',
            { className: 'title' },
            'S\xF6kresultat f\xF6r: '
          ),
          _react2.default.createElement(
            'h2',
            { className: 'subtitle' },
            this.props.location.search.slice(3)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'search-data-wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'searched-artists' },
            _react2.default.createElement(
              'h2',
              null,
              'Artister'
            ),
            _react2.default.createElement(
              'ul',
              { className: 'menu-list artist-list' },
              this.props.searchedArtists.length > 0 ? this.renderArtists() : _react2.default.createElement(
                'li',
                null,
                'Inga matchande artister'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'searched-tracks' },
            _react2.default.createElement(
              'h2',
              null,
              'L\xE5tar'
            ),
            _react2.default.createElement(
              'ul',
              { className: 'menu-list track-list' },
              this.props.searchedTracks.length > 0 ? this.renderTracks() : _react2.default.createElement(
                'li',
                { style: { textAlign: 'center' } },
                'Inga matchande l\xE5tar'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'searched-playlists' },
            _react2.default.createElement(
              'h2',
              null,
              'Spellistor'
            ),
            _react2.default.createElement(
              'ul',
              { className: 'menu-list playlist-list' },
              this.props.searchedPlaylists.length > 0 ? this.renderPlaylists() : _react2.default.createElement(
                'li',
                null,
                'Inga matchande spellistor'
              )
            )
          )
        )
      );
    }
  }]);

  return Search;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref3) {
  var search = _ref3.search;

  return {
    searchedArtists: search.searchedArtists,
    searchedPlaylists: search.searchedPlaylists,
    searchedTracks: search.searchedTracks
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, {
  getSearchedArtists: _search_actions.getSearchedArtists,
  getSearchedTracks: _search_actions.getSearchedTracks,
  getSearchedPlaylists: _search_actions.getSearchedPlaylists,
  setActiveTracklistSolo: _track_actions.setActiveTracklistSolo
})(Search));

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var toggleDropdown = _ref.toggleDropdown,
      setMenuWrapperRef = _ref.setMenuWrapperRef,
      privatePlaylists = _ref.privatePlaylists,
      addTrackToPlaylist = _ref.addTrackToPlaylist,
      removeTrackFromPlaylist = _ref.removeTrackFromPlaylist,
      addTrackToQueuedList = _ref.addTrackToQueuedList,
      track = _ref.track,
      isMyPlaylist = _ref.isMyPlaylist;

  var renderPlaylists = function renderPlaylists() {
    return privatePlaylists.map(function (playlist, index) {
      return _react2.default.createElement(
        "li",
        { key: index },
        _react2.default.createElement(
          "a",
          {
            onClick: function onClick() {
              return addTrackToPlaylist(playlist.owner.id, playlist.id, track.uri);
            }
          },
          playlist.name
        )
      );
    });
  };
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      { className: "dropdown-trigger" },
      _react2.default.createElement(
        "div",
        {
          onClick: function onClick() {
            return toggleDropdown();
          },
          className: "track-open-mini-meny",
          "aria-haspopup": "true",
          "aria-controls": "dropdown-menu"
        },
        _react2.default.createElement("i", { className: "fa fa-circle", "aria-hidden": "true" }),
        _react2.default.createElement("i", { className: "fa fa-circle", "aria-hidden": "true" }),
        _react2.default.createElement("i", { className: "fa fa-circle", "aria-hidden": "true" })
      )
    ),
    _react2.default.createElement(
      "div",
      {
        ref: setMenuWrapperRef,
        className: "dropdown-menu track-mini-meny",
        id: "dropdown-menu",
        role: "menu"
      },
      _react2.default.createElement(
        "div",
        { className: "dropdown-content" },
        _react2.default.createElement(
          "div",
          {
            className: "dropdown-item open-add-track",
            "aria-haspopup": "true",
            "aria-controls": "dropdown-menu4"
          },
          "L\xE4gg till i spellista",
          _react2.default.createElement(
            "span",
            { className: "icon is-small" },
            _react2.default.createElement("i", { className: "fa fa-angle-right", "aria-hidden": "true" })
          ),
          _react2.default.createElement(
            "div",
            { className: "mini-meny-playlists" },
            _react2.default.createElement(
              "ul",
              { className: "menu-list" },
              renderPlaylists()
            )
          )
        ),
        track.preview_url !== null ? _react2.default.createElement(
          "div",
          {
            onClick: function onClick() {
              return addTrackToQueuedList(track);
            },
            className: "dropdown-item"
          },
          "L\xE4gg till i k\xF6n"
        ) : null,
        isMyPlaylist ? _react2.default.createElement(
          "div",
          {
            onClick: function onClick() {
              return removeTrackFromPlaylist(track.uri);
            },
            className: "dropdown-item"
          },
          "Ta bort fr\xE5n spellistan"
        ) : null
      )
    )
  );
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _playlist_actions = __webpack_require__(7);

var _track_actions = __webpack_require__(3);

var _player_actions = __webpack_require__(4);

var _Track = __webpack_require__(10);

var _Track2 = _interopRequireDefault(_Track);

var _UnfollowPlaylistModal = __webpack_require__(51);

var _UnfollowPlaylistModal2 = _interopRequireDefault(_UnfollowPlaylistModal);

var _DeletePlaylistModal = __webpack_require__(50);

var _DeletePlaylistModal2 = _interopRequireDefault(_DeletePlaylistModal);

var _TracklistBannerScroll = __webpack_require__(46);

var _TracklistBannerScroll2 = _interopRequireDefault(_TracklistBannerScroll);

var _TracklistBanner = __webpack_require__(45);

var _TracklistBanner2 = _interopRequireDefault(_TracklistBanner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tracklist = function (_Component) {
  _inherits(Tracklist, _Component);

  function Tracklist() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Tracklist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tracklist.__proto__ || Object.getPrototypeOf(Tracklist)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      scrolled: false,
      unfollowModalClassName: 'modal are-you-sure',
      deleteModalClassName: 'modal are-you-sure'
    }, _this.componentDidMount = function () {
      var scrolled = false;
      var el = document.getElementsByClassName('tracklist-scroll-banner');
      _this.interval = setInterval(function () {
        if (window.pageYOffset > 400) {
          if (scrolled === false) {
            scrolled = true;
            el[0].classList = [el[0].classList[0] + ' banner-show effect1'];
          }
        } else {
          scrolled = false;
          el[0].classList = ['tracklist-scroll-banner effect1'];
        }
      }, 500);
    }, _this.showUnfollowModal = function () {
      _this.setState({ unfollowModalClassName: 'modal are-you-sure is-active' });
    }, _this.showDeleteModal = function () {
      _this.setState({ deleteModalClassName: 'modal are-you-sure is-active' });
    }, _this.closeUnfollowPlaylistModal = function () {
      _this.setState({ unfollowModalClassName: 'modal are-you-sure' });
    }, _this.closeDeletePlaylistModal = function () {
      _this.setState({ deleteModalClassName: 'modal are-you-sure' });
    }, _this.followActivePlaylist = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.props.followPlaylist(_this.props.activeTracklist.owner.id, _this.props.activeTracklist.id);

            case 2:
              _this.props.getPlaylists();

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.unfollowActivePlaylist = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.closeUnfollowPlaylistModal();
              _context2.next = 3;
              return _this.props.unfollowPlaylist(_this.props.activeTracklist.owner.id, _this.props.activeTracklist.id);

            case 3:
              _this.props.getPlaylists();

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _this.deleteActivePlaylist = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this.closeDeletePlaylistModal();
              _context3.next = 3;
              return _this.props.deletePlaylist(_this.props.user.id, _this.props.activeTracklist.id);

            case 3:
              _context3.next = 5;
              return _this.props.getPlaylists();

            case 5:

              // set new active tracklist to hide the deleted one
              _this.props.setActiveTracklist(_this.props.userPlaylists[0].owner.id, _this.props.userPlaylists[0].id);
              _this.props.setActivePlaylist(_this.props.userPlaylists[0].id);

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this2);
    })), _this.checkPlaylistOwner = function () {
      if (_this.props.activeTracklist.owner) {
        if (_this.props.activeTracklist.owner.id === _this.props.user.id) {
          return true;
        } else {
          false;
        }
      }
    }, _this.playActiveTracklist = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _this.props.showMusicbar();
              _this.props.setPlayingTracklist(_this.props.activeTracklist);
              _context4.next = 4;
              return _this.props.setActiveTrack(_this.props.activeTracklist.tracks.items[0].track, 0);

            case 4:
              _this.props.playActiveTrack();

            case 5:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this2);
    })), _this.checkFollowStatusOnPlaylist = function (playlistId) {
      var status = _this.props.userPlaylists.map(function (playlist) {
        if (playlist.id === playlistId) {
          return true;
        }
      });
      if (status.includes(true)) {
        return true;
      } else {
        return false;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tracklist, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: 'renderTracklist',
    value: function renderTracklist() {
      var _this3 = this;

      return this.props.activeTracklist.tracks.items.map(function (track, index) {
        if (track.track !== null) {
          return _react2.default.createElement(_Track2.default, {
            key: index,
            track: track.track,
            isMyPlaylist: _this3.checkPlaylistOwner(),
            index: index
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'menu ' },
        _react2.default.createElement(_TracklistBannerScroll2.default, {
          activeTracklist: this.props.activeTracklist,
          playingTracklistId: this.props.playingTracklistId,
          isPlaying: this.props.isPlaying,
          playActiveTracklist: this.playActiveTracklist,
          stopActiveTrack: this.props.pauseActiveTrack,
          showDeleteModal: this.showDeleteModal
        }),
        _react2.default.createElement(_TracklistBanner2.default, {
          activeTracklist: this.props.activeTracklist,
          playingTracklistId: this.props.playingTracklistId,
          isPlaying: this.props.isPlaying,
          playActiveTracklist: this.playActiveTracklist,
          stopActiveTrack: this.props.pauseActiveTrack,
          showDeleteModal: this.showDeleteModal,
          checkFollowStatusOnPlaylist: this.checkFollowStatusOnPlaylist,
          showUnfollowModal: this.showUnfollowModal,
          followActivePlaylist: this.followActivePlaylist,
          userId: this.props.user.id
        }),
        _react2.default.createElement(
          'ul',
          { className: 'menu-list tracklist-tracks' },
          this.props.activeTracklist ? this.renderTracklist() : null
        ),
        _react2.default.createElement(
          'div',
          { className: this.state.unfollowModalClassName },
          _react2.default.createElement(_UnfollowPlaylistModal2.default, {
            unfollowPlaylist: this.unfollowActivePlaylist,
            closeModal: this.closeUnfollowPlaylistModal
          })
        ),
        _react2.default.createElement(
          'div',
          { className: this.state.deleteModalClassName },
          _react2.default.createElement(_DeletePlaylistModal2.default, {
            deletePlaylist: this.deleteActivePlaylist,
            closeModal: this.closeDeletePlaylistModal
          })
        )
      );
    }
  }]);

  return Tracklist;
}(_react.Component);

Tracklist.propTypes = {};

var mapStateToProps = function mapStateToProps(_ref6) {
  var _ref7;

  var user = _ref6.user,
      track = _ref6.track,
      playlist = _ref6.playlist,
      player = _ref6.player;

  return _ref7 = {
    user: user.user,
    userPlaylists: playlist.playlists,
    activeTracklist: track.activeTracklist,
    privatePlaylists: playlist.privatePlaylists
  }, _defineProperty(_ref7, 'activeTracklist', track.activeTracklist), _defineProperty(_ref7, 'playingTracklistId', track.playingTracklist.id), _defineProperty(_ref7, 'isPlaying', player.isPlaying), _ref7;
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  deletePlaylist: _playlist_actions.deletePlaylist,
  getPlaylists: _playlist_actions.getPlaylists,
  setActiveTracklist: _track_actions.setActiveTracklist,
  setActivePlaylist: _playlist_actions.setActivePlaylist,
  unfollowPlaylist: _playlist_actions.unfollowPlaylist,
  followPlaylist: _playlist_actions.followPlaylist,
  playActiveTrack: _player_actions.playActiveTrack,
  pauseActiveTrack: _player_actions.pauseActiveTrack,
  setActiveTrack: _track_actions.setActiveTrack,
  showMusicbar: _player_actions.showMusicbar,
  setPlayingTracklist: _track_actions.setPlayingTracklist
})(Tracklist);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'a',
      {
        style: {
          margin: '0 auto',
          display: 'block',
          paddingTop: '100px',
          fontSize: '2.5rem',
          backgroundColor: 'transparent',
          border: '0'
        },
        className: 'button is-loading'
      },
      'Loading'
    )
  );
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = __webpack_require__(28);

var _App2 = _interopRequireDefault(_App);

var _Home = __webpack_require__(16);

var _Home2 = _interopRequireDefault(_Home);

var _Login = __webpack_require__(35);

var _Login2 = _interopRequireDefault(_Login);

var _Search = __webpack_require__(17);

var _Search2 = _interopRequireDefault(_Search);

var _Callback = __webpack_require__(31);

var _Callback2 = _interopRequireDefault(_Callback);

var _Discover = __webpack_require__(32);

var _Discover2 = _interopRequireDefault(_Discover);

var _DiscoverCategory = __webpack_require__(33);

var _DiscoverCategory2 = _interopRequireDefault(_DiscoverCategory);

var _PlaylistDetail = __webpack_require__(41);

var _PlaylistDetail2 = _interopRequireDefault(_PlaylistDetail);

var _NewReleases = __webpack_require__(39);

var _NewReleases2 = _interopRequireDefault(_NewReleases);

var _Toplists = __webpack_require__(43);

var _Toplists2 = _interopRequireDefault(_Toplists);

var _AlbumDetail = __webpack_require__(27);

var _AlbumDetail2 = _interopRequireDefault(_AlbumDetail);

var _ArtistDetail = __webpack_require__(29);

var _ArtistDetail2 = _interopRequireDefault(_ArtistDetail);

var _TrackDetail = __webpack_require__(44);

var _TrackDetail2 = _interopRequireDefault(_TrackDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  path: '/app',
  component: _Callback2.default,
  exact: false
}, {
  path: '/login',
  component: _Login2.default,
  exact: true
}, {
  component: _App2.default,
  exact: false,
  routes: [{
    path: '/',
    component: _Home2.default,
    exact: true
  }, {
    path: '/discover',
    component: _Discover2.default,
    exact: true
  }, {
    path: '/discover/:category',
    component: _DiscoverCategory2.default,
    exact: true
  }, {
    path: '/new_releases',
    component: _NewReleases2.default,
    exact: true
  }, {
    path: '/toplists',
    component: _Toplists2.default,
    exact: true
  }, {
    path: '/albums/:id',
    component: _AlbumDetail2.default,
    exact: true
  }, {
    path: '/artists/:id',
    component: _ArtistDetail2.default,
    exact: true
  }, {
    path: '/tracks/:id',
    component: _TrackDetail2.default,
    exact: true
  }, {
    path: '/playlists/:user/:id',
    component: _PlaylistDetail2.default,
    exact: true
  }, {
    path: '/search',
    component: _Search2.default,
    exact: false
  }]
}];

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAAAmCAYAAAA7tVwMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAgLSURBVHhe7ZvPq1VVFMelQU2FIIgSLDWzH6hloREqBeGgSCqIItAKKmigDWqYQk1DGxfptChyVtRAR/0Y6aCcPtHm/vgHTu9z312P5Xrfs8/Z597Hfde3Fnx456y1f5x77/7utc8+523Y8MCWJkmSNYR0DuCuB7c092zaKmNJklQgnQM4+eLTzfUPDspYkiQVSOcALrz5XNN8/IKMJUlSgXQOIEWZJFNCOgdgoty4eZuMrwc27tjdHHj9rdtQ5ZKkiHT24ODOx5vDe55cPkeQgN+XM3Y9tqM5um+njM07R45/2lz853LTZj//8tuojKqbJCuQzh6ce23vbRs7XaI8+8qzo7iKzStkxvN//DWWXrctXL3WHH7/I9lWkiwjnT2I95BdorzT7jkRZFt2vPDn3yPa7NQ338k2k2SEdPbARMg9JEK087YlKlmV+OZt22V83jj7w09jiS0ZIjz4xtsryu166eXm5FdfNzdu3RqXXCobyyXJMtLZAUI0ESJIL0qeV6o6vryKzxNkSW+X/r088qmyBnHE2Kdsss6RTsHx/buXBedF2CZKNoFOHdqzorzfHJpXyIjeau4TU5BJJ9IpsOUnxyxRvQiB40vvPL8sSr+xgxB9eWtzXkGE3jbvPSDLTQJtsmN75vsfR5tJxonFpfCr730o60RqHs3Qn5WNn4cleE1bTDxWlrptsS5i3TZK/YFvswv1W8bP30WsX410BrwIebRhIjSR2TmbOUAd29ghS1r8yrv7l0WJUM+Pyyq64rMkZkqEo8oNgQFGe122cPVac+zzL2QbhjcV93Dfa8axj8VJ6PS3Z26LR/z3E++f+Xz+/rrLrt+8Ofo+ShNfqT+osfjZgTZrLNavRjoDFxczIIJCWCxjeRyC6MiMHJ8+9MworkRJebLmjcVMi4/yxC2TIlrOEfsRt0m0MO5vrS53r1z7b/wTLBkiYVeVTIZY/MzJQFRtRJiRGYQ1xoBta9+bintKooRzv/4+ji7Z0U8+W1HG6BKJ76uv8b209bnuRGn3g2RLhIeYTFwmwgj1qAO+nB0T5y9x2uOcrGgi9JnZ4vhZQiNeztnFPbZ/18zeIEJANTM+oi3N+PijIBECA5FBZ5Cl4oTAywmqTW8q7ukSpRLSUJEwidBe3MHGZ/DZlRjU8rSrP99uhI03b8dPfLmivr8O1UYk1q8mOu7etHVZEAZZjsGPqMiaiINlKOdkNBMdPs5px+pyDoiLOPV9nLYQmPXDuWVmMjB++rbMSRwx8tfOzyy2TR3O27Bl8zRhgNTOopgazP4lBMTOQItlDAZ1HNCqvLcYizCYzNTA8nEzJpEhIjF8OaytjBcO35MqY1bqLxJXJnynqpz/jVV86ign2dFj2YmBbYPcdmM5RhAmOs4pz198Vp5YWxzBIUjEyV98ZEsr57MoS2aOmRAoT5tMCNZ/G6v5fJQsh9BspuRH9KiM6ndsqe9NCUzhBwuZJca9xVhkiCgxJcxpihJo31tcbQwRZRRk6VGV/55VfOpIZwu2lAWOGex2boPfYvxFuBZHUObn2MrZvSp16YMYgrM+LW7LXntZweLzAqL14uRtIIuxZDJjcPh6JeIGTIx7i7FIjShZQvvsxeD2A3raogQvjPgIqlaU8VahJEjwfVOOPQP2D/yuuMrgg5HOAggEyDwmMhOV3QvaX1uWAmWtvN1P0h71LEvGvixOWcvW8wzC9Gb+OOB9nRIMEG8x7i3GIjWi5Ji+vTCZZGxgr4Yo/XI9Xl+NKLlG/3okE6VddxtelCVTdQchnQVs+cixF6XPhGQ6K2MCJMOZSLkPRIjWZmlpSb07QZAQl2E2GPyArxFlXPbGuLcYi0TR9YnzeVT2Xw1R+t3feH19+1OCjEtvxZoXJfduCJNjBIPIwGdC4iY6lrBegFbelqPzCgOhzw/qaRuEfvnql7Vd+MzLjmyMe+vKBkNECVGY7DCvhii9mKjnY337Y5farK8gwYuSY34v+oyouoOQzgqUKEuis40cdlZVfB4wMahNjhJ+UHgRIRhv8Z5JQZ2Fq9fGNXSG9YOpa9D4TKQeC5REG5flXkDTEGW8d44TjG+nrb/4QgbXrMop/Peo4lNHOiswkZE1Oe8SpS1nyaAqvtZhQPjMgPHCQCkTscz0gsTiwPf3TIi99LYO7cVlWNyRBN9maSOCicVvfKiJpiRKiMI0m1SUvGror009tugSJROWtxpBwtyJ0kRm5ybKtkxo5cmqKj4PxCUbxsBBeAjUgxiiqR1WRO03TjCERxu868qbQQg1zvhY2yCLg57MSnv2ppG9W+sHvbo26BIl+EnArEaUfidTfW9852ryK4mS38obnzX2E/H1wYtSlY/c+8SEz8Sls4I2UdojjojtplpmnVf4saOI+hjLxLasqoTZZV2zfswSJSvdZ/URJURh1oiyZHwvbddWEmVNH2a+PnhR9rH7n9q3oo0qpLMCHn+o54r4fTnDXgBQsXkEUcTX3pQxqPrcKwKDPmbiaIi7bZBGWCp3tcfAK7XXV5RxYplUlLRFf20TGaQoO7gTlqdDYEAzeIAfkYzBMaJV93t9YEDRBtluGu0xKVh7iJpjBNtH3PTJ9UBX/wjIypba9uUUqo6i1F9XHwpfH2hTlWvj7oceXdFGFdI5AetVlEkyNaRzAuI9ZpIklUjnBNh/dqhYkiQ9kM4JuO/hR5rt2ydcUyfJekY6kySZHdKZJMnskM4kSWaHdCZJMjukM0mS2SGdSZLMiC3N/8I5ipU0wWkUAAAAAElFTkSuQmCC"

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-s-alert");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactRouterConfig = __webpack_require__(11);

var _routes = __webpack_require__(21);

var _routes2 = _interopRequireDefault(_routes);

var _renderer = __webpack_require__(52);

var _renderer2 = _interopRequireDefault(_renderer);

var _serverStore = __webpack_require__(53);

var _serverStore2 = _interopRequireDefault(_serverStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(65);

var app = express();

app.use(express.static('dist'));

app.get('*', function (req, res) {
  var store = (0, _serverStore2.default)(req);

  var promises = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);
    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('Listning on port 8080');
});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _user_actions = __webpack_require__(5);

var _album_actions = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlbumDetail = function (_Component) {
  _inherits(AlbumDetail, _Component);

  function AlbumDetail() {
    _classCallCheck(this, AlbumDetail);

    return _possibleConstructorReturn(this, (AlbumDetail.__proto__ || Object.getPrototypeOf(AlbumDetail)).apply(this, arguments));
  }

  _createClass(AlbumDetail, [{
    key: 'componentWillMount',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                window.scroll(0, 0);
                _context.next = 3;
                return this.props.setupAuthToAPI();

              case 3:
                this.props.getAlbum(this.props.match.params.id);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentWillMount() {
        return _ref.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'album-detail-component' },
        _react2.default.createElement(
          'h1',
          null,
          'AlbumDetail'
        ),
        _react2.default.createElement(
          'p',
          null,
          this.props.album.name
        )
      );
    }
  }]);

  return AlbumDetail;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var album = _ref2.album;

  return { album: album.album };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { setupAuthToAPI: _user_actions.setupAuthToAPI, getAlbum: _album_actions.getAlbum })(AlbumDetail));

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(11);

var _reactSAlert = __webpack_require__(23);

var _reactSAlert2 = _interopRequireDefault(_reactSAlert);

var _RequireAuth = __webpack_require__(47);

var _RequireAuth2 = _interopRequireDefault(_RequireAuth);

var _Nav = __webpack_require__(38);

var _Nav2 = _interopRequireDefault(_Nav);

var _MusicBar = __webpack_require__(36);

var _MusicBar2 = _interopRequireDefault(_MusicBar);

var _Home = __webpack_require__(16);

var _Home2 = _interopRequireDefault(_Home);

var _Search = __webpack_require__(17);

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app', style: { marginTop: '52px' } },
        _react2.default.createElement(_Nav2.default, { user: this.props.user }),
        (0, _reactRouterConfig.renderRoutes)(this.props.route.routes),
        _react2.default.createElement(_reactSAlert2.default, { stack: { limit: 3 }, html: true }),
        _react2.default.createElement(_MusicBar2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var user = _ref.user;

  return { user: user.user };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)((0, _RequireAuth2.default)(App));

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _Track = __webpack_require__(10);

var _Track2 = _interopRequireDefault(_Track);

var _artist_actions = __webpack_require__(14);

var _user_actions = __webpack_require__(5);

var _track_actions = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArtistDetail = function (_Component) {
  _inherits(ArtistDetail, _Component);

  function ArtistDetail() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, ArtistDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ArtistDetail.__proto__ || Object.getPrototypeOf(ArtistDetail)).call.apply(_ref, [this].concat(args))), _this), _this.getArtistDetail = function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(id) {
        var tracklist;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.props.getArtistDetail(id);

              case 2:
                tracklist = {
                  owner: {},
                  name: '',
                  tracks: {
                    items: []
                  }
                };

                _this.props.artistTopTracks.map(function (track) {
                  tracklist.tracks.items.push({ track: track });
                });
                _this.props.setActiveTracklistSolo(tracklist);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.navigateToAlbum = function (id) {
      _this.props.history.push('/albums/' + id);
    }, _this.navigateToArtist = function (id) {
      _this.props.history.push('/artists/' + id);
    }, _this.renderGenres = function (genres) {
      if (genres) {
        return genres.map(function (genre, index) {
          return _react2.default.createElement(
            'span',
            { key: index, className: 'genre' },
            genre
          );
        });
      }
    }, _this.renderTracks = function () {
      return _this.props.artistTopTracks.map(function (track, index) {
        if (track !== null) {
          return _react2.default.createElement(_Track2.default, { key: index, track: track, index: index });
        }
      });
    }, _this.renderAlbums = function () {
      return _this.props.artistAlbums.map(function (album, index) {
        return _react2.default.createElement(
          'li',
          {
            key: index,
            className: 'artist-album',
            onClick: function onClick() {
              return _this.navigateToAlbum(album.id);
            }
          },
          _react2.default.createElement('img', {
            src: album.images ? album.images[0].url : 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif'
          }),
          _react2.default.createElement(
            'p',
            null,
            album.name
          )
        );
      });
    }, _this.renderRelated = function () {
      return _this.props.relatedArtists.map(function (artist, index) {
        return _react2.default.createElement(
          'li',
          {
            key: index,
            className: 'artist-related-solo',
            onClick: function onClick() {
              return _this.navigateToArtist(artist.id);
            }
          },
          _react2.default.createElement('img', {
            src: artist.images ? artist.images[0].url : 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif'
          }),
          _react2.default.createElement(
            'p',
            null,
            artist.name
          )
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ArtistDetail, [{
    key: 'componentWillMount',
    value: function () {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        var _this3 = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                window.scroll(0, 0);
                _context2.next = 3;
                return this.props.setupAuthToAPI();

              case 3:
                this.getArtistDetail(this.props.match.params.id);
                this.unlisten = this.props.history.listen(function (location, action) {
                  var incID = location.pathname.slice(9);
                  var artists = location.pathname.slice(1, 8);
                  if (incID && artists == 'artists') {
                    if (incID !== _this3.props.match.params.id) {
                      _this3.getArtistDetail(incID);
                    }
                  }
                });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillMount() {
        return _ref3.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unlisten();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.artist.id !== this.props.artist.id) {
        this.props.getArtistDetail(this.props.match.params.id);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'artist-detail-component' },
        _react2.default.createElement(
          'div',
          { className: 'artist-info' },
          _react2.default.createElement(
            'div',
            { className: 'artist-art-wrapper' },
            _react2.default.createElement('img', {
              className: 'artist-art',
              src: this.props.artist.images ? this.props.artist.images[0].url : 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif'
            }),
            this.props.artist.images ? _react2.default.createElement('div', { className: 'artist-art-fader' }) : null,
            _react2.default.createElement(
              'h1',
              null,
              this.props.artist.name
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'artist-info-box' },
            _react2.default.createElement(
              'p',
              { className: 'artist-genres' },
              this.renderGenres(this.props.artist.genres)
            ),
            _react2.default.createElement(
              'p',
              { className: 'artist-followers' },
              _react2.default.createElement(
                'span',
                null,
                'F\xF6ljare: '
              ),
              this.props.artist.followers ? this.props.artist.followers.total.toLocaleString() : null
            ),
            _react2.default.createElement(
              'p',
              { className: 'artist-popularity' },
              _react2.default.createElement(
                'span',
                null,
                'Popul\xE4ritet:'
              ),
              ' ',
              this.props.artist.popularity
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'artist-related' },
            _react2.default.createElement(
              'h2',
              null,
              'Liknande artister'
            ),
            _react2.default.createElement(
              'ul',
              { className: 'menu-list related-list' },
              this.props.relatedArtists.length > 0 ? this.renderRelated() : _react2.default.createElement(
                'li',
                { style: { textAlign: 'center' } },
                'Artisten har liknande artister'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'artist-albums' },
          _react2.default.createElement(
            'h2',
            null,
            'Album'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'menu-list album-list' },
            this.props.artistAlbums.length > 0 ? this.renderAlbums() : _react2.default.createElement(
              'li',
              { style: { textAlign: 'center' } },
              'Artisten har inga album'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'artist-top-tracks' },
          _react2.default.createElement(
            'h2',
            null,
            'L\xE5tar'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'menu-list track-list' },
            this.props.artistTopTracks.length > 0 ? this.renderTracks() : _react2.default.createElement(
              'li',
              { style: { textAlign: 'center' } },
              'Artisten har inga l\xE5tar'
            )
          )
        )
      );
    }
  }]);

  return ArtistDetail;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref4) {
  var artist = _ref4.artist;

  return {
    artist: artist.artist,
    artistAlbums: artist.albums,
    artistTopTracks: artist.topTracks,
    relatedArtists: artist.relatedArtists
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, {
  setupAuthToAPI: _user_actions.setupAuthToAPI,
  getArtistDetail: _artist_actions.getArtistDetail,
  setActiveTracklistSolo: _track_actions.setActiveTracklistSolo
})(ArtistDetail));

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AudioPlayer = function (_Component) {
  _inherits(AudioPlayer, _Component);

  function AudioPlayer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AudioPlayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AudioPlayer.__proto__ || Object.getPrototypeOf(AudioPlayer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isPlaying: false,
      muted: false,
      volume: '',
      playbackRate: '',
      url: ''
    }, _this.timeUpdate = function (e) {
      var duration = _this.audioPlayer.duration;
      if (duration) {
        _this.props.onProgress(_this.audioPlayer.currentTime / duration);
      }
    }, _this.startPlayer = function () {
      _this.audioPlayer.play();
      _this.setState({ isPlaying: true });
    }, _this.pausePlayer = function () {
      _this.audioPlayer.pause();
      _this.setState({ isPlaying: false });
    }, _this.stopPlayer = function () {
      _this.audioPlayer.removeAttribute('src');
      return;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AudioPlayer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.props.url !== nextProps.url) {
        this.setState({ url: nextProps.url }, function () {
          _this2.startPlayer();
        });
      }

      if (nextProps.isPlaying && !this.state.isPlaying) {
        this.startPlayer();
      }
      if (!nextProps.isPlaying && this.state.isPlaying) {
        this.pausePlayer();
      }
      if (this.state.volume !== nextProps.volume && !nextProps.muted) {
        this.audioPlayer.volume = nextProps.volume;
      }
      if (this.state.muted !== nextProps.muted) {
        this.audioPlayer.volume = nextProps.muted ? 0 : nextProps.volume;
      }
      if (this.state.playbackRate !== nextProps.playbackRate && this.audioPlayer.setPlaybackRate) {
        this.audioPlayer.setPlaybackRate(nextProps.playbackRate);
        this.setState({ playbackRate: nextProps.playbackRate });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('audio', {
        ref: function ref(player) {
          _this3.audioPlayer = player;
        },
        id: 'audioPlayer',
        autoPlay: false,
        crossOrigin: 'anonymous',
        src: this.props.url,
        volume: 0.5,
        onEnded: function onEnded() {
          return _this3.props.onEnded();
        },
        onTimeUpdate: function onTimeUpdate(e) {
          return _this3.timeUpdate(e);
        },
        loop: this.props.loop
      });
    }
  }]);

  return AudioPlayer;
}(_react.Component);

exports.default = AudioPlayer;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Redirect = function (_Component) {
  _inherits(Redirect, _Component);

  function Redirect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Redirect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Redirect.__proto__ || Object.getPrototypeOf(Redirect)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      console.log(localStorage.getItem('token'));

      console.log('Ny token');
      var newHash = _this.props.location.hash.slice(14, -34);
      if (newHash) {
        localStorage.setItem('token', newHash);
        console.log('SUCCESS!');
        window.opener.postMessage({
          type: 'access_token',
          access_token: newHash
        }, '*');
      }

      window.close();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Redirect, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null);
    }
  }]);

  return Redirect;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Redirect);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _category_actions = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Discover = function (_Component) {
  _inherits(Discover, _Component);

  function Discover() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Discover);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Discover.__proto__ || Object.getPrototypeOf(Discover)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = function () {
      window.scroll(0, 0);
      _this.props.getCategories();
    }, _this.navigateToCategory = function (id) {
      _this.props.history.push('/discover/' + id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Discover, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'discover-component ' },
        _react2.default.createElement(
          'h1',
          null,
          'Utforska'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'menu-list discover-list' },
          this.props.categories.map(function (category, index) {
            return _react2.default.createElement(
              'li',
              {
                onClick: function onClick() {
                  return _this2.navigateToCategory(category.id);
                },
                key: index,
                className: 'discover-item'
              },
              _react2.default.createElement('img', { src: category.icons[0].url }),
              _react2.default.createElement(
                'h2',
                null,
                category.name
              )
            );
          })
        )
      );
    }
  }]);

  return Discover;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var categories = _ref2.categories;

  return { categories: categories.categories };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { getCategories: _category_actions.getCategories })(Discover));

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _category_actions = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DiscoverCategory = function (_Component) {
  _inherits(DiscoverCategory, _Component);

  function DiscoverCategory() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DiscoverCategory);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DiscoverCategory.__proto__ || Object.getPrototypeOf(DiscoverCategory)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = function () {
      window.scroll(0, 0);
      _this.props.getActiveCategoryPlaylists(_this.props.match.params.category);
    }, _this.navigateToPlaylist = function (userId, playlistId) {
      _this.props.history.push('/playlists/' + userId + '/' + playlistId);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DiscoverCategory, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'discover-category-component ' },
        _react2.default.createElement(
          'button',
          {
            onClick: function onClick() {
              return _this2.props.history.goBack();
            },
            className: 'go-back-button'
          },
          _react2.default.createElement('i', { className: 'fa fa-chevron-left', 'aria-hidden': 'true' })
        ),
        _react2.default.createElement(
          'h1',
          null,
          this.props.match.params.category
        ),
        _react2.default.createElement(
          'ul',
          { className: 'menu-list discover-category-list' },
          this.props.categoryPlaylists.map(function (playlist, index) {
            return _react2.default.createElement(
              'li',
              {
                onClick: function onClick() {
                  return _this2.navigateToPlaylist(playlist.owner.id, playlist.id);
                },
                key: index,
                className: 'discover-category-item'
              },
              _react2.default.createElement('img', { src: playlist.images[0].url })
            );
          })
        )
      );
    }
  }]);

  return DiscoverCategory;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var categories = _ref2.categories;

  return { categoryPlaylists: categories.activeCategoryPlaylists };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { getActiveCategoryPlaylists: _category_actions.getActiveCategoryPlaylists })(DiscoverCategory));

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFlipMove = __webpack_require__(67);

var _reactFlipMove2 = _interopRequireDefault(_reactFlipMove);

var _reactRedux = __webpack_require__(1);

var _track_actions = __webpack_require__(3);

var _player_actions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExtraInfolist = function (_Component) {
  _inherits(ExtraInfolist, _Component);

  function ExtraInfolist() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, ExtraInfolist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ExtraInfolist.__proto__ || Object.getPrototypeOf(ExtraInfolist)).call.apply(_ref, [this].concat(args))), _this), _this.startTrack = function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(track) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.props.setActiveTrack(track);

              case 2:
                _this.props.playActiveTrack();

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.renderLatestPlayed = function (tracks) {
      return tracks.map(function (track, index) {
        return _react2.default.createElement(
          'li',
          { key: index },
          _react2.default.createElement(
            'div',
            { className: 'left-grp' },
            track.album.images.length !== 0 ? _react2.default.createElement('img', { src: track.album.images[0].url }) : _react2.default.createElement('img', null),
            _react2.default.createElement(
              'div',
              { className: 'track-info' },
              _react2.default.createElement(
                'div',
                { className: 'artist-label' },
                _this.renderArtists(track.artists)
              ),
              _react2.default.createElement(
                'div',
                { className: 'title-label' },
                track.name
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'right-grp' },
            _react2.default.createElement(
              'button',
              {
                onClick: function onClick() {
                  return _this.startTrack(track);
                },
                className: 'button play-btn'
              },
              _react2.default.createElement(
                'span',
                { className: 'icon' },
                _react2.default.createElement('i', { className: 'fa fa-play' })
              )
            )
          )
        );
      });
    }, _this.renderQueuedTracks = function (tracks) {
      return tracks.map(function (track, index) {
        return _react2.default.createElement(
          'li',
          { key: index },
          _react2.default.createElement(
            'div',
            { className: 'left-grp' },
            track.album.images.length !== 0 ? _react2.default.createElement('img', { src: track.album.images[0].url }) : _react2.default.createElement('img', null),
            _react2.default.createElement(
              'div',
              { className: 'track-info' },
              _react2.default.createElement(
                'div',
                { className: 'artist-label' },
                _this.renderArtists(track.artists)
              ),
              _react2.default.createElement(
                'div',
                { className: 'title-label' },
                track.name
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'right-grp' },
            _react2.default.createElement(
              'span',
              {
                onClick: function onClick() {
                  return _this.props.removeTrackFromQueuedTracks(index);
                },
                className: 'icon'
              },
              _react2.default.createElement('i', { className: 'fa fa-remove' })
            )
          )
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ExtraInfolist, [{
    key: 'renderArtists',
    value: function renderArtists(artists) {
      return artists.map(function (artist, index) {
        if (index + 1 === artists.length) {
          return artist.name;
        } else {
          return artist.name + ', ';
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'aside',
        { className: 'menu' },
        _react2.default.createElement(
          'p',
          { className: 'menu-label top-label' },
          _react2.default.createElement(
            'span',
            null,
            'Senast spelade'
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'menu-list latest-played' },
          _react2.default.createElement(
            _reactFlipMove2.default,
            {
              duration: 350,
              easing: 'ease-out',
              appearAnimation: 'accordionHorizontal',
              className: 'flip-move'
            },
            this.props.latestPlayedTracks ? this.renderLatestPlayed(this.props.latestPlayedTracks) : _react2.default.createElement(
              'li',
              { style: { marginLeft: '30px' } },
              'Inga spelade l\xE5tar...'
            )
          )
        ),
        _react2.default.createElement(
          'p',
          { style: { marginTop: '30px' }, className: 'menu-label top-label' },
          _react2.default.createElement(
            'span',
            null,
            'K\xF6ade l\xE5tar'
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'menu-list queued-tracks' },
          _react2.default.createElement(
            _reactFlipMove2.default,
            {
              duration: 350,
              easing: 'ease-out',
              appearAnimation: 'accordionHorizontal'
            },
            this.props.queuedTracks ? this.renderQueuedTracks(this.props.queuedTracks) : _react2.default.createElement(
              'li',
              { style: { marginLeft: '30px' } },
              'Du har inga l\xE5tar p\xE5 k\xF6'
            )
          )
        )
      );
    }
  }]);

  return ExtraInfolist;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref3) {
  var track = _ref3.track;

  return {
    queuedTracks: track.queuedTracks,
    latestPlayedTracks: track.latestPlayedTracks
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  setActiveTrack: _track_actions.setActiveTrack,
  playActiveTrack: _player_actions.playActiveTrack,
  removeTrackFromQueuedTracks: _track_actions.removeTrackFromQueuedTracks
})(ExtraInfolist);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

var _user_actions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var scopes = ['user-read-private', 'playlist-read-private', 'playlist-read-collaborative', 'playlist-modify-public', 'playlist-modify-private', 'user-top-read', 'user-library-read', 'user-library-modify', 'user-follow-read', 'user-follow-modify'];
var client_id = '8d7cb1d087644280982de543cbb92989';
var redirect_uri = 'http://localhost:8080/app'; //'https://soundize.herokuapp.com/app'

var url = 'https://accounts.spotify.com/authorize?client_id=' + client_id + '&redirect_uri=' + encodeURIComponent(redirect_uri) + '&scope=' + encodeURIComponent(scopes.join(' ')) + '&response_type=token';

var width = 450,
    height = 730,
    left = width / 2 - width / 2,
    top = height / 2 - height / 2;

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      navClassName: 'navbar-start'
    }, _this.auth = function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(event) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(event.data.type == 'access_token')) {
                  _context.next = 7;
                  break;
                }

                console.log(_this.props);
                _context.next = 4;
                return _this.props.setupAuthToAPI();

              case 4:
                _context.next = 6;
                return _this.props.getCurrentUser();

              case 6:
                _this.props.history.push('/');

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.login = function () {
      window.open(url, 'Spotify', 'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      window.addEventListener('message', function (e) {
        return _this3.auth(e);
      }, false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      console.log(url);
      return _react2.default.createElement(
        'div',
        { className: 'login-wrapper' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'nav',
            { className: 'navbar ' },
            _react2.default.createElement(
              'div',
              { className: 'navbar-brand' },
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                { className: 'navbar-item', to: '/' },
                _react2.default.createElement('img', {
                  src: __webpack_require__(22),
                  alt: 'asasas'
                })
              ),
              _react2.default.createElement(
                'a',
                {
                  className: 'navbar-item is-hidden-desktop',
                  href: 'https://github.com/jgthms/bulma',
                  target: '_blank'
                },
                _react2.default.createElement(
                  'span',
                  { className: 'icon' },
                  _react2.default.createElement('i', { className: 'fa fa-github' })
                )
              ),
              _react2.default.createElement(
                'a',
                {
                  className: 'navbar-item is-hidden-desktop',
                  href: 'https://twitter.com/jgthms',
                  target: '_blank'
                },
                _react2.default.createElement(
                  'span',
                  { className: 'icon' },
                  _react2.default.createElement('i', { className: 'fa fa-twitter' })
                )
              ),
              _react2.default.createElement(
                'div',
                {
                  className: 'navbar-burger burger',
                  'data-target': 'navMenubd-example'
                },
                _react2.default.createElement('span', null),
                _react2.default.createElement('span', null),
                _react2.default.createElement('span', null)
              )
            ),
            _react2.default.createElement(
              'div',
              { id: 'navMenubd-example', className: 'navbar-menu' },
              _react2.default.createElement(
                'div',
                { className: 'navbar-end' },
                _react2.default.createElement(
                  'a',
                  { onClick: function onClick() {
                      return _this4.login();
                    }, className: 'login-btn' },
                  _react2.default.createElement(
                    'span',
                    null,
                    'Logga in'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'section',
            { className: 'wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'banner-info' },
              _react2.default.createElement(
                'h1',
                null,
                'Discover a universe of music'
              ),
              _react2.default.createElement(
                'h1',
                null,
                'Login now!'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'banner-button' },
                  'LEARN MORE'
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'scroll-down', id: 'mini-info' },
                  'Learn about Soundize'
                )
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement('i', {
                className: 'fa fa-arrow-down scroll-down bounce',
                'aria-hidden': 'true'
              })
            )
          ),
          _react2.default.createElement(
            'section',
            { className: 'banner-two' },
            _react2.default.createElement('img', { src: __webpack_require__(63), alt: 'devices' }),
            _react2.default.createElement(
              'div',
              { className: 'banner-two-info' },
              _react2.default.createElement(
                'h1',
                { id: 'slide-one' },
                'What\'s on Soundize?'
              ),
              _react2.default.createElement(
                'h2',
                { id: 'slide-two' },
                'Music'
              ),
              _react2.default.createElement(
                'p',
                { id: 'slide-two' },
                'There are millions of songs on Maesto. Play your favorites, discover new tracks, and build the perfect collection.'
              ),
              _react2.default.createElement(
                'h2',
                { id: 'slide-three' },
                'Playlists'
              ),
              _react2.default.createElement(
                'p',
                { id: 'slide-three' },
                'You\u2019ll find readymade playlists to match your mood, put together by music fans and experts.'
              ),
              _react2.default.createElement(
                'h2',
                { id: 'slide-four' },
                'New releases'
              ),
              _react2.default.createElement(
                'p',
                { id: 'slide-four' },
                'Hear the week\'s latest singles and albums, and check out what\'s hot in the Top 50.'
              )
            )
          ),
          _react2.default.createElement(
            'section',
            { className: 'banner-three' },
            _react2.default.createElement('i', {
              className: 'fa fa-arrow-down scroll-down-two',
              'aria-hidden': 'true'
            }),
            _react2.default.createElement(
              'div',
              { className: 'wrapper' },
              _react2.default.createElement(
                'h1',
                null,
                'Music for everyone.'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'banner-button', href: '#' },
                  'GET SOUNDIZE FREE'
                ),
                _react2.default.createElement(
                  'a',
                  { className: 'banner-button', href: '#' },
                  'GEAT SOUNDIZE PREMIUM'
                )
              )
            )
          ),
          _react2.default.createElement(
            'section',
            { className: 'banner-four' },
            _react2.default.createElement('i', {
              className: 'fa fa-arrow-down scroll-down-three',
              'aria-hidden': 'true'
            }),
            _react2.default.createElement(
              'div',
              { className: 'service-header' },
              _react2.default.createElement(
                'h1',
                null,
                'One account. Listen everywhere.'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Mobile - Computer - Tablet - Web player - Car'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'services' },
              _react2.default.createElement(
                'div',
                { className: 'service-one' },
                _react2.default.createElement(
                  'h2',
                  null,
                  'Search'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Know what you want to listen to? Just search and hit play.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'service-two' },
                _react2.default.createElement(
                  'h2',
                  null,
                  'Browse'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Check out the latest charts, brand new releases and great playlists for right now.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'service-three' },
                _react2.default.createElement(
                  'h2',
                  null,
                  'Discover'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Enjoy new music every Monday with your own personal playlist. Or sit back and enjoy Radio.'
                )
              )
            )
          ),
          _react2.default.createElement(
            'footer',
            null,
            _react2.default.createElement(
              'div',
              { id: 'footer' },
              _react2.default.createElement(
                'span',
                { className: 'slide' },
                _react2.default.createElement('i', {
                  className: 'fa fa-facebook-square footicon',
                  'aria-hidden': 'true'
                }),
                _react2.default.createElement('i', {
                  className: 'fa fa-linkedin-square footicon',
                  'aria-hidden': 'true'
                }),
                _react2.default.createElement('i', { className: 'fa fa-instagram footicon', 'aria-hidden': 'true' }),
                _react2.default.createElement('i', {
                  className: 'fa fa-twitter-square footicon',
                  'aria-hidden': 'true'
                })
              ),
              _react2.default.createElement(
                'h2',
                null,
                'Copyright - 2017 Soundize'
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(null, { getCurrentUser: _user_actions.getCurrentUser, setupAuthToAPI: _user_actions.setupAuthToAPI })(Login));

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _screenfull = __webpack_require__(70);

var _screenfull2 = _interopRequireDefault(_screenfull);

var _reactRouterDom = __webpack_require__(2);

var _AudioPlayer = __webpack_require__(30);

var _AudioPlayer2 = _interopRequireDefault(_AudioPlayer);

var _MusicBarActions = __webpack_require__(37);

var _MusicBarActions2 = _interopRequireDefault(_MusicBarActions);

var _TrackMenu = __webpack_require__(18);

var _TrackMenu2 = _interopRequireDefault(_TrackMenu);

var _track_actions = __webpack_require__(3);

var _player_actions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MusicBar = function (_Component) {
  _inherits(MusicBar, _Component);

  function MusicBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MusicBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MusicBar.__proto__ || Object.getPrototypeOf(MusicBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      duration: 30, // Placeholder just for Spotify
      muted: false,
      volume: 0.5,
      loop: false,
      dropdownClassName: 'dropdown'
    }, _this.createVisualization = function () {
      var context = new (window.AudioContext || window.webkitAudioContext)();
      var analyser = context.createAnalyser();
      var canvas = _this.refs.analyzerCanvas;
      //let canvasTwo = document.getElementById('analyzerTwo')
      var ctx = canvas.getContext('2d');
      // let ctx2 = canvasTwo ? canvasTwo.getContext('2d') : null
      var audio = document.getElementById('audioPlayer');
      _this.audioSrc = context.createMediaElementSource(audio);
      _this.audioSrc.connect(analyser);
      _this.audioSrc.connect(context.destination);
      analyser.connect(context.destination);

      var renderFrame = function renderFrame() {
        if (document.getElementById('analyzerTwo')) {
          canvasTwo = document.getElementById('analyzerTwo');
          ctx2 = canvasTwo.getContext('2d');
        }
        var freqData = new Uint8Array(analyser.frequencyBinCount);

        analyser.getByteFrequencyData(freqData);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ff6b42';
        // ctx2 ? ctx2.clearRect(0, 0, canvasTwo.width, canvasTwo.height) : null
        // ctx2 ? (ctx2.fillStyle = '#ff6b42') : null

        var bars = 100;
        for (var i = 0; i < analyser.frequencyBinCount; i++) {
          var bar_x = i * 3;
          var bar_width = 2;
          var bar_height = -(freqData[i] / 2);
          ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
          // ctx2
          //   ? ctx2.fillRect(bar_x, canvasTwo.height, bar_width, bar_height)
          //   : null
        }
        requestAnimationFrame(renderFrame);
      };
      var draw = function draw() {
        if (document.getElementById('analyzerTwo')) {
          ctx2.clearRect(0, 0, WIDTH, HEIGHT);
          drawVisual = requestAnimationFrame(draw);
          analyser.getByteTimeDomainData(dataArray);

          ctx2.fillStyle = 'rgb(200, 200, 200)';
          ctx2.fillRect(0, 0, WIDTH, HEIGHT);
          ctx2.lineWidth = 2;
          ctx2.strokeStyle = 'rgb(0, 0, 0)';

          ctx2.beginPath();
          var sliceWidth = WIDTH * 1.0 / bufferLength;
          var x = 0;

          for (var i = 0; i < bufferLength; i++) {
            var v = dataArray[i] / 128.0;
            var y = v * HEIGHT / 2;

            if (i === 0) {
              ctx2.moveTo(x, y);
            } else {
              ctx2.lineTo(x, y);
            }

            x += sliceWidth;
          }

          ctx2.lineTo(canvas.width, canvas.height / 2);
          myCanvas.stroke();
        }
      };

      renderFrame();
    }, _this.navigateToTrackDetailPage = function () {
      _this.props.history.push('/tracks/' + _this.props.activeTrack.id);
    }, _this.navigateToArtistDetailPage = function (id) {
      _this.props.history.push('/artists/' + id);
    }, _this.onProgress = function (time) {
      // We only want to update time slider if we are not currently seeking
      if (!_this.props.isSeeking) {
        _this.props.setPlayedTime(time);
      }
    }, _this.startStopTrack = function () {
      _this.props.toggleStartPauseTrack();
    }, _this.onSeekMouseDown = function () {
      _this.props.startSeek();
    }, _this.onSeekChange = function (e) {
      _this.props.changeSeek(parseFloat(e.target.value));
    }, _this.onSeekMouseUp = function (e) {
      var audioPlayer = document.getElementById('audioPlayer');
      audioPlayer.currentTime = parseFloat(e.target.value * _this.state.duration);
      _this.props.stopSeek();
      _this.props.changeSeek(parseFloat(e.target.value));
    }, _this.setVolume = function (e) {
      _this.setState({ volume: parseFloat(e.target.value) });
    }, _this.toggleMuted = function () {
      _this.setState({ muted: !_this.state.muted });
    }, _this.onEnded = function () {
      if (!_this.state.loop) {
        _this.props.playNextTrack();
      }
    }, _this.playedTimeColor = function () {
      var procent = 1.11 * _this.props.playedTime;
      var time = _this.props.playedTime * 100 * 1 - procent;
      return time + '%';
    }, _this.volumeAmount = function () {
      var amount = _this.state.volume * 100;
      return amount + '%';
    }, _this.requestFullScreen = function (e) {
      if (_screenfull2.default.enabled) {
        _screenfull2.default.request();
      }
    }, _this.addTrackToPlaylist = function (ownerId, playlistId, spotifyURI) {
      _this.props.addTrackToPlaylist(ownerId, playlistId, spotifyURI);
      _this.toggleDropdown();
    }, _this.addTrackToQueuedList = function (track) {
      _this.props.addTrackToQueuedList(track);
      _this.toggleDropdown();
    }, _this.toggleDropdown = function () {
      if (_this.state.dropdownClassName === 'dropdown') {
        _this.setState({ dropdownClassName: 'dropdown is-active' });
        document.addEventListener('mousedown', _this.handleClick);
      } else {
        _this.setState({ dropdownClassName: 'dropdown' });
        document.removeEventListener('mousedown', _this.handleClick);
      }
    }, _this.handleClick = function (event) {
      if (_this.state.dropdownClassName === 'dropdown is-active') {
        if (_this.wrapperRef && !_this.wrapperRef.contains(event.target)) {
          _this.setState({ dropdownClassName: 'dropdown' });
        }
      }
    }, _this.setMenuWrapperRef = function (node) {
      _this.wrapperRef = node;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MusicBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.createVisualization();
    }
  }, {
    key: 'renderFormattedArtists',
    value: function renderFormattedArtists(artists) {
      var _this2 = this;

      return artists.map(function (artist, index) {
        if (index + 1 === artists.length) {
          return _react2.default.createElement(
            'span',
            {
              key: index,
              onClick: function onClick() {
                return _this2.navigateToArtistDetailPage(artist.id);
              }
            },
            artist.name
          );
        } else {
          return _react2.default.createElement(
            'span',
            {
              key: index,
              onClick: function onClick() {
                return _this2.navigateToArtistDetailPage(artist.id);
              }
            },
            artist.name + ', '
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var className = void 0;
      if (this.props.showMusicbar) {
        className = 'music-bar display-music-bar';
      } else {
        className = 'music-bar';
      }

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'div',
          { className: 'my-container' },
          _react2.default.createElement(
            'div',
            { className: 'img-info' },
            _react2.default.createElement(
              'div',
              { className: this.state.dropdownClassName },
              _react2.default.createElement(_TrackMenu2.default, {
                privatePlaylists: this.props.privatePlaylists,
                track: this.props.activeTrack,
                setMenuWrapperRef: this.setMenuWrapperRef,
                toggleDropdown: function toggleDropdown() {
                  return _this3.toggleDropdown();
                },
                addTrackToPlaylist: function addTrackToPlaylist(ownerId, playlistId, uri) {
                  return _this3.addTrackToPlaylist(ownerId, playlistId, uri);
                },
                addTrackToQueuedList: function addTrackToQueuedList(track) {
                  return _this3.addTrackToQueuedList(track);
                },
                isMyPlaylist: false
              })
            ),
            _react2.default.createElement('img', {
              src: this.props.activeTrack.id ? this.props.activeTrack.album.images[0].url : null
            }),
            _react2.default.createElement(
              'div',
              { className: 'track-info' },
              _react2.default.createElement(
                'p',
                { className: 'artist-label' },
                this.renderFormattedArtists(this.props.activeTrack.artists)
              ),
              _react2.default.createElement(
                'p',
                {
                  onClick: function onClick() {
                    return _this3.navigateToTrackDetailPage();
                  },
                  className: 'track-title'
                },
                this.props.activeTrack.name
              )
            )
          ),
          _react2.default.createElement(_MusicBarActions2.default, {
            playPreviousTrack: function playPreviousTrack() {
              return _this3.props.playPrevTrack();
            },
            playNextTrack: function playNextTrack() {
              return _this3.props.playNextTrack();
            },
            toggleLoop: function toggleLoop() {
              return _this3.setState({ loop: !_this3.state.loop });
            },
            isLooping: this.state.loop,
            isPlaying: this.props.isPlaying,
            pauseActiveTrack: function pauseActiveTrack() {
              return _this3.props.pauseActiveTrack();
            },
            playActiveTrack: function playActiveTrack() {
              return _this3.props.playActiveTrack();
            },
            isShuffling: this.props.isShuffling,
            toggleShuffle: function toggleShuffle() {
              return _this3.props.toggleShuffle();
            }
          }),
          _react2.default.createElement(
            'div',
            { className: 'fullscreen', onClick: function onClick(e) {
                return _this3.requestFullScreen(e);
              } },
            _react2.default.createElement(
              'span',
              { className: 'icon' },
              _react2.default.createElement('i', { className: 'fa fa-expand', 'aria-hidden': 'true' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'track-running-wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'time-counter' },
              (Math.round(this.state.duration * this.props.playedTime) / 100).toFixed(2)
            ),
            _react2.default.createElement(
              'div',
              { className: 'running-track' },
              _react2.default.createElement('div', {
                style: { width: this.playedTimeColor() },
                className: 'played-color'
              }),
              _react2.default.createElement('div', { className: 'track-color' }),
              _react2.default.createElement('input', {
                type: 'range',
                min: 0,
                max: 1,
                step: 'any',
                value: this.props.playedTime,
                onMouseDown: this.onSeekMouseDown,
                onChange: this.onSeekChange,
                onMouseUp: this.onSeekMouseUp
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'time-duration' },
              (Math.round(this.state.duration) / 100).toFixed(2)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'sound-options' },
            _react2.default.createElement(
              'span',
              { className: 'icon', onClick: function onClick() {
                  return _this3.toggleMuted();
                } },
              !this.state.muted ? _react2.default.createElement('i', { className: 'fa fa-volume-up' }) : _react2.default.createElement('i', { className: 'fa fa-volume-off' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'volume-wrapper' },
              _react2.default.createElement('div', {
                style: { width: this.volumeAmount() },
                className: 'volume-amount-color'
              }),
              _react2.default.createElement('div', { className: 'volume-color' }),
              _react2.default.createElement('input', {
                type: 'range',
                min: 0,
                max: 1,
                step: 'any',
                value: this.state.volume,
                onChange: this.setVolume
              })
            )
          ),
          _react2.default.createElement(_AudioPlayer2.default, {
            isPlaying: this.props.isPlaying,
            muted: this.state.muted,
            volume: this.state.volume,
            url: this.props.activeTrack.preview_url,
            onEnded: this.onEnded,
            onProgress: this.onProgress,
            loop: this.state.loop
          }),
          _react2.default.createElement('canvas', { ref: 'analyzerCanvas', id: 'analyzer' })
        )
      );
    }
  }]);

  return MusicBar;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var track = _ref2.track,
      player = _ref2.player,
      playlist = _ref2.playlist;

  return {
    activeTrack: track.activeTrack,
    isPlaying: player.isPlaying,
    isSeeking: player.isSeeking,
    playedTime: player.playedTime,
    showMusicbar: player.showMusicbar,
    queuedTracklist: track.queuedTracks,
    playingTracklist: track.playingTracklist,
    activeTrackIndex: track.activeTrackIndex,
    latestPlayedTracks: track.latestPlayedTracks,
    privatePlaylists: playlist.privatePlaylists,
    isShuffling: player.isShuffling
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, {
  toggleStartPauseTrack: _player_actions.toggleStartPauseTrack,
  setPlayedTime: _player_actions.setPlayedTime,
  startSeek: _player_actions.startSeek,
  stopSeek: _player_actions.stopSeek,
  changeSeek: _player_actions.changeSeek,
  pauseActiveTrack: _player_actions.pauseActiveTrack,
  playActiveTrack: _player_actions.playActiveTrack,
  zeroPlayedTime: _player_actions.zeroPlayedTime,
  removeTrackFromQueuedTracks: _track_actions.removeTrackFromQueuedTracks,
  setActiveTrack: _track_actions.setActiveTrack,
  setActiveTrackindex: _track_actions.setActiveTrackindex,
  playNextTrack: _player_actions.playNextTrack,
  playPrevTrack: _player_actions.playPrevTrack,
  addTrackToPlaylist: _track_actions.addTrackToPlaylist,
  addTrackToQueuedList: _track_actions.addTrackToQueuedList,
  toggleShuffle: _player_actions.toggleShuffle
})(MusicBar));

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var playPreviousTrack = _ref.playPreviousTrack,
      playNextTrack = _ref.playNextTrack,
      toggleLoop = _ref.toggleLoop,
      isLooping = _ref.isLooping,
      isPlaying = _ref.isPlaying,
      pauseActiveTrack = _ref.pauseActiveTrack,
      playActiveTrack = _ref.playActiveTrack,
      isShuffling = _ref.isShuffling,
      toggleShuffle = _ref.toggleShuffle;

  var renderPlayPauseButton = function renderPlayPauseButton(isPlaying, playActiveTrack, pauseActiveTrack) {
    return isPlaying ? _react2.default.createElement(
      "button",
      { onClick: function onClick() {
          return pauseActiveTrack();
        }, className: "button play-btn" },
      _react2.default.createElement(
        "span",
        { className: "icon" },
        _react2.default.createElement("i", { className: "fa fa-pause" })
      )
    ) : _react2.default.createElement(
      "button",
      { onClick: function onClick() {
          return playActiveTrack();
        }, className: "button play-btn" },
      _react2.default.createElement(
        "span",
        { className: "icon" },
        _react2.default.createElement("i", { className: "fa fa-play" })
      )
    );
  };
  return _react2.default.createElement(
    "div",
    { className: "musicbar-actions" },
    _react2.default.createElement(
      "button",
      {
        onClick: function onClick() {
          return toggleShuffle();
        },
        className: "button step-change-btn"
      },
      _react2.default.createElement(
        "span",
        { className: "icon" },
        isShuffling ? _react2.default.createElement("i", { className: "fa fa-random active", "aria-hidden": "true" }) : _react2.default.createElement("i", { className: "fa fa-random", "aria-hidden": "true" })
      )
    ),
    _react2.default.createElement(
      "button",
      {
        onClick: function onClick() {
          return playPreviousTrack();
        },
        className: "button step-change-btn"
      },
      _react2.default.createElement(
        "span",
        { className: "icon" },
        _react2.default.createElement("i", { className: "fa fa-step-backward" })
      )
    ),
    renderPlayPauseButton(isPlaying, playActiveTrack, pauseActiveTrack),
    _react2.default.createElement(
      "button",
      {
        onClick: function onClick() {
          return playNextTrack();
        },
        className: "button step-change-btn"
      },
      _react2.default.createElement(
        "span",
        { className: "icon" },
        _react2.default.createElement("i", { className: "fa fa-step-forward" })
      )
    ),
    _react2.default.createElement(
      "button",
      { onClick: function onClick() {
          return toggleLoop();
        }, className: "button step-change-btn" },
      _react2.default.createElement(
        "span",
        { className: "icon" },
        isLooping ? _react2.default.createElement("i", { className: "fa fa-retweet active" }) : _react2.default.createElement("i", { className: "fa fa-retweet" })
      )
    )
  );
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _player_actions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Nav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Nav.__proto__ || Object.getPrototypeOf(Nav)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      searchText: '',
      navClassName: 'navbar-start'
    }, _this.onLogout = function () {
      localStorage.removeItem('token');
      _this.props.pauseActiveTrack();
      _this.props.history.replace('/login');
    }, _this.onInputChange = function (e) {
      _this.setState({ searchText: e.target.value }, function () {
        if (_this.state.searchText) {
          setTimeout(function () {
            _this.props.history.push({
              pathname: '/search',
              search: '?q=' + _this.state.searchText.toLowerCase(),
              state: { id: _this.state.searchText.toLowerCase() }
            });
          }, 500);
        } else {
          _this.props.history.push('/');
        }
      });
    }, _this.onSearchSubmit = function (e) {
      e.preventDefault();
      if (_this.state.searchText.length > 0) {
        _this.props.history.push({
          pathname: '/search',
          search: '?q=' + _this.state.searchText.toLowerCase(),
          state: { id: _this.state.searchText.toLowerCase() }
        });
        _this.setState({ searchText: '' });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'nav',
        { className: 'navbar ' },
        _react2.default.createElement(
          'div',
          { className: 'navbar-brand' },
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            {
              className: 'navbar-item',
              to: '/login',
              onClick: function onClick() {
                return _this2.onLogout();
              }
            },
            _react2.default.createElement('img', { src: __webpack_require__(22), alt: 'asasas' })
          ),
          _react2.default.createElement(
            'a',
            {
              className: 'navbar-item is-hidden-desktop',
              href: 'https://github.com/jgthms/bulma',
              target: '_blank'
            },
            _react2.default.createElement(
              'span',
              { className: 'icon' },
              _react2.default.createElement('i', { className: 'fa fa-github' })
            )
          ),
          _react2.default.createElement(
            'a',
            {
              className: 'navbar-item is-hidden-desktop',
              href: 'https://twitter.com/jgthms',
              target: '_blank'
            },
            _react2.default.createElement(
              'span',
              { className: 'icon' },
              _react2.default.createElement('i', { className: 'fa fa-twitter' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'navbar-burger burger', 'data-target': 'navMenubd-example' },
            _react2.default.createElement('span', null),
            _react2.default.createElement('span', null),
            _react2.default.createElement('span', null)
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'navMenubd-example', className: 'navbar-menu' },
          _react2.default.createElement(
            'div',
            {
              onMouseEnter: function onMouseEnter() {
                return _this2.setState({ navClassName: 'navbar-start with-indicator' });
              },
              onMouseLeave: function onMouseLeave() {
                return _this2.setState({ navClassName: 'navbar-start ' });
              },
              className: this.state.navClassName
            },
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              {
                className: 'navbar-item',
                to: '/',
                exact: true,
                activeStyle: { color: '#ff6b42' }
              },
              _react2.default.createElement(
                'span',
                null,
                'Min Musik'
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              {
                className: 'navbar-item',
                to: '/discover',
                activeStyle: { color: '#ff6b42' }
              },
              _react2.default.createElement(
                'span',
                null,
                'Utforska'
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              {
                className: 'navbar-item',
                to: '/new_releases',
                activeStyle: { color: '#ff6b42' }
              },
              _react2.default.createElement(
                'span',
                null,
                'Nytt'
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              {
                className: 'navbar-item',
                to: '/toplists',
                activeStyle: { color: '#ff6b42' }
              },
              _react2.default.createElement(
                'span',
                null,
                'Topplistor'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'navbar-end' },
            _react2.default.createElement(
              'form',
              { onSubmit: this.onSearchSubmit },
              _react2.default.createElement(
                'div',
                { className: 'control has-icons-right' },
                _react2.default.createElement('input', {
                  className: 'input',
                  onChange: this.onInputChange,
                  value: this.state.searchText,
                  type: 'text',
                  placeholder: 'S\xF6k'
                }),
                _react2.default.createElement(
                  'span',
                  {
                    onClick: this.onSearchSubmit,
                    className: 'icon is-small is-right'
                  },
                  _react2.default.createElement('i', { className: 'fa fa-search' })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'navbar-item' },
              this.props.user.id ? _react2.default.createElement(
                'div',
                {
                  className: 'field is-grouped',
                  style: { alignItems: 'center' }
                },
                _react2.default.createElement(
                  'div',
                  { className: 'navbar-item has-dropdown is-hoverable user-nav-dropdown' },
                  _react2.default.createElement('img', { src: this.props.user.images[0].url }),
                  _react2.default.createElement(
                    'a',
                    { className: 'navbar-link user-nav-link' },
                    this.props.user.display_name
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'navbar-dropdown' },
                    _react2.default.createElement(
                      'a',
                      { className: 'navbar-item' },
                      'Profil'
                    ),
                    _react2.default.createElement(
                      'a',
                      {
                        onClick: function onClick() {
                          return _this2.onLogout();
                        },
                        className: 'navbar-item'
                      },
                      'Logga ut'
                    )
                  )
                )
              ) : null
            )
          )
        )
      );
    }
  }]);

  return Nav;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(null, { pauseActiveTrack: _player_actions.pauseActiveTrack })(Nav));

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

var _user_actions = __webpack_require__(5);

var _playlist_actions = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewReleases = function (_Component) {
  _inherits(NewReleases, _Component);

  function NewReleases() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NewReleases);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewReleases.__proto__ || Object.getPrototypeOf(NewReleases)).call.apply(_ref, [this].concat(args))), _this), _this.navigateToDetailPage = function (release) {
      if (release.album_type === 'album') {
        _this.props.history.push('/albums/' + release.id);
      } else {
        console.log(release, 'single');
      }
    }, _this.renderNewReleases = function () {
      return _this.props.newReleases.map(function (release, index) {
        return _react2.default.createElement(
          'li',
          {
            onClick: function onClick() {
              return _this.navigateToDetailPage(release);
            },
            className: 'new-releases-item',
            key: index
          },
          _react2.default.createElement('img', { src: release.images[0].url })
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NewReleases, [{
    key: 'componentDidMount',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.setupAuthToAPI();

              case 2:
                this.props.getNewReleases();

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'new-releases-component' },
        _react2.default.createElement(
          'h1',
          null,
          'Nya releaser'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'new-releases-list' },
          this.renderNewReleases()
        )
      );
    }
  }]);

  return NewReleases;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref3) {
  var playlist = _ref3.playlist;

  return {
    newReleases: playlist.newReleases
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { getNewReleases: _playlist_actions.getNewReleases, setupAuthToAPI: _user_actions.setupAuthToAPI })(NewReleases));

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PieChart = function (_Component) {
  _inherits(PieChart, _Component);

  function PieChart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PieChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PieChart.__proto__ || Object.getPrototypeOf(PieChart)).call.apply(_ref, [this].concat(args))), _this), _this.animateGraph = function (props) {
      var graph = document.querySelector('.' + props.cn),
          text = document.querySelector('.' + props.cnt),
          graphRadius = graph.r.baseVal.value,
          strokeLength = 2 * Math.PI * graphRadius,
          offset = strokeLength,
          stopLength = Math.ceil(strokeLength - strokeLength * props.measure),
          textValue = (1 - offset / strokeLength) * -1;

      function animate() {
        if (offset > stopLength) {
          offset -= 10;
          textValue = Math.floor((1 - offset / strokeLength) * 400);

          graph.style.strokeDashoffset = offset;
          text.textContent = Math.floor(textValue / 4);

          requestAnimationFrame(animate);
        }
      }

      function clear() {
        offset = strokeLength;
        animate();
      }
      setTimeout(animate, 1000);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PieChart, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.measure !== this.props.measure) {
        this.animateGraph(newProps);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        {
          className: 'pieChart',
          width: '70',
          height: '70',
          viewBox: '-10 -10 225 225'
        },
        _react2.default.createElement(
          'filter',
          { className: 'dropShadow' },
          _react2.default.createElement('feGaussianBlur', { 'in': 'SourceAlpha', stdDeviation: '2' }),
          _react2.default.createElement('feOffset', { dx: '1', dy: '2' }),
          _react2.default.createElement(
            'feComponentTransfer',
            null,
            _react2.default.createElement('feFuncA', { type: 'linear', slope: '0.3' })
          ),
          _react2.default.createElement(
            'feMerge',
            null,
            _react2.default.createElement('feMergeNode', null),
            _react2.default.createElement('feMergeNode', { 'in': 'SourceGraphic' })
          )
        ),
        _react2.default.createElement(
          'g',
          { className: 'pie' },
          _react2.default.createElement('circle', {
            className: 'inside',
            r: '100',
            cy: '100',
            cx: '100',
            fill: 'none',
            stroke: '#444444',
            strokeWidth: '20'
          }),
          _react2.default.createElement('circle', {
            id: 'graph',
            className: this.props.cn,
            r: '100',
            cy: '100',
            cx: '100',
            fill: 'none',
            stroke: '#ff6b42',
            strokeWidth: '20'
          }),
          _react2.default.createElement('circle', {
            className: 'inside',
            r: '90',
            cy: '100',
            cx: '100',
            fill: 'none',
            stroke: 'none'
          })
        ),
        _react2.default.createElement(
          'g',
          { className: 'innerText', transform: 'translate(0 13)' },
          _react2.default.createElement(
            'text',
            { fill: 'white', className: this.props.cnt, x: '50', y: '95' },
            '0'
          ),
          _react2.default.createElement(
            'text',
            { fill: 'white', x: '110', y: '95' },
            '%'
          )
        )
      );
    }
  }]);

  return PieChart;
}(_react.Component);

PieChart.propTypes = {
  cnt: _propTypes2.default.string.isRequired,
  cn: _propTypes2.default.string.isRequired,
  measure: _propTypes2.default.number
};

exports.default = PieChart;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _user_actions = __webpack_require__(5);

var _playlist_actions = __webpack_require__(7);

var _track_actions = __webpack_require__(3);

var _Tracklist = __webpack_require__(19);

var _Tracklist2 = _interopRequireDefault(_Tracklist);

var _Loading = __webpack_require__(20);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlaylistDetail = function (_Component) {
  _inherits(PlaylistDetail, _Component);

  function PlaylistDetail() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, PlaylistDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PlaylistDetail.__proto__ || Object.getPrototypeOf(PlaylistDetail)).call.apply(_ref, [this].concat(args))), _this), _this.setActivePlaylist = function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ownerId, playlistId) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.props.setActivePlaylist(playlistId);
                _context.next = 3;
                return _this.props.setActiveTracklist(ownerId, playlistId);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.renderTracklist = function () {
      if (_this.props.activeTracklist) {
        return _react2.default.createElement(_Tracklist2.default, null);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PlaylistDetail, [{
    key: 'componentDidMount',
    value: function () {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                window.scroll(0, 0);
                _context2.next = 3;
                return this.props.setupAuthToAPI();

              case 3:
                this.setActivePlaylist(this.props.match.params.user, this.props.match.params.id);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref3.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'columns' },
        _react2.default.createElement(
          'button',
          {
            onClick: function onClick() {
              return _this3.props.history.goBack();
            },
            className: 'go-back-button'
          },
          _react2.default.createElement('i', { className: 'fa fa-chevron-left', 'aria-hidden': 'true' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'column is-6 tracklist' },
          this.renderTracklist()
        )
      );
    }
  }]);

  return PlaylistDetail;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref4) {
  var track = _ref4.track;

  return { activeTracklist: track.activeTracklist };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, {
  setActiveTracklist: _track_actions.setActiveTracklist,
  setActivePlaylist: _playlist_actions.setActivePlaylist,
  setupAuthToAPI: _user_actions.setupAuthToAPI
})(PlaylistDetail));

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(1);

var _playlist_actions = __webpack_require__(7);

var _track_actions = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Playlists = function (_Component) {
  _inherits(Playlists, _Component);

  function Playlists() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Playlists);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Playlists.__proto__ || Object.getPrototypeOf(Playlists)).call.apply(_ref, [this].concat(args))), _this), _this.setActivePlaylist = function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ownerId, playlistId) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.props.setActivePlaylist(playlistId);
                _context.next = 3;
                return _this.props.setActiveTracklist(ownerId, playlistId);

              case 3:
                window.scrollTo(0, 0);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Playlists, [{
    key: 'renderPlaylists',
    value: function renderPlaylists(playlists) {
      var _this3 = this;

      return playlists.map(function (playlist) {
        var className = void 0;
        if (playlist.id === _this3.props.activePlaylistId) {
          className = 'tooltip active';
        } else {
          className = 'tooltip';
        }
        return _react2.default.createElement(
          'li',
          {
            className: className,
            key: playlist.id,
            onClick: function onClick() {
              return _this3.setActivePlaylist(playlist.owner.id, playlist.id);
            }
          },
          _react2.default.createElement(
            'a',
            null,
            _react2.default.createElement('img', { src: playlist.images[0] ? playlist.images[0].url : null }),
            _react2.default.createElement(
              'span',
              { className: 'playlist-name' },
              playlist.name
            ),
            _this3.props.isPlaying && _this3.props.playingPlaylist.id === playlist.id ? _react2.default.createElement('i', { className: 'fa fa-volume-up', 'aria-hidden': 'true' }) : null,
            _react2.default.createElement(
              'span',
              { className: 'tooltiptext' },
              playlist.owner.display_name || playlist.owner.id
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'aside',
        { className: 'menu' },
        _react2.default.createElement(
          'p',
          { className: 'menu-label top-label' },
          _react2.default.createElement(
            'span',
            null,
            'Mina Spellistor'
          ),
          _react2.default.createElement('i', {
            onClick: function onClick() {
              return _this4.props.onOpenCreatePlaylistModal();
            },
            className: 'fa fa-plus',
            'aria-hidden': 'true'
          })
        ),
        _react2.default.createElement(
          'ul',
          { className: 'menu-list my-playlists invisible-scrollbar' },
          this.props.playlists ? this.renderPlaylists(this.props.playlists) : null
        ),
        _react2.default.createElement(
          'p',
          {
            className: 'menu-label',
            style: { marginTop: '30px', marginBottom: '10px' }
          },
          'Spellistor f\xF6r dig'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'menu-list featured-playlists' },
          this.props.featuredPlaylists ? this.renderPlaylists(this.props.featuredPlaylists) : null
        )
      );
    }
  }]);

  return Playlists;
}(_react.Component);

Playlists.propTypes = {
  onOpenCreatePlaylistModal: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(_ref3) {
  var user = _ref3.user,
      playlist = _ref3.playlist,
      track = _ref3.track,
      player = _ref3.player;

  return {
    user: user.user,
    playlists: playlist.playlists,
    featuredPlaylists: playlist.featuredPlaylists,
    activePlaylistId: playlist.activePlaylistId,
    playingPlaylist: track.playingTracklist,
    isPlaying: player.isPlaying
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  setActivePlaylist: _playlist_actions.setActivePlaylist,
  setActiveTracklist: _track_actions.setActiveTracklist
})(Playlists);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

var _category_actions = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toplists = function (_Component) {
  _inherits(Toplists, _Component);

  function Toplists() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Toplists);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toplists.__proto__ || Object.getPrototypeOf(Toplists)).call.apply(_ref, [this].concat(args))), _this), _this.navigateToPlaylist = function (userId, playlistId) {
      _this.props.history.push('/playlists/' + userId + '/' + playlistId);
    }, _this.renderToplists = function () {
      return _this.props.toplists.map(function (playlist, index) {
        return _react2.default.createElement(
          'li',
          {
            onClick: function onClick() {
              return _this.navigateToPlaylist(playlist.owner.id, playlist.id);
            },
            className: 'toplists-item',
            key: index
          },
          _react2.default.createElement('img', { src: playlist.images[0].url })
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toplists, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getActiveCategoryPlaylists('toplists');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'toplists-component ' },
        _react2.default.createElement(
          'h1',
          null,
          'Topplistor'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'toplists-list' },
          this.renderToplists()
        )
      );
    }
  }]);

  return Toplists;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var categories = _ref2.categories;

  return {
    toplists: categories.activeCategoryPlaylists
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { getActiveCategoryPlaylists: _category_actions.getActiveCategoryPlaylists })(Toplists));

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _PieChart = __webpack_require__(40);

var _PieChart2 = _interopRequireDefault(_PieChart);

var _AddTrackToPlaylistModal = __webpack_require__(48);

var _AddTrackToPlaylistModal2 = _interopRequireDefault(_AddTrackToPlaylistModal);

var _user_actions = __webpack_require__(5);

var _track_actions = __webpack_require__(3);

var _player_actions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrackDetail = function (_Component) {
  _inherits(TrackDetail, _Component);

  function TrackDetail() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, TrackDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TrackDetail.__proto__ || Object.getPrototypeOf(TrackDetail)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      modalClassName: 'modal create-playlist-modal'
    }, _this.createVisuals = function (wavesurfer) {
      wavesurfer.load(_this.props.trackDetail.preview_url);
      wavesurfer.on('ready', function () {
        var canvasWave = document.getElementById('waveform').childNodes[0].childNodes[1];
        var width = '1300px';
        canvasWave.style.maxWidth = width;
        var ctx = canvasWave.getContext('2d');
      });
    }, _this.closeModal = function () {
      _this.setState({ modalClassName: 'modal create-playlist-modal' });
    }, _this.openModal = function () {
      _this.setState({ modalClassName: 'modal create-playlist-modal is-active' });
    }, _this.navigateToArtistDetailPage = function (id) {
      _this.props.history.push('/artists/' + id);
    }, _this.renderFormattedArtists = function (artists) {
      return artists.map(function (artist, index) {
        if (index + 1 === artists.length) {
          return _react2.default.createElement(
            'h2',
            {
              key: index,
              onClick: function onClick() {
                return _this.navigateToArtistDetailPage(artist.id);
              }
            },
            artist.name
          );
        } else {
          return _react2.default.createElement(
            'h2',
            {
              key: index,
              onClick: function onClick() {
                return _this.navigateToArtistDetailPage(artist.id);
              }
            },
            artist.name + ', '
          );
        }
      });
    }, _this.renderKey = function (key) {
      switch (key) {
        case 0:
          return 'C';
        case 1:
          return 'C#';
        case 2:
          return 'D';
        case 3:
          return 'D#';
        case 4:
          return 'E';
        case 5:
          return 'F';
        case 6:
          return 'F#';
        case 7:
          return 'G';
        case 8:
          return 'G#';
        case 9:
          return 'A';
        case 10:
          return 'A#';
        case 11:
          return 'B';
      }
    }, _this.startTrack = function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(track) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(track.id === _this.props.activeTrack.id)) {
                  _context.next = 4;
                  break;
                }

                _this.props.playActiveTrack();
                _context.next = 7;
                break;

              case 4:
                _context.next = 6;
                return _this.props.setActiveTrack(track);

              case 6:
                _this.props.playActiveTrack();

              case 7:
                _this.props.showMusicbar();

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.addTrackToPlaylists = function (playlists) {
      playlists.map(function (playlist) {
        _this.props.addTrackToPlaylist(playlist.ownerId, playlist.playlistId, _this.props.trackDetail.uri);
      });
    }, _this.renderStartStopButton = function (track) {
      if (track.preview_url !== null) {
        return _this.props.isPlaying && _this.props.activeTrack.id === track.id ? _react2.default.createElement(
          'button',
          {
            onClick: function onClick() {
              return _this.props.pauseActiveTrack();
            },
            className: 'button'
          },
          'Pause'
        ) : _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return _this.startTrack(track);
            }, className: 'button' },
          'Play'
        );
      } else {
        return _react2.default.createElement(
          'button',
          { className: 'button' },
          'Broken link :('
        );
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TrackDetail, [{
    key: 'componentWillMount',
    value: function () {
      var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                window.scroll(0, 0);
                _context2.next = 3;
                return this.props.setupAuthToAPI();

              case 3:
                this.props.getTrackDetail(this.props.match.params.id);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillMount() {
        return _ref3.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      var wavesurfer = WaveSurfer.create({
        container: '#waveform',
        height: 200,
        interact: false,
        waveColor: '#444444',
        hideScrollbar: true
      });
      this.unlisten = this.props.history.listen(function () {
        var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(location, action) {
          var incID, word;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  incID = location.pathname.slice(8);
                  word = location.pathname.slice(1, 7);

                  if (!(incID && word == 'tracks')) {
                    _context3.next = 7;
                    break;
                  }

                  if (!(incID !== _this3.props.match.params.id)) {
                    _context3.next = 7;
                    break;
                  }

                  _context3.next = 6;
                  return _this3.props.getTrackDetail(incID);

                case 6:
                  _this3.createVisuals(wavesurfer);

                case 7:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this3);
        }));

        return function (_x2, _x3) {
          return _ref4.apply(this, arguments);
        };
      }());
      this.createVisuals(wavesurfer);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unlisten();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var trackDetail = this.props.trackDetail;

      return _react2.default.createElement(
        'div',
        { className: 'track-detail-component' },
        _react2.default.createElement(
          'div',
          { className: 'track-header' },
          _react2.default.createElement(
            'div',
            { className: 'track-art-wrapper' },
            _react2.default.createElement('img', {
              className: 'track-art',
              src: trackDetail.album.images ? trackDetail.album.images[0].url : 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif'
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'track-info-details' },
            _react2.default.createElement(
              'div',
              { className: 'track-names' },
              _react2.default.createElement(
                'div',
                { className: 'track-artists' },
                trackDetail.artists ? this.renderFormattedArtists(trackDetail.artists) : null
              ),
              _react2.default.createElement(
                'h1',
                null,
                trackDetail.name
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'track-character' },
              _react2.default.createElement(
                'p',
                null,
                'BPM: ',
                _react2.default.createElement(
                  'span',
                  null,
                  Math.round(trackDetail.tempo || 0)
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                'Key:',
                ' ',
                _react2.default.createElement(
                  'span',
                  null,
                  this.renderKey(trackDetail.key),
                  ' ',
                  trackDetail.mode == 0 ? 'minor' : 'major'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'track-measurements' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'p',
                  null,
                  'Acousticness'
                ),
                _react2.default.createElement(_PieChart2.default, {
                  measure: trackDetail.acousticness,
                  cn: 'graph-one',
                  cnt: 'updated-text-one'
                })
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'p',
                  null,
                  'Danceability'
                ),
                _react2.default.createElement(_PieChart2.default, {
                  measure: trackDetail.danceability,
                  cn: 'graph-two',
                  cnt: 'updated-text-two'
                })
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'p',
                  null,
                  'Energy'
                ),
                _react2.default.createElement(_PieChart2.default, {
                  measure: trackDetail.energy,
                  cn: 'graph-three',
                  cnt: 'updated-text-three'
                })
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'p',
                  null,
                  'Instrumentalness'
                ),
                _react2.default.createElement(_PieChart2.default, {
                  measure: trackDetail.instrumentalness,
                  cn: 'graph-four',
                  cnt: 'updated-text-four'
                })
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'p',
                  null,
                  'Speechiness'
                ),
                _react2.default.createElement(_PieChart2.default, {
                  measure: trackDetail.speechiness,
                  cn: 'graph-five',
                  cnt: 'updated-text-five'
                })
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'p',
                  null,
                  'Valence'
                ),
                _react2.default.createElement(_PieChart2.default, {
                  measure: trackDetail.valence,
                  cn: 'graph-six',
                  cnt: 'updated-text-six'
                })
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'track-player-view' },
          _react2.default.createElement(
            'div',
            { className: 'track-player-options' },
            this.renderStartStopButton(trackDetail),
            _react2.default.createElement(
              'button',
              { className: 'button', onClick: function onClick() {
                  return _this4.openModal();
                } },
              'Add to playlist'
            ),
            _react2.default.createElement(
              'button',
              {
                className: 'button',
                onClick: function onClick() {
                  return _this4.props.addTrackToQueuedList(trackDetail);
                }
              },
              'Queue'
            )
          ),
          _react2.default.createElement('div', { id: 'waveform' }),
          _react2.default.createElement(
            'div',
            { className: this.state.modalClassName },
            _react2.default.createElement(_AddTrackToPlaylistModal2.default, {
              addTrackToPlaylists: this.addTrackToPlaylists,
              closeModal: this.closeModal,
              privatePlaylists: this.props.privatePlaylists
            })
          )
        )
      );
    }
  }]);

  return TrackDetail;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref5) {
  var track = _ref5.track,
      player = _ref5.player,
      playlist = _ref5.playlist;

  return {
    trackDetail: track.trackDetail,
    isPlaying: player.isPlaying,
    activeTrack: track.activeTrack,
    playedTime: player.playedTime,
    privatePlaylists: playlist.privatePlaylists || []
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, {
  setupAuthToAPI: _user_actions.setupAuthToAPI,
  getTrackDetail: _track_actions.getTrackDetail,
  setActiveTrack: _track_actions.setActiveTrack,
  pauseActiveTrack: _player_actions.pauseActiveTrack,
  playActiveTrack: _player_actions.playActiveTrack,
  showMusicbar: _player_actions.showMusicbar,
  addTrackToQueuedList: _track_actions.addTrackToQueuedList,
  addTrackToPlaylist: _track_actions.addTrackToPlaylist
})(TrackDetail));

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TracklistBanner = function (_Component) {
  _inherits(TracklistBanner, _Component);

  function TracklistBanner() {
    _classCallCheck(this, TracklistBanner);

    return _possibleConstructorReturn(this, (TracklistBanner.__proto__ || Object.getPrototypeOf(TracklistBanner)).apply(this, arguments));
  }

  _createClass(TracklistBanner, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'tracklist-banner effect8' },
        _react2.default.createElement(
          'div',
          { className: 'tracklist-banner-info' },
          _react2.default.createElement(
            'div',
            { className: 'large-info' },
            _react2.default.createElement(
              'p',
              { className: 'menu-label' },
              'Spellista'
            ),
            _react2.default.createElement(
              'p',
              { className: 'tracklist-name title' },
              this.props.activeTracklist.name ? this.props.activeTracklist.name : 'Låtar'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'tracklist-banner-info-lower' },
            _react2.default.createElement(
              'div',
              { className: 'small-info' },
              _react2.default.createElement(
                'p',
                null,
                'F\xF6ljare:',
                ' ',
                this.props.activeTracklist.followers ? this.props.activeTracklist.followers.total : '0'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Skapad av:',
                ' ',
                this.props.activeTracklist.owner ? this.props.activeTracklist.owner.display_name || this.props.activeTracklist.owner.id : 'Okänd',
                ' '
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'tracklist-banner-btn-group' },
              this.props.playingTracklistId !== this.props.activeTracklist.id ? _react2.default.createElement(
                'button',
                {
                  onClick: function onClick() {
                    return _this2.props.playActiveTracklist();
                  },
                  className: 'button is-outlined'
                },
                'Spela Upp'
              ) : this.props.isPlaying === false ? _react2.default.createElement(
                'button',
                {
                  onClick: function onClick() {
                    return _this2.props.playActiveTracklist();
                  },
                  className: 'button is-outlined'
                },
                'Spela Upp'
              ) : _react2.default.createElement(
                'button',
                {
                  onClick: function onClick() {
                    return _this2.props.stopActiveTrack();
                  },
                  className: 'button is-outlined'
                },
                'Pausa'
              ),
              this.props.activeTracklist.owner.id === this.props.userId ? _react2.default.createElement(
                'button',
                {
                  onClick: function onClick() {
                    return _this2.props.showDeleteModal();
                  },
                  className: 'button'
                },
                'Radera'
              ) : this.props.checkFollowStatusOnPlaylist(this.props.activeTracklist.id) ? _react2.default.createElement(
                'button',
                {
                  onClick: function onClick() {
                    return _this2.props.showUnfollowModal();
                  },
                  className: 'button'
                },
                'Sluta f\xF6lj'
              ) : _react2.default.createElement(
                'button',
                {
                  onClick: function onClick() {
                    return _this2.props.followActivePlaylist();
                  },
                  className: 'button'
                },
                'F\xF6lj'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'tracklist-img' },
          this.props.activeTracklist.images ? _react2.default.createElement('img', {
            src: this.props.activeTracklist.images.length > 0 ? this.props.activeTracklist.images[0].url : null
          }) : null
        )
      );
    }
  }]);

  return TracklistBanner;
}(_react.Component);

TracklistBanner.propTypes = {
  activeTracklist: _propTypes2.default.object,
  isPlaying: _propTypes2.default.bool,
  playingTracklistId: _propTypes2.default.string,
  playActiveTracklist: _propTypes2.default.func.isRequired,
  stopActiveTrack: _propTypes2.default.func.isRequired,
  showDeleteModal: _propTypes2.default.func.isRequired,
  checkFollowStatusOnPlaylist: _propTypes2.default.func.isRequired,
  showUnfollowModal: _propTypes2.default.func.isRequired,
  followActivePlaylist: _propTypes2.default.func.isRequired
};

exports.default = TracklistBanner;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TracklistBannerScroll = function (_Component) {
  _inherits(TracklistBannerScroll, _Component);

  function TracklistBannerScroll() {
    _classCallCheck(this, TracklistBannerScroll);

    return _possibleConstructorReturn(this, (TracklistBannerScroll.__proto__ || Object.getPrototypeOf(TracklistBannerScroll)).apply(this, arguments));
  }

  _createClass(TracklistBannerScroll, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'tracklist-scroll-banner effect1' },
        _react2.default.createElement(
          'div',
          { className: 'tracklist-name title' },
          _react2.default.createElement(
            'div',
            { onClick: function onClick() {
                return window.scroll(0, 0);
              } },
            this.props.activeTracklist.name
          ),
          _react2.default.createElement(
            'span',
            null,
            this.props.activeTracklist.owner.display_name ? this.props.activeTracklist.owner.display_name : this.props.activeTracklist.owner.id
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'tracklist-scroll-banner-right-grp' },
          _react2.default.createElement(
            'div',
            { className: 'tracklist-scroll-btn-grp' },
            this.props.playingTracklistId !== this.props.activeTracklist.id ? _react2.default.createElement(
              'button',
              {
                onClick: function onClick() {
                  return _this2.props.playActiveTracklist();
                },
                className: 'button is-outlined'
              },
              _react2.default.createElement('i', { className: 'fa fa-play' })
            ) : this.props.isPlaying === false ? _react2.default.createElement(
              'button',
              {
                onClick: function onClick() {
                  return _this2.props.playActiveTracklist();
                },
                className: 'button is-outlined'
              },
              _react2.default.createElement('i', { className: 'fa fa-play' })
            ) : _react2.default.createElement(
              'button',
              {
                onClick: function onClick() {
                  return _this2.props.stopActiveTrack();
                },
                className: 'button is-outlined'
              },
              _react2.default.createElement('i', { className: 'fa fa-pause' })
            ),
            _react2.default.createElement(
              'button',
              {
                onClick: function onClick() {
                  return _this2.props.showDeleteModal();
                },
                className: 'button'
              },
              _react2.default.createElement(
                'span',
                { className: 'icon' },
                _react2.default.createElement('i', { className: 'fa fa-remove' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'tracklist-scroll-img' },
            this.props.activeTracklist.images ? _react2.default.createElement('img', {
              src: this.props.activeTracklist.images.length > 0 ? this.props.activeTracklist.images[0].url : null
            }) : null
          )
        )
      );
    }
  }]);

  return TracklistBannerScroll;
}(_react.Component);

TracklistBannerScroll.propTypes = {
  activeTracklist: _propTypes2.default.object,
  isPlaying: _propTypes2.default.bool,
  playingTracklistId: _propTypes2.default.string,
  playActiveTracklist: _propTypes2.default.func.isRequired,
  stopActiveTrack: _propTypes2.default.func.isRequired,
  showDeleteModal: _propTypes2.default.func.isRequired
};

exports.default = TracklistBannerScroll;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

var _user_actions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent) {
  var RequireAuth = function (_Component) {
    _inherits(RequireAuth, _Component);

    function RequireAuth() {
      _classCallCheck(this, RequireAuth);

      return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
    }

    _createClass(RequireAuth, [{
      key: 'componentDidMount',
      value: function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.props.setupAuthToAPI();

                case 2:
                  _context.next = 4;
                  return this.props.getCurrentUser();

                case 4:
                  console.log(this.props.user);

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function componentDidMount() {
          return _ref.apply(this, arguments);
        }

        return componentDidMount;
      }()
    }, {
      key: 'render',
      value: function render() {
        if (this.props.user === false) {
          console.log('Not authorized');
          return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
        } else if (typeof this.props.user === 'string') {
          return _react2.default.createElement(
            'div',
            null,
            'Loading...'
          );
        } else if (!this.props.user) {
          console.log('Not authorized');
          return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
        } else {
          return _react2.default.createElement(ChildComponent, this.props);
        }
      }
    }]);

    return RequireAuth;
  }(_react.Component);

  function mapStateToProps(_ref2) {
    var user = _ref2.user;

    return { user: user.user };
  }

  return (0, _reactRedux.connect)(mapStateToProps, { getCurrentUser: _user_actions.getCurrentUser, setupAuthToAPI: _user_actions.setupAuthToAPI })(RequireAuth);
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddTrackToPlaylistModal = function (_Component) {
  _inherits(AddTrackToPlaylistModal, _Component);

  function AddTrackToPlaylistModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddTrackToPlaylistModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddTrackToPlaylistModal.__proto__ || Object.getPrototypeOf(AddTrackToPlaylistModal)).call.apply(_ref, [this].concat(args))), _this), _this.prepareCloseModal = function () {
      var checkedBoxes = document.querySelectorAll('input[name=checkbox]:checked');
      checkedBoxes.forEach(function (input) {
        input.checked = false;
      });
      _this.props.closeModal();
    }, _this.addTrackToPlaylist = function () {
      var checkedBoxes = document.querySelectorAll('input[name=checkbox]:checked');
      var playlistsId = [];
      checkedBoxes.forEach(function (input) {
        playlistsId.push({
          playlistId: input.dataset.id,
          ownerId: input.dataset.owner
        });
      });
      if (playlistsId.length > 0) {
        _this.props.addTrackToPlaylists(playlistsId);
        _this.prepareCloseModal();
      }
    }, _this.renderPlaylists = function (playlists) {
      return playlists.map(function (playlist, index) {
        return _react2.default.createElement(
          'li',
          { key: index },
          _react2.default.createElement(
            'p',
            null,
            playlist.name
          ),
          _react2.default.createElement('input', {
            type: 'checkbox',
            'data-id': playlist.id,
            'data-owner': playlist.owner.id,
            name: 'checkbox'
          })
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddTrackToPlaylistModal, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'add-track-to-playlist-modal' },
        _react2.default.createElement('div', {
          onClick: function onClick() {
            return _this2.prepareCloseModal();
          },
          className: 'modal-background'
        }),
        _react2.default.createElement(
          'div',
          { className: 'modal-content' },
          _react2.default.createElement(
            'h1',
            { className: 'title' },
            'Add track to playlists'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'playlist-menu' },
            this.renderPlaylists(this.props.privatePlaylists)
          ),
          _react2.default.createElement(
            'div',
            { className: 'field is-grouped is-grouped-centered' },
            _react2.default.createElement(
              'p',
              { className: 'control' },
              _react2.default.createElement(
                'a',
                {
                  onClick: function onClick() {
                    return _this2.prepareCloseModal();
                  },
                  className: 'button is-light'
                },
                'Avbryt'
              )
            ),
            _react2.default.createElement(
              'p',
              { className: 'control' },
              _react2.default.createElement(
                'a',
                {
                  onClick: function onClick() {
                    return _this2.addTrackToPlaylist();
                  },
                  className: 'button is-primary'
                },
                'Skapa'
              )
            )
          )
        ),
        _react2.default.createElement('button', {
          onClick: function onClick() {
            return _this2.prepareCloseModal();
          },
          className: 'modal-close is-large',
          'aria-label': 'close'
        })
      );
    }
  }]);

  return AddTrackToPlaylistModal;
}(_react.Component);

exports.default = AddTrackToPlaylistModal;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateNewPlaylistModal = function (_Component) {
  _inherits(CreateNewPlaylistModal, _Component);

  function CreateNewPlaylistModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CreateNewPlaylistModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CreateNewPlaylistModal.__proto__ || Object.getPrototypeOf(CreateNewPlaylistModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: '',
      desc: ''
    }, _this.prepareCloseModal = function () {
      _this.setState({ name: '', desc: '' });
      _this.props.closeModal();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CreateNewPlaylistModal, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', {
          onClick: function onClick() {
            return _this2.prepareCloseModal();
          },
          className: 'modal-background'
        }),
        _react2.default.createElement(
          'div',
          { className: 'modal-content' },
          _react2.default.createElement(
            'h1',
            { className: 'title' },
            'Ny spellista'
          ),
          _react2.default.createElement(
            'div',
            { className: 'field' },
            _react2.default.createElement(
              'label',
              { className: 'label' },
              'Namn'
            ),
            _react2.default.createElement(
              'div',
              { className: 'control' },
              _react2.default.createElement('input', {
                onChange: function onChange(e) {
                  return _this2.setState({ name: e.target.value });
                },
                value: this.state.name,
                className: 'input',
                type: 'text',
                placeholder: 'Ny spellista'
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'field' },
            _react2.default.createElement(
              'label',
              { className: 'label' },
              'Beskrivning'
            ),
            _react2.default.createElement(
              'div',
              { className: 'control' },
              _react2.default.createElement('textarea', {
                onChange: function onChange(e) {
                  return _this2.setState({ desc: e.target.value });
                },
                value: this.state.desc,
                className: 'textarea',
                placeholder: 'Min favorit spellista'
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'field is-grouped is-grouped-centered' },
            _react2.default.createElement(
              'p',
              { className: 'control' },
              _react2.default.createElement(
                'a',
                {
                  onClick: function onClick() {
                    return _this2.prepareCloseModal();
                  },
                  className: 'button is-light'
                },
                'Avbryt'
              )
            ),
            _react2.default.createElement(
              'p',
              { className: 'control' },
              _react2.default.createElement(
                'a',
                {
                  onClick: function onClick() {
                    return _this2.props.createPlaylist(_this2.state.name, _this2.state.desc);
                  },
                  className: 'button is-primary'
                },
                'Skapa'
              )
            )
          )
        ),
        _react2.default.createElement('button', {
          onClick: function onClick() {
            return _this2.prepareCloseModal();
          },
          className: 'modal-close is-large',
          'aria-label': 'close'
        })
      );
    }
  }]);

  return CreateNewPlaylistModal;
}(_react.Component);

exports.default = CreateNewPlaylistModal;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeletePlaylistModal = function (_Component) {
  _inherits(DeletePlaylistModal, _Component);

  function DeletePlaylistModal() {
    _classCallCheck(this, DeletePlaylistModal);

    return _possibleConstructorReturn(this, (DeletePlaylistModal.__proto__ || Object.getPrototypeOf(DeletePlaylistModal)).apply(this, arguments));
  }

  _createClass(DeletePlaylistModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("div", {
          onClick: function onClick() {
            return _this2.props.closeModal();
          },
          className: "modal-background"
        }),
        _react2.default.createElement(
          "div",
          { className: "modal-content" },
          _react2.default.createElement(
            "h1",
            { className: "title" },
            "Radera Spellista"
          ),
          _react2.default.createElement(
            "p",
            {
              style: {
                textAlign: 'center',
                margin: '30px 0px',
                fontSize: '16px'
              }
            },
            "\xC4r du s\xE4ker p\xE5 att du vill radera denna spellista?"
          ),
          _react2.default.createElement(
            "div",
            { className: "field is-grouped is-grouped-centered" },
            _react2.default.createElement(
              "p",
              { className: "control" },
              _react2.default.createElement(
                "a",
                {
                  onClick: function onClick() {
                    return _this2.props.closeModal();
                  },
                  className: "button is-light"
                },
                "Avbryt"
              )
            ),
            _react2.default.createElement(
              "p",
              { className: "control" },
              _react2.default.createElement(
                "a",
                {
                  onClick: function onClick() {
                    return _this2.props.deletePlaylist();
                  },
                  className: "button is-primary"
                },
                "Radera"
              )
            )
          )
        ),
        _react2.default.createElement("button", {
          onClick: function onClick() {
            return _this2.props.closeModal();
          },
          className: "modal-close is-large",
          "aria-label": "close"
        })
      );
    }
  }]);

  return DeletePlaylistModal;
}(_react.Component);

exports.default = DeletePlaylistModal;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnfollowPlaylistModal = function (_Component) {
  _inherits(UnfollowPlaylistModal, _Component);

  function UnfollowPlaylistModal() {
    _classCallCheck(this, UnfollowPlaylistModal);

    return _possibleConstructorReturn(this, (UnfollowPlaylistModal.__proto__ || Object.getPrototypeOf(UnfollowPlaylistModal)).apply(this, arguments));
  }

  _createClass(UnfollowPlaylistModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("div", {
          onClick: function onClick() {
            return _this2.props.closeModal();
          },
          className: "modal-background"
        }),
        _react2.default.createElement(
          "div",
          { className: "modal-content" },
          _react2.default.createElement(
            "h1",
            { className: "title" },
            "Sluta F\xF6lj Spellista"
          ),
          _react2.default.createElement(
            "p",
            {
              style: {
                textAlign: 'center',
                margin: '30px 0px',
                fontSize: '16px'
              }
            },
            "\xC4r du s\xE4ker p\xE5 att du vill sluta f\xF6lja denna spellista?"
          ),
          _react2.default.createElement(
            "div",
            { className: "field is-grouped is-grouped-centered" },
            _react2.default.createElement(
              "p",
              { className: "control" },
              _react2.default.createElement(
                "a",
                {
                  onClick: function onClick() {
                    return _this2.props.closeModal();
                  },
                  className: "button is-light"
                },
                "Avbryt"
              )
            ),
            _react2.default.createElement(
              "p",
              { className: "control" },
              _react2.default.createElement(
                "a",
                {
                  onClick: function onClick() {
                    return _this2.props.unfollowPlaylist();
                  },
                  className: "button is-primary"
                },
                "Sluta f\xF6lj"
              )
            )
          )
        ),
        _react2.default.createElement("button", {
          onClick: function onClick() {
            return _this2.props.closeModal();
          },
          className: "modal-close is-large",
          "aria-label": "close"
        })
      );
    }
  }]);

  return UnfollowPlaylistModal;
}(_react.Component);

exports.default = UnfollowPlaylistModal;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(66);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(11);

var _serializeJavascript = __webpack_require__(71);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _routes = __webpack_require__(21);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_routes2.default)
      )
    )
  ));

  return '\n    <html>\n      <head>\n        <meta charset="utf-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.1/css/bulma.min.css">\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">\n        <title>Soundize</title>\n      </head>\n      <body>\n        <noscript>\n          You need to enable JavaScript to run this app.\n        </noscript>\n        <div id="root">' + content + '</div>\n        <script>\n          window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n        </script>\n        <script src="client.js"></script>\n        <script src="//cdnjs.cloudflare.com/ajax/libs/wavesurfer.js/1.4.0/wavesurfer.min.js"></script>\n      </body>\n    </html>\n    ';
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(24);

var _reduxThunk = __webpack_require__(69);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPersist = __webpack_require__(68);

var _reducers = __webpack_require__(57);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default)));

  return store;
};

// autoRehydrate() into compose if you want to save store

/* Lägg till whitelist: ['someReducer'] i options objektet nedan, om vi ska spara nått specifikt i localstorage/Asyncstorage */
// persistStore(store, { storage: AsyncStorage }) // chain on '.purge()' to clear async

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _album_actions = __webpack_require__(12);

var INITIAL_STATE = {
  album: {}
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _album_actions.SET_ALBUM:
      return _extends({}, state, { album: action.payload });

    default:
      return state;
  }
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _artist_actions = __webpack_require__(14);

var INITIAL_STATE = {
  artist: {},
  albums: [],
  topTracks: [],
  relatedArtists: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _artist_actions.SET_ARTIST:
      return _extends({}, state, { artist: action.payload });

    case _artist_actions.SET_ARTIST_ALBUMS:
      return _extends({}, state, { albums: action.payload });

    case _artist_actions.SET_ARTIST_TOP_TRACKS:
      return _extends({}, state, { topTracks: action.payload });

    case _artist_actions.SET_ARTIST_RELATED_ARTISTS:
      return _extends({}, state, { relatedArtists: action.payload });

    default:
      return state;
  }
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _category_actions = __webpack_require__(9);

var INITIAL_STATE = {
  categories: [],
  activeCategoryPlaylists: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _category_actions.SET_CATEGORIES:
      return _extends({}, state, { categories: action.payload });

    case _category_actions.SET_ACTIVE_CATEGORY_PLAYLISTS:
      return _extends({}, state, { activeCategoryPlaylists: action.payload });

    default:
      return state;
  }
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(24);

var _playlist_reducer = __webpack_require__(59);

var _playlist_reducer2 = _interopRequireDefault(_playlist_reducer);

var _track_reducer = __webpack_require__(61);

var _track_reducer2 = _interopRequireDefault(_track_reducer);

var _user_reducer = __webpack_require__(62);

var _user_reducer2 = _interopRequireDefault(_user_reducer);

var _player_reducer = __webpack_require__(58);

var _player_reducer2 = _interopRequireDefault(_player_reducer);

var _category_reducer = __webpack_require__(56);

var _category_reducer2 = _interopRequireDefault(_category_reducer);

var _search_reducer = __webpack_require__(60);

var _search_reducer2 = _interopRequireDefault(_search_reducer);

var _album_reducer = __webpack_require__(54);

var _album_reducer2 = _interopRequireDefault(_album_reducer);

var _artist_reducer = __webpack_require__(55);

var _artist_reducer2 = _interopRequireDefault(_artist_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  playlist: _playlist_reducer2.default,
  track: _track_reducer2.default,
  user: _user_reducer2.default,
  player: _player_reducer2.default,
  categories: _category_reducer2.default,
  search: _search_reducer2.default,
  album: _album_reducer2.default,
  artist: _artist_reducer2.default
});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _player_actions.PLAY_ACTIVE_TRACK:
      return _extends({}, state, { isPlaying: true });

    case _player_actions.PAUSE_ACTIVE_TRACK:
      return _extends({}, state, { isPlaying: false });

    case _player_actions.TOGGLE_ACTIVE_TRACK:
      return _extends({}, state, { isPlaying: !state.isPlaying });

    case _player_actions.SHOW_MUSICBAR:
      return _extends({}, state, { showMusicbar: true });

    case _player_actions.SET_PLAYED_TIME:
      return _extends({}, state, { playedTime: action.payload });

    case _player_actions.START_SEEK:
      return _extends({}, state, { isSeeking: true });

    case _player_actions.STOP_SEEK:
      return _extends({}, state, { isSeeking: false });

    case _player_actions.CHANGE_SEEK:
      return _extends({}, state, { playedTime: action.payload });

    case _player_actions.ZERO_PLAYED_TIME:
      return _extends({}, state, { playedTime: 0 });

    case _player_actions.TOGGLE_SHUFFLE:
      return _extends({}, state, { isShuffling: !state.isShuffling });
    default:
      return state;
  }
};

var _player_actions = __webpack_require__(4);

var INITIAL_STATE = {
  isPlaying: false,
  playedTime: 0,
  isSeeking: false,
  showMusicbar: false,
  isShuffling: false
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _playlist_actions.SET_PLAYLISTS:
      return _extends({}, state, { playlists: action.payload });

    case _playlist_actions.SET_PRIVATE_PLAYLISTS:
      return _extends({}, state, { privatePlaylists: action.payload });

    case _playlist_actions.SET_FEATURED_PLAYLISTS:
      return _extends({}, state, { featuredPlaylists: action.payload });

    case _playlist_actions.SET_ACTIVE_PLAYLIST:
      return _extends({}, state, { activePlaylistId: action.payload });

    case _playlist_actions.SET_NEW_RELEASES:
      return _extends({}, state, { newReleases: action.payload });
    default:
      return state;
  }
};

var _playlist_actions = __webpack_require__(7);

var INITIAL_STATE = {
  playlists: [],
  privatePlaylists: [],
  featuredPlaylists: [],
  activePlaylistId: null,
  playingPlaylist: null,
  newReleases: []
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _search_actions = __webpack_require__(15);

var INITIAL_STATE = {
  searchedArtists: [],
  searchedPlaylists: [],
  searchedTracks: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _search_actions.SET_SEARCHED_ARTISTS:
      return _extends({}, state, { searchedArtists: action.payload });

    case _search_actions.SET_SEARCHED_TRACKS:
      return _extends({}, state, { searchedTracks: action.payload });

    case _search_actions.SET_SEARCHED_PLAYLISTS:
      return _extends({}, state, { searchedPlaylists: action.payload });

    default:
      return state;
  }
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _track_actions.SET_TRACK_DETAIL:
      return _extends({}, state, { trackDetail: action.payload });

    case _track_actions.SET_ACTIVE_TRACKLIST:
      return _extends({}, state, { activeTracklist: action.payload });

    case _track_actions.SET_PLAYING_TRACKLIST:
      return _extends({}, state, { playingTracklist: action.payload });

    case _track_actions.ADD_TRACK_TO_QUEUED_LIST:
      if (state.queuedTracks) {
        return _extends({}, state, {
          queuedTracks: [].concat(_toConsumableArray(state.queuedTracks), [action.payload])
        });
      } else {
        return _extends({}, state, { queuedTracks: [action.payload] });
      }

    case _track_actions.REMOVE_TRACK_FROM_QUEUED_LIST:
      var newQueuedTracks = state.queuedTracks.filter(function (track, index) {
        return index !== action.payload;
      });
      return _extends({}, state, { queuedTracks: newQueuedTracks });

    case _track_actions.ADD_TRACK_TO_LATEST_PLAYED:
      if (state.latestPlayedTracks.length > 0) {
        if (state.latestPlayedTracks[state.latestPlayedTracks.length - 1].id !== action.payload.id) {
          return _extends({}, state, {
            latestPlayedTracks: [].concat(_toConsumableArray(state.latestPlayedTracks), [action.payload])
          });
        } else {
          return _extends({}, state);
        }
      } else {
        return _extends({}, state, { latestPlayedTracks: [action.payload] });
      }

    case _track_actions.SET_ACTIVE_TRACK:
      return _extends({}, state, { activeTrack: action.payload });

    case _track_actions.SET_ACTIVE_TRACKINDEX:
      if (!action.payload && action.payload !== 0) {
        console.log('Inget track index skickades med vid start');
        return _extends({}, state);
      } else {
        return _extends({}, state, { activeTrackIndex: action.payload });
      }

    default:
      return state;
  }
};

var _track_actions = __webpack_require__(3);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = {
  trackDetail: {
    album: {
      images: null
    }
  },
  activeTracklist: null,
  playingTracklist: {
    id: ''
  },
  loadingTracklist: false,
  activeTrack: {
    id: null,
    images: null,
    artists: [],
    name: null
  },
  activeTrackIndex: 0,
  latestPlayedTracks: [],
  queuedTracks: []
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _user_actions = __webpack_require__(5);

var INITIAL_STATE = {
  user: 'loading'
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _user_actions.SET_USER:
      return _extends({}, state, { user: action.payload || false });

    case _user_actions.FAIL_USER:
      return _extends({}, state, { user: null });
    default:
      return state;
  }
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3ca7796551454ce362aa8bfc97aa22b9.png";

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("react-flip-move");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("screenfull");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("spotify-web-api-node");

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26);
module.exports = __webpack_require__(25);


/***/ })
/******/ ]);