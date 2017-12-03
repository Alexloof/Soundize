import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default ChildComponent => {
  class RequireAuth extends Component {
    render() {
      if (this.props.user.id) {
        return <ChildComponent {...this.props} />
      } else {
        console.log('Not authorized')
        return <Redirect to="/login" />
      }
    }
  }

  function mapStateToProps({ user }) {
    return { user: user.user }
  }

  return connect(mapStateToProps)(RequireAuth)
}
