import React, { Component } from 'react'
import { Link, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { getCurrentUser, setupAuthToAPI } from '../actions/user_actions'

import RequireAuth from './general/RequireAuth'
import Nav from './Nav'
import MusicBar from './MusicBar'
import Home from './Home'
import Search from './Search'

class App extends Component {
  async componentDidMount() {
    await this.props.setupAuthToAPI()
    await this.props.getCurrentUser()
    console.log(this.props.user)
  }
  render() {
    return (
      <div style={{ marginTop: '52px' }}>
        <Nav user={this.props.user} />

        {this.props.routes.map((route, i) => (
          <Route
            key={i}
            exact={route.exact}
            path={route.path}
            render={props => <route.component routes={route.routes} />}
          />
        ))}

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
