import React, { Component } from 'react'
import { Link, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Alert from 'react-s-alert'

import { getCurrentUser, setupAuthToAPI } from '../actions/user_actions'

import RequireAuth from './general/RequireAuth'
import Nav from './Nav'
import MusicBar from './MusicBar'
import Home from './Home'
import Search from './Search'

import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'
import 'react-s-alert/dist/s-alert-css-effects/scale.css'
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css'
import 'react-s-alert/dist/s-alert-css-effects/flip.css'
import 'react-s-alert/dist/s-alert-css-effects/genie.css'
import 'react-s-alert/dist/s-alert-css-effects/jelly.css'
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css'

class App extends Component {
  async componentDidMount() {
    await this.props.setupAuthToAPI()
    await this.props.getCurrentUser()
    console.log(this.props.user)
    if (!this.props.user.id) {
      this.props.history.replace('/login')
    }
  }
  render() {
    return (
      <div className="app" style={{ marginTop: '52px' }}>
        <Nav user={this.props.user} />

        {this.props.routes.map((route, i) => (
          <Route
            key={i}
            exact={route.exact}
            path={route.path}
            render={props => <route.component routes={route.routes} />}
          />
        ))}
        <Alert stack={{ limit: 3 }} html={true} />
        <MusicBar />
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return { user: user.user }
}

export default connect(mapStateToProps, { getCurrentUser, setupAuthToAPI })(
  RequireAuth(App)
)
