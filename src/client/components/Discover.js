import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { getCategories } from '../actions/category_actions'

class Discover extends Component {
  componentWillMount = () => {
    window.scroll(0, 0)
    this.props.getCategories()
  }
  navigateToCategory = id => {
    this.props.history.push('/discover/' + id)
  }
  render() {
    return (
      <div className="discover-component ">
        <h1>Utforska</h1>
        <ul className="menu-list discover-list">
          {this.props.categories.map((category, index) => {
            return (
              <li
                onClick={() => this.navigateToCategory(category.id)}
                key={index}
                className="discover-item"
              >
                <img src={category.icons[0].url} />
                <h2>{category.name}</h2>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => {
  return { categories: categories.categories }
}

export default withRouter(connect(mapStateToProps, { getCategories })(Discover))
