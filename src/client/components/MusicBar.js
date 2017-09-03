import React, { Component } from 'react';

class MusicBar extends Component {
    state = {
        activeTrack: {
            artists: [],
            album: ""
        },
        playing: false,
        duration: 0,
        played: 0,
        loaded: 0,
        muted: false,
        volume: 0.5
    }
    componentWillReceiveProps(props) {
        if (props.activeTrack) {
            this.setState({activeTrack: props.activeTrack});
        }
        console.log(props.activeTrack);
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
    render() {
        return (
            <div className="music-bar">
                <div className="container">
                    {this.state.activeTrack.album ? <img src={this.state.activeTrack.album.images[0].url} /> : <img />}
                    <div className="track-info">
                        <p className="artist-label">{this.renderArtists(this.state.activeTrack.artists)}</p>
                        <p className="track-title">{this.state.activeTrack.name}</p>
                    </div>
                    <button onClick={() => console.log("stepBack track")} className="button step-change-btn">
                        <span className="icon">
                            <i className="fa fa-step-backward"></i>
                        </span>
                    </button>
                    <button onClick={() => console.log("startStop track")} className="button play-btn">
                        <span className="icon">
                            {!this.state.playing ? <i className="fa fa-play"></i> : <i className="fa fa-pause"></i> }
                        </span>
                    </button>                    
                    <button onClick={() => console.log("stepForward track")} className="button step-change-btn">
                        <span className="icon">
                            <i className="fa fa-step-forward"></i>
                        </span>
                    </button>
                    <button onClick={() => console.log("loop track")} className="button step-change-btn">
                        <span className="icon">
                            <i className="fa fa-retweet"></i>
                        </span>
                    </button>
                    <div className="time-counter">
                        {(Math.round(this.state.duration * this.state.played) / 100).toFixed(2)}
                    </div>
                    <input
                        type='range' min={0} max={1} step='any'
                        value={this.state.played}
                        onMouseDown={this.onSeekMouseDown}
                        onChange={this.onSeekChange}
                        onMouseUp={this.onSeekMouseUp}
                    />
                    <div className="time-duration">
                        {(Math.round(this.state.duration) / 100).toFixed(2)}
                    </div>
                </div>
            </div>
        );
    }
}

export default MusicBar;