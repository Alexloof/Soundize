import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

const scopes = [
  'user-read-private',
  'playlist-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-modify-private',
  'user-library-read',
  'user-library-modify',
  'user-follow-read',
  'user-follow-modify'
]
const client_id = '8d7cb1d087644280982de543cbb92989'
const redirect_uri = 'http://localhost:8080/app'

const url =
  'https://accounts.spotify.com/authorize?client_id=' +
  client_id +
  '&redirect_uri=' +
  encodeURIComponent(redirect_uri) +
  '&scope=' +
  encodeURIComponent(scopes.join(' ')) +
  '&response_type=token'

const width = 450,
  height = 730,
  left = screen.width / 2 - width / 2,
  top = screen.height / 2 - height / 2
class Login extends Component {
  componentDidMount() {
    window.addEventListener('message', e => this.auth(e), false)
  }
  auth = event => {
    if (event.data.type == 'access_token') {
      console.log(this.props)
      this.props.history.push('/')
    }
  }
  render() {
    console.log(url)

    return (
      <div className="login-wrapper">
        <a
          onClick={() =>
            window.open(
              url,
              'Spotify',
              'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' +
                width +
                ', height=' +
                height +
                ', top=' +
                top +
                ', left=' +
                left
            )}
          className="button login-button"
        >
          ENTER
        </a>
      </div>
    )
  }
}

export default withRouter(Login)
