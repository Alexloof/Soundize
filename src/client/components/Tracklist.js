import React, { Component } from 'react';

class Tracklist extends Component {
    renderArtists(artists) {
        return(
            artists.map((artist) =>{
                return artist.name
            })
        );
    }
    renderTracklist() {
        console.log(this.props.tracklist);
        return (
            this.props.tracklist.tracks.items.map((track) => {
                return(
                    <li key={track.track.id}>
                        <a>
                            <div>
                                {this.renderArtists(track.track.artists)}
                            </div>
                            <div>
                                {track.track.name} 
                            </div>
                        </a>
                    </li>
                );
            })
        );
    }
    render() {
        console.log(this.props.tracklist.images);
        return (
            <div className="menu ">
                <p className="menu-label">
                    {this.props.tracklist.name ? this.props.tracklist.name : "Låtar"}
                </p>
                {this.props.tracklist.images ? <img src={this.props.tracklist.images[1].url}/> : null}
                <ul className="menu-list">
                    {this.props.tracklist ? this.renderTracklist() : null}
                </ul>
            </div>
        );
    }
}

export default Tracklist;