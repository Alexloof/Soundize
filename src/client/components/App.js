import React, { Component } from 'react';
import { Link } from 'react-router';
var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi();

import { browserHistory } from 'react-router';

import Nav from "./Nav";
import MusicBar from "./MusicBar";

class App extends Component {
    state = {
        token: "",
        user: "",
        playlists: "",
        tracklist: "",
        activeTrack: "",
    }

    componentDidMount() {
        console.log(localStorage.getItem('token'));
        if (!localStorage.getItem('token') || localStorage.getItem('token') !== this.props.location.hash.slice(14, -44) && this.props.location.hash) {
            console.log("Ny token");
            let newHash = this.props.location.hash.slice(14, -44);
            localStorage.setItem('token', newHash);
        }
        spotifyApi.setAccessToken(localStorage.getItem('token'));
        this.getMe()
    }
    getPlaylists() {
        spotifyApi.getUserPlaylists(this.state.user.id)
            .then((data) => {
                this.onClickPlaylist(data.body.items[0].owner.id, data.body.items[0].id);
                this.setState(
                    { playlists: data.body.items },
                    () => browserHistory.replace('/app/stream')
                );
            }, function (err) {
                console.log('Something went wrong getting playlists!', err);
            });
    }
    getMe() {
        spotifyApi.getMe()
            .then((data) => {
                this.setState(
                    { user: data.body },
                    () => this.getPlaylists()
                );
            }, function (err) {
                console.log('Something went wrong getting user details!', err);
            });
    }
    onClickPlaylist = (user, id) => {
        spotifyApi.getPlaylist(user, id)
            .then((data) => {
                this.setState({ tracklist: data.body });
            }, function (err) {
                console.log('Something went wrong getting clickedtracklist!', err);
            });
    }
    getTrackAnalysis = (id) => {
        spotifyApi.getAudioAnalysisForTrack(id)
            .then(function (data) {
                console.log(data.body);
            }, function (err) {
                done(err);
            });
    }
    activeTrack = (track) => {
        this.setState({activeTrack: track});
    }
    render() {
        const childrenWithExtraProp = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                playlists: this.state.playlists,
                tracklist: this.state.tracklist,
                onClickPlaylist: this.onClickPlaylist,
                getTrackAnalysis: this.getTrackAnalysis,
                activeTrack: this.activeTrack
            })
        });
        return (
            <div>
                <Nav user={this.state.user} />
                {childrenWithExtraProp}
                <MusicBar activeTrack={this.state.activeTrack} />
            </div>
        );
    }
}

export default App;