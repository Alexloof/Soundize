import React, { Component } from 'react'
import { Link, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import Alert from 'react-s-alert'

import RequireAuth from './general/RequireAuth'
import Nav from './Nav'
import MusicBar from './MusicBar'
import Home from './Home'
import Search from './Search'

class App extends Component {
  render() {
    return (
      <div className="app" style={{ marginTop: '52px' }}>
        <Nav user={this.props.user} />
        {renderRoutes(this.props.route.routes)}
        <Alert stack={{ limit: 3 }} html={true} />
        <MusicBar />
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return { user: user.user }
}

export default connect(mapStateToProps, null)(RequireAuth(App))
