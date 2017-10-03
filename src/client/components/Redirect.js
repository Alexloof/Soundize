import React, { Component } from 'react'

class Redirect extends Component {
  componentWillMount = () => {
    console.log(this.props)
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
        this.props.history.push('/app/stream')
      } else {
        this.props.history.push('/')
      }
    }
  }
  render() {
    return <div />
  }
}

export default Redirect
