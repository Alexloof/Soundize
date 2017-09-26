import React, { Component } from 'react'

class Search extends Component {
  state = {
    searchedTracks: [],
    searchedArtists: [],
    searchedPlaylists: []
  }
  componentWillMount() {
    this.props.spotifyApi.searchTracks(this.props.params.id).then(data => {
      this.setState({ searchedTracks: data.body.tracks.items })
    }, function(err) {
      console.error(err)
    })
    this.props.spotifyApi.searchArtists(this.props.params.id).then(data => {
      console.log(data.body)
      this.setState({ searchedArtists: data.body.artists.items })
    }, function(err) {
      console.error(err)
    })
    this.props.spotifyApi.searchPlaylists(this.props.params.id).then(data => {
      console.log(data.body)
      this.setState({ searchedPlaylists: data.body.playlists.items })
    }, function(err) {
      console.log('Something went wrong!', err)
    })
  }
  componentWillUpdate(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      this.props.spotifyApi.searchTracks(nextProps.params.id).then(data => {
        this.setState({ searchedTracks: data.body.tracks.items })
      }, function(err) {
        console.error(err)
      })
      this.props.spotifyApi.searchArtists(nextProps.params.id).then(data => {
        console.log(data.body)
        this.setState({ searchedArtists: data.body.artists.items })
      }, function(err) {
        console.error(err)
      })
      this.props.spotifyApi.searchPlaylists(nextProps.params.id).then(data => {
        console.log(data.body)
        this.setState({ searchedPlaylists: data.body.playlists.items })
      }, function(err) {
        console.log('Something went wrong!', err)
      })
    }
  }

  render() {
    return <div>Search</div>
  }
}

export default Search
