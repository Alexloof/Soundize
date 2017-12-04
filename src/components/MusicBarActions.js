import React, { Component } from 'react'

export default ({
  playPreviousTrack,
  playNextTrack,
  toggleLoop,
  isLooping,
  isPlaying,
  pauseActiveTrack,
  playActiveTrack,
  isShuffling,
  toggleShuffle
}) => {
  const renderPlayPauseButton = (
    isPlaying,
    playActiveTrack,
    pauseActiveTrack
  ) => {
    return isPlaying ? (
      <button onClick={() => pauseActiveTrack()} className="button play-btn">
        <span className="icon">
          <i className="fa fa-pause" />
        </span>
      </button>
    ) : (
      <button onClick={() => playActiveTrack()} className="button play-btn">
        <span className="icon">
          <i className="fa fa-play" />
        </span>
      </button>
    )
  }
  return (
    <div className="musicbar-actions">
      <button
        onClick={() => toggleShuffle()}
        className="button step-change-btn"
      >
        <span className="icon">
          {isShuffling ? (
            <i className="fa fa-random active" aria-hidden="true" />
          ) : (
            <i className="fa fa-random" aria-hidden="true" />
          )}
        </span>
      </button>
      <button
        onClick={() => playPreviousTrack()}
        className="button step-change-btn"
      >
        <span className="icon">
          <i className="fa fa-step-backward" />
        </span>
      </button>

      {renderPlayPauseButton(isPlaying, playActiveTrack, pauseActiveTrack)}

      <button
        onClick={() => playNextTrack()}
        className="button step-change-btn"
      >
        <span className="icon">
          <i className="fa fa-step-forward" />
        </span>
      </button>
      <button onClick={() => toggleLoop()} className="button step-change-btn">
        <span className="icon">
          {isLooping ? (
            <i className="fa fa-retweet active" />
          ) : (
            <i className="fa fa-retweet" />
          )}
        </span>
      </button>
    </div>
  )
}
