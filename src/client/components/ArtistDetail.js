import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class ArtistDetail extends Component {
  componentWillMount = () => {
    window.scroll(0, 0)
  }
  render() {
    return (
      <div className="artist-detail-component ">
        <h1>ArtistDetail</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => {
  return { categories: categories.categories }
}

export default withRouter(connect(mapStateToProps, null)(ArtistDetail))
