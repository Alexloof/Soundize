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
        tracklist: ""
    }

    componentDidMount() {
        if (!localStorage.getItem('token')) {
            console.log("hej");
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
    render() {
        const childrenWithExtraProp = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                playlists: this.state.playlists,
                tracklist: this.state.tracklist,
                onClickPlaylist: this.onClickPlaylist
            })});
            return (
                <div>
                    <Nav user={this.state.user} />
                    {childrenWithExtraProp}
                    <MusicBar />
                </div>
            );
        }
}

    export default App;