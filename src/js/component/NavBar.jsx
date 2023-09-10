import React from 'react';
import { Link } from 'react-router-dom/client'



const NavBar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container px-5">
				<a className="navbar-brand" href="#!">DiabeticLink
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/quienessomos">Quiénes Somos</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#!">{props.foro}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#!">{props.marketplace}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#!">{props.registro}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
export default NavBar;


