import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class Nav extends Component {
  state = {
    searchText: '',
    navClassName: 'navbar-start'
  }
  onLogout = () => {
    localStorage.removeItem('token')
    this.props.history.replace('/login')
  }
  onInputChange = e => {
    this.setState({ searchText: e.target.value }, () => {
      if (this.state.searchText) {
        setTimeout(() => {
          this.props.history.push({
            pathname: '/search',
            search: `?q=${this.state.searchText.toLowerCase()}`,
            state: { id: this.state.searchText.toLowerCase() }
          })
        }, 500)
      } else {
        this.props.history.push('/')
      }
    })
  }
  onSearchSubmit = e => {
    e.preventDefault()
    if (this.state.searchText.length > 0) {
      this.props.history.push({
        pathname: '/search',
        search: `?q=${this.state.searchText.toLowerCase()}`,
        state: { id: this.state.searchText.toLowerCase() }
      })
      this.setState({ searchText: '' })
    }
  }
  render() {
    return (
      <nav className="navbar ">
        <div className="navbar-brand">
          <NavLink
            className="navbar-item"
            to="/login"
            onClick={() => this.onLogout()}
          >
            <img src={require('../images/Soundize-logo2.png')} alt="asasas" />
          </NavLink>

          <a
            className="navbar-item is-hidden-desktop"
            href="https://github.com/jgthms/bulma"
            target="_blank"
          >
            <span className="icon">
              <i className="fa fa-github" />
            </span>
          </a>

          <a
            className="navbar-item is-hidden-desktop"
            href="https://twitter.com/jgthms"
            target="_blank"
          >
            <span className="icon">
              <i className="fa fa-twitter" />
            </span>
          </a>

          <div className="navbar-burger burger" data-target="navMenubd-example">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navMenubd-example" className="navbar-menu">
          <div
            onMouseEnter={() =>
              this.setState({ navClassName: 'navbar-start with-indicator' })}
            onMouseLeave={() =>
              this.setState({ navClassName: 'navbar-start ' })}
            className={this.state.navClassName}
          >
            <NavLink
              className="navbar-item"
              to="/"
              exact
              activeStyle={{ color: '#ff6b42' }}
            >
              <span>Min Musik</span>
            </NavLink>

            <NavLink
              className="navbar-item"
              to="/discover"
              activeStyle={{ color: '#ff6b42' }}
            >
              <span>Utforska</span>
            </NavLink>

            <NavLink
              className="navbar-item"
              to="/new_releases"
              activeStyle={{ color: '#ff6b42' }}
            >
              <span>Nytt</span>
            </NavLink>

            <NavLink
              className="navbar-item"
              to="/toplists"
              activeStyle={{ color: '#ff6b42' }}
            >
              <span>Topplistor</span>
            </NavLink>
          </div>

          <div className="navbar-end">
            <form onSubmit={this.onSearchSubmit}>
              <div className="control has-icons-right">
                <input
                  className="input"
                  onChange={this.onInputChange}
                  value={this.state.searchText}
                  type="text"
                  placeholder="Sök"
                />
                <span
                  onClick={this.onSearchSubmit}
                  className="icon is-small is-right"
                >
                  <i className="fa fa-search" />
                </span>
              </div>
            </form>

            <div className="navbar-item">
              {this.props.user ? (
                <div
                  className="field is-grouped"
                  style={{ alignItems: 'center' }}
                >
                  <div className="navbar-item has-dropdown is-hoverable user-nav-dropdown">
                    <img src={this.props.user.images[0].url} />
                    <a className="navbar-link user-nav-link">
                      {this.props.user.display_name}
                    </a>
                    <div className="navbar-dropdown">
                      <a
                        onClick={() => this.onLogout()}
                        className="navbar-item"
                      >
                        Logga ut
                      </a>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Nav)
