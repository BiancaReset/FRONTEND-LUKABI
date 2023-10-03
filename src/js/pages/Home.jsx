import React from 'react';
import Destacado from '../component/Destacado';
import Imagehome from '../component/Imagehome';
import colibri from "./../img/colibri.png";
import Calltoaction from '../component/Calltoaction';
import { Link } from 'react-router-dom';



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
						<h2 className="font-weight-light">Testimonio del mes</h2>
						<p>
							"El mundo de las redes me ha enseñado conceptos que desconocía sobre mi diabetes". - Aida Gámez.
							Leer entrevista <a href="https://www.makingdiabeteseasier.com/es/consejos-sobre-diabetes/vivir-con-diabetes/conceptos-sobre-diabetes">aquí</a>
						</p>
						<a className="btn btn-outline-primary" href="#!">
							Leer más
						</a>
					</div>
				</div>
				<Calltoaction texto={"Tenemos Diabetes. Nos acompaña, no nos detiene. - Chris Olsen."} />
				{/* Content Row*/}
				<div className="row gx-4 gx-lg-5">
					<div className="col-md-4 mb-5">
						<Destacado titulo={"Foro"} texto={"Haz preguntas, comparte experiencias y sugerencias. Un espacio para crear comunidad."} label={<Link to="/foro">Entrar</Link>} />
					</div>
					<div className="col-md-4 mb-5">
						<Destacado titulo={"Te lo cambio. Te lo regalo."} texto={"Un espacio para que puedas intercambiar o regalar insumos. Lo que no necesitas, a alguien le puede servir."} label={<Link to="/cambioregalo">Entrar</Link>} />
					</div>
					<div className="col-md-4 mb-5">
						<Destacado titulo={"Nuestros Partners"} texto={"Ingresa aquí para conocer a nuestros partners. Empresas que comercializan productos que seguro te van a interesar."} label={<Link to="/comercios">Entrar</Link>} />
					</div>
				</div>
			</div>

		</>

	)
};
export default Home;

