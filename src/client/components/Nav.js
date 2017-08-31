import React, { Component } from 'react';
import { Link } from "react-router";

class Nav extends Component {
	render() {
		return (
			<nav className="navbar ">
				<div className="navbar-brand">
					<a className="navbar-item" href="/">
						<img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox"  />
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
						<Link className="navbar-item " to="/hem">
							Hem
      					</Link>
						<Link className="navbar-item " to="/test">
							Test
     					</Link>
					</div>

					<div className="navbar-end">
						<div className="navbar-item">
							<div className="field is-grouped">
								<p className="control">
									<a className="bd-tw-button button"
										data-social-network="Twitter"
										data-social-action="tweet"
										data-social-target="http://bulma.io"
										target="_blank"
										href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://bulma.io&via=jgthms">
										<span className="icon">
											<i className="fa fa-twitter"></i>
										</span>
										<span>
											Tweet
  										</span>
									</a>

								</p>
								<p className="control">
									<a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
										<span className="icon">
											<i className="fa fa-download"></i>
										</span>
										<span>Download</span>
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