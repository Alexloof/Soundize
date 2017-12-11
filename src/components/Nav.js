import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { pauseActiveTrack } from '../actions/player_actions'

class Nav extends Component {
  state = {
    searchText: '',
    navClassName: 'navbar-start',
    mobileMenu: 'mobile-links-menu'
  }
  onLogout = () => {
    localStorage.removeItem('token')
    this.props.pauseActiveTrack()
    this.props.history.replace('/')
  }
  onInputChange = e => {
    this.setState({ searchText: e.target.value }, () => {
      if (this.state.searchText) {
        setTimeout(() => {
          this.props.history.push({
            pathname: '/app/search',
            search: `?q=${this.state.searchText.toLowerCase()}`,
            state: { id: this.state.searchText.toLowerCase() }
          })
        }, 500)
      } else {
        this.props.history.push('/app')
      }
    })
  }
  onSearchSubmit = e => {
    e.preventDefault()
    if (this.state.searchText.length > 0) {
      this.props.history.push({
        pathname: '/app/search',
        search: `?q=${this.state.searchText.toLowerCase()}`,
        state: { id: this.state.searchText.toLowerCase() }
      })
      this.setState({ searchText: '' })
    }
  }
  toggleMobileMenu = () => {
    if (this.state.mobileMenu === 'mobile-links-menu') {
      this.setState({ mobileMenu: 'mobile-links-menu active' })
    } else {
      this.setState({ mobileMenu: 'mobile-links-menu' })
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
        </div>
        <div onClick={() => this.toggleMobileMenu()} className="burge-menu">
          {this.state.mobileMenu === 'mobile-links-menu' ? (
            <i class="fa fa-bars" aria-hidden="true" />
          ) : (
            <i class="fa fa-times" aria-hidden="true" />
          )}
        </div>
        <div className={this.state.mobileMenu}>
          <NavLink
            className="navbar-item"
            to="/app"
            exact
            activeStyle={{ color: '#ff6b42' }}
            onClick={() => this.toggleMobileMenu()}
          >
            <span>Min Musik</span>
          </NavLink>

          <NavLink
            className="navbar-item"
            to="/app/discover"
            activeStyle={{ color: '#ff6b42' }}
            onClick={() => this.toggleMobileMenu()}
          >
            <span>Utforska</span>
          </NavLink>

          <NavLink
            className="navbar-item"
            to="/app/new_releases"
            activeStyle={{ color: '#ff6b42' }}
            onClick={() => this.toggleMobileMenu()}
          >
            <span>Nytt</span>
          </NavLink>

          <NavLink
            className="navbar-item"
            to="/app/toplists"
            activeStyle={{ color: '#ff6b42' }}
            onClick={() => this.toggleMobileMenu()}
          >
            <span>Topplistor</span>
          </NavLink>
        </div>
        <div id="navMenubd-example" className="navbar-menu">
          <div
            onMouseEnter={() =>
              this.setState({ navClassName: 'navbar-start with-indicator' })
            }
            onMouseLeave={() =>
              this.setState({ navClassName: 'navbar-start ' })
            }
            className={this.state.navClassName}
          >
            <NavLink
              className="navbar-item"
              to="/app"
              exact
              activeStyle={{ color: '#ff6b42' }}
            >
              <span>Min Musik</span>
            </NavLink>

            <NavLink
              className="navbar-item"
              to="/app/discover"
              activeStyle={{ color: '#ff6b42' }}
            >
              <span>Utforska</span>
            </NavLink>

            <NavLink
              className="navbar-item"
              to="/app/new_releases"
              activeStyle={{ color: '#ff6b42' }}
            >
              <span>Nytt</span>
            </NavLink>

            <NavLink
              className="navbar-item"
              to="/app/toplists"
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
              {this.props.user.id ? (
                <div
                  className="field is-grouped"
                  style={{ alignItems: 'center' }}
                >
                  <div className="navbar-item has-dropdown is-hoverable user-nav-dropdown">
                    <img
                      src={
                        this.props.user.images[0]
                          ? this.props.user.images[0].url
                          : null
                      }
                    />
                    <a className="navbar-link user-nav-link">
                      {this.props.user.display_name}
                    </a>
                    <div className="navbar-dropdown">
                      <a className="navbar-item">Profil</a>
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

export default withRouter(connect(null, { pauseActiveTrack })(Nav))
