import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class Redirect extends Component {
  componentWillMount = () => {
    browserHistory.replace('/app/stream')
  }
  render() {
    return <div />
  }
}

export default Redirect
