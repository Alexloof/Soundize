import React, { Component } from 'react';

class Playlists extends Component {
    renderPlaylists() {
        return (
            this.props.playlists.map((playlist) => {
                return(
                    <li key={playlist.id}><a>{playlist.name}</a></li>
                );
            })
        );
        
    }
    render() {
        return (
            <aside className="menu ">
                <p className="menu-label">
                    Spellistor
                </p>
                <ul className="menu-list">
                    {this.props.playlists ? this.renderPlaylists() : null}
                </ul>
            </aside>
        );
    }
}

export default Playlists;