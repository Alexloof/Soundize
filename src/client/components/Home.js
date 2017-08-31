import React, { Component } from 'react';

var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi();

import Playlists from "./Playlists";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            username: "",
            playlists: ""
        }
    }
    componentDidMount() {
        if (this.props.location.hash) {
            let newHash = this.props.location.hash.slice(14, -44);
            this.setState({ token: newHash });
        }
        setTimeout(() => {
            this.getMe();
        }, 100)
        
    }
    getPlaylists() {
        spotifyApi.getUserPlaylists(this.state.username)
            .then((data) => {
                this.setState({playlists: data.body.items});
            }, function (err) {
                console.log('Something went wrong!', err);
            });
    }
    getMe() {
        spotifyApi.setAccessToken(this.state.token);

        spotifyApi.getMe()
            .then((data) =>  {
                this.setState({username: data.body.id});
            }, function (err) {
                console.log('Something went wrong!', err);
            });
        setTimeout(() => {
            this.getPlaylists();
        }, 300)
    }
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
                    <div className="column is-2 playlists-menu">
                        <Playlists playlists={this.state.playlists}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;