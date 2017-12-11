import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Redirect extends Component {
  componentDidMount = () => {
    console.log(localStorage.getItem('token'))
    let newHash = this.props.location.hash.slice(14, -34)
    if (newHash) {
      window.opener.postMessage(
        {
          type: 'access_token',
          access_token: newHash
        },
        '*'
      )
    }
    window.close()
  }
  render() {
    return <div />
  }
}

export default withRouter(Redirect)
