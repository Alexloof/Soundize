import React, { Component } from 'react'

class Discover extends Component {
  state = {
    categories: []
  }
  componentWillMount = () => {
    window.scroll(0, 0)
    this.props.spotifyApi
      .getCategories({
        offset: 0,
        country: 'SE',
        locale: 'sv_SE'
      })
      .then(
        data => {
          this.setState({ categories: data.body.categories.items })
        },
        function(err) {
          console.log('Something went wrong!', err)
        }
      )
  }
  navigateToCategory = id => {
    this.props.history.push('/stream/discover/' + id)
  }
  render() {
    return (
      <div className="discover-component">
        <ul className="menu-list discover-list">
          {this.state.categories.map((category, index) => {
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

export default Discover
