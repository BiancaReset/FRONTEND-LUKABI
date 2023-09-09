import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Destacado from './Destacado';
import img1 from "./../img/img1.jpeg";
import img2 from "./../img/img2.jpeg";
import img3 from "./../img/img3.png";
import background from "./../img/background.jpg"



const Home = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container px-5">
					<a className="navbar-brand" href="#!">
						Start Bootstrap
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
								<a className="nav-link active" aria-current="page" href="#!">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#!">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#!">
									Contact
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#!">
									Services
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			{/* Page Content*/}
			<div className="container px-4 px-lg-5">
				{/* Heading Row*/}
				<div className="row gx-4 gx-lg-5 align-items-center my-5">
					<div className="col-lg-7">
						<img
							className="img-fluid rounded mb-4 mb-lg-0"
							src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg"
							alt="..."
						/>
					</div>
					<div className="col-lg-5">
						<h1 className="font-weight-light">Business Name or Tagline</h1>
						<p>
							This is a template that is great for small businesses. It doesn't have
							too much fancy flare to it, but it makes a great use of the standard
							Bootstrap core components. Feel free to use this template for any
							project you want!
						</p>
						<a className="btn btn-primary" href="#!">
							Call to Action!
						</a>
					</div>
				</div>
				{/* Call to Action*/}
				<div className="card text-white bg-secondary my-5 py-4 text-center">
					<div className="card-body">
						<p className="text-white m-0">
							This call to action card is a great place to showcase some important
							information or display a clever tagline!
						</p>
					</div>
				</div>
				{/* Content Row*/}
				<div className="row gx-4 gx-lg-5">
					<div className="col-md-4 mb-5">
						<Destacado titulo={"Foro"} texto={"Haz preguntas, comparte experiencias y sugerencias. Un espacio para crear comunidad."} label={"Entrar"} />
					</div>
					<div className="col-md-4 mb-5">
						<Destacado titulo={"Te lo cambio. Te lo regalo."} texto={"Un espacio para que puedas intercambiar o regalar insumos. Lo que no necesitas, a alguien le puede servir."} label={"Entrar"} />
					</div>
					<div className="col-md-4 mb-5">
						<Destacado titulo={"Novedades"} texto={"Nueva pastelería lowcarb llega con los mejores productos"} label={"Más aquí"} />
					</div>
				</div>
			</div>
			{/* Footer*/}
			<footer className="py-5 bg-dark">
				<div className="container px-4 px-lg-5">
					<p className="m-0 text-center text-white">
						Copyright © Your Website 2023
					</p>
				</div>
			</footer>
		</>

	)
};
export default Home;

