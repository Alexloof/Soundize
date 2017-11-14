import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Redirect extends Component {
  componentWillMount = () => {
    console.log(localStorage.getItem('token'))
    if (
      !localStorage.getItem('token') ||
      (localStorage.getItem('token') !==
        this.props.location.hash.slice(14, -34) &&
        this.props.location.hash)
    ) {
      console.log('Ny token')
      let newHash = this.props.location.hash.slice(14, -34)
      if (newHash) {
        localStorage.setItem('token', newHash)
        console.log('SUCCESS!')
        this.props.history.push('/')
      } else {
        this.props.history.push('/login')
      }
    } else {
      this.props.history.push('/')
    }
  }
  render() {
    return <div />
  }
}

export default withRouter(Redirect)
