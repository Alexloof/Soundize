import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { getCurrentUser, setupAuthToAPI } from '../../actions/user_actions'

export default ChildComponent => {
  class RequireAuth extends Component {
    async componentDidMount() {
      await this.props.setupAuthToAPI()
      await this.props.getCurrentUser()
      console.log(this.props.user)
    }
    render() {
      switch (this.props.user.id) {
        case false:
          console.log('Not authorized')
          return <Redirect to="/login" />
        case null:
          return <div>Loading...</div>
        default:
          return <ChildComponent {...this.props} />
      }
    }
  }

  function mapStateToProps({ user }) {
    return { user: user.user }
  }

  return connect(mapStateToProps, { getCurrentUser, setupAuthToAPI })(
    RequireAuth
  )
}
