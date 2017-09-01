import React, { Component } from 'react';
import { Link } from "react-router";
import { browserHistory } from 'react-router';

class Nav extends Component {
    onLogout = () => {
        localStorage.removeItem('token');
        browserHistory.replace('/');
    }
	render() {
		return (
			<nav className="navbar ">
				<div className="navbar-brand">
					<a className="navbar-item" href="/">
						<p>SoundIze</p>
					</a>

					<a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
						<span className="icon" >
							<i className="fa fa-github"></i>
						</span>
					</a>

					<a className="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
						<span className="icon">
							<i className="fa fa-twitter"></i>
						</span>
					</a>

					<div className="navbar-burger burger" data-target="navMenubd-example">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>

				<div id="navMenubd-example" className="navbar-menu">
					<div className="navbar-start">
						<Link className="navbar-item " to="/app/stream">
							Hem
      					</Link>
						<Link className="navbar-item " to="/">
							Test
     					</Link>
					</div>

					<div className="navbar-end">
						<div className="navbar-item">
							<div className="field is-grouped">
								<p className="control">
									<a className="bd-tw-button button">
										<span onClick={() => this.onLogout()}>
											Logga ut
  										</span>
									</a>
								</p>						
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;