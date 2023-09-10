import React from 'react';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import Destacado from '../component/Destacado';
import Imagehome from '../component/Imagehome';
import colibri from "./../img/colibri.png";



const Home = () => {
	return (
		<>
			<NavBar webname={"DabeticLink"} quienes={"Quiénes Somos"} foro={"Foro"} marketplace={"Te lo compro/regalo"} registro={"Registro/Login"} />
			<div className="container px-4 px-lg-5">
				{/* Heading Row*/}
				<div className="row gx-4 gx-lg-5 align-items-center my-5">
					<div className="col-lg-7">
						<Imagehome image={colibri}
						/>
					</div>
					<div className="col-lg-5">
						<h1 className="font-weight-light">Testimonio</h1>
						<p>
							Quizá poner un testimonio mensual
						</p>
						<a className="btn btn-primary" href="#!">
							Leer más
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

