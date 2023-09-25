import React from 'react';
import Destacado from '../component/Destacado';
import Imagehome from '../component/Imagehome';
import colibri from "./../img/colibri.png";
import Calltoaction from '../component/Calltoaction';





const Home = () => {

	return (
		<>
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
				<Calltoaction texto={"Tenemos Diabetes. Nos acompaña, no nos detiene. - Chris Olsen."} />
				{/* Content Row*/}
				<div className="row gx-4 gx-lg-5">
					<div className="col-md-4 mb-5">
						<Destacado titulo={"Foro"} texto={"Haz preguntas, comparte experiencias y sugerencias. Un espacio para crear comunidad."} label={"Entrar"} link={'/foro'} />
					</div>
					<div className="col-md-4 mb-5">
						<Destacado link={'/cambioregalo'} titulo={"Te lo cambio. Te lo regalo."} texto={"Un espacio para que puedas intercambiar o regalar insumos. Lo que no necesitas, a alguien le puede servir."} label={"Entrar"} />
					</div>
					<div className="col-md-4 mb-5">
						<Destacado titulo={"Novedades"} texto={"Nueva pastelería lowcarb llega con los mejores productos"} label={"Más aquí"} />
					</div>
				</div>
			</div>

		</>

	)
};
export default Home;

