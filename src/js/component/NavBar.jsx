import React from 'react';

const NavBar = (props) => {
	return (
		<nav className="navbar navbar-expand-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">{props.logo}</a>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a className="nav-link" href="#">{props.home}</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">{props.about}</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">{props.services}</a>  style="display: inline-block"
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">{props.contact}</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
export default NavBar;
