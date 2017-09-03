import React, { Component } from 'react';

import Track from './Track';

class Tracklist extends Component {
    state = {
        isPlaying: false,
    }

    renderTracklist() {
        return (
            this.props.tracklist.tracks.items.map((track, index) => {
                if (track.track !== null) {
                    return <Track key={index} track={track} activeTrack={this.props.activeTrack} />
                }
            })
        );
    }
    render() {
        return (
            <div className="menu ">
                <div className="tracklist-banner">
                    <div className="tracklist-banner-info">
                        <div>
                            <p className="menu-label">Spellista</p>
                            <p className="tracklist-name title">
                                {this.props.tracklist.name ? this.props.tracklist.name : "Låtar"}
                            </p>
                        </div>
                        <div className="tracklist-banner-info-lower">
                            <div>
                                <p>Följare: {this.props.tracklist.followers ? this.props.tracklist.followers.total : "0"}</p>
                                <p>Skapad av: {this.props.tracklist.owner ? this.props.tracklist.owner.display_name || this.props.tracklist.owner.id : "Okänd"} </p>
                            </div>
                            <div className="tracklist-banner-btn-group">
                                <button className="button is-outlined">{!this.state.isPlaying ? "Spela upp" : "Pausa"}</button>
                                <button className="button">Följer</button>
                            </div>
                        </div>
                    </div>
                    <div className="tracklist-img">
                        {this.props.tracklist.images ? <img src={this.props.tracklist.images[0].url || this.props.tracklist.images[0].url} /> : null}
                    </div>
                </div>
                <ul className="menu-list tracklist-tracks">
                    {this.props.tracklist ? this.renderTracklist() : null}
                </ul>
            </div>
        );
    }
}

export default Tracklist;