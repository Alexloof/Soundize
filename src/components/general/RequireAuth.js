import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default ChildComponent => {
  class RequireAuth extends Component {
    render() {
      if (true) {
        console.log('Not authorized')
        return <Redirect to="/login" />
      } else {
        return <ChildComponent {...this.props} />
      }
    }
  }

  function mapStateToProps({ user }) {
    return { user: user.user }
  }

  return connect(mapStateToProps)(RequireAuth)
}
