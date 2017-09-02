import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Track extends Component {
    state = {
		playing: false,
		duration: 0,
		played: 0,
		loaded: 0,
		muted: false,
		volume: 0.5
	}
	onSeekMouseDown = e => {
		this.setState({ seeking: true })
	  }
	  onSeekChange = e => {
		this.setState({ played: parseFloat(e.target.value) })
	  }
	  onSeekMouseUp = e => {
		this.setState({ seeking: false })
		this.player.seekTo(parseFloat(e.target.value))
	  }
	  onProgress = state => {
		// We only want to update time slider if we are not currently seeking
		if (!this.state.seeking) {
		  this.setState(state)
		}
	  }
    renderArtists(artists) {
        return (
            artists.map((artist, index) => {
                if (index + 1 === artists.length) {
                    return artist.name;
                } else {
                    return artist.name + ", ";
                }
            })
        );
    }
    render() {
        return (
            <li className="track">
                {this.props.track.track.album.images.length !== 0 ? <img src={this.props.track.track.album.images[0].url} /> : <img />}
                <div className="track-info">
                    <div className="track-section-higher">
                        <div className="artist-label">
                            {this.renderArtists(this.props.track.track.artists)}
                        </div>
                        <div className="title-label">
                            {this.props.track.track.name}
                        </div>
						{Math.round(this.state.duration * this.state.played) === 0 ? 
							<div className="time-counter hidden">
								{Math.round(this.state.duration * this.state.played)}
							</div>
						: 
						<div className="time-counter">
							{Math.round(this.state.duration * this.state.played)}
						</div>}	
						
						<div className="time-duration">
							{Math.round(this.state.duration)}
						</div>
                    </div>
					<div className="track-section-lower">
						<button onClick={() => this.setState({playing: !this.state.playing})} className="button play-btn">
							<span className="icon">
								{!this.state.playing ? <i className="fa fa-play"></i> : <i className="fa fa-pause"></i> }
							</span>
						</button>
						<input
							type='range' min={0} max={1} step='any'
							value={this.state.played}
							onMouseDown={this.onSeekMouseDown}
							onChange={this.onSeekChange}
							onMouseUp={this.onSeekMouseUp}
							/>
					</div>
                </div>
				
                <ReactPlayer
					ref={player => { this.player = player }}
                    width={1}
                    height={1}
                    key={this.props.track.track.id}
                    playing={this.state.playing}
                    url={this.props.track.track.preview_url ? this.props.track.track.preview_url : null }
					onError={(e) => console.log("error", e)}
					onDuration={duration => this.setState({ duration })}
					onEnded={() => this.setState({ playing: false })}
					onProgress={this.onProgress}
					onPlay={() => this.setState({ playing: true })}
              		onPause={() => this.setState({ playing: false })}
					onEnded={() => this.setState({ playing: false })}
					progressFrequency={100}
					volume={this.state.volume}
                />
            </li>
        );
    }
}

export default Track;