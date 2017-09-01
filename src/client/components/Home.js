import React, { Component } from 'react';

import Tracklist from './Tracklist';
import Playlists from "./Playlists";

class Home extends Component {
    query() {
        spotifyApi.setAccessToken(this.state.token);

        spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
            .then(function (data) {
                console.log('Artist albums', data.body);
            }, function (err) {
                console.error(err);
            });


        spotifyApi.getAudioFeaturesForTrack('3ahcnnaHbDEUCf0KvRkxTT')
            .then(function (data) {
                console.log(data.body);
            }, function (err) {
            });

        spotifyApi.getMe()
            .then(function (data) {
                console.log('Some information about the authenticated user', data.body);
            }, function (err) {
                console.log('Something went wrong!', err);
            });


        spotifyApi.getNewReleases({ limit: 5, offset: 0, country: 'SE' })
            .then(function (data) {
                console.log(data.body);
            }, function (err) {
                console.log("Something went wrong!", err);
            });
    }
    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column playlists-menu">
                        <Playlists onClickPlaylist={this.props.onClickPlaylist} playlists={this.props.playlists} />
                    </div>
                    <div className="column is-8 tracklist">
                        <Tracklist tracklist={this.props.tracklist} />
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;