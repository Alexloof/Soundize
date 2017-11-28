import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class TrackDetail extends Component {
  componentWillMount = () => {
    window.scroll(0, 0)
  }
  render() {
    return (
      <div className="album-detail-component ">
        <h1>TrackDetail</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => {
  return { categories: categories.categories }
}

export default withRouter(connect(mapStateToProps, null)(TrackDetail))
