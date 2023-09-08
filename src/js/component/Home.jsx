import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Destacado from './Destacado';
import forum from "./../img/forum.jpeg";
import background from "./../img/background.jpg"



const Home = () => {
	return (
		<>
			<div className="container">
				<img img src={background} alt="Fondo" className="background-image" />
				<div className="content">
					<NavBar diabeticlink={"DiabeticLink"} quienes={"Quiénes Somos"} foro={"Foro"} cambioregalo={"Te lo Cambio/Regalo"} registrologin={"Registro/Login"} />
					<div className="contenedor-destacado">
						<Destacado img={forum} titulo={"Foro"} texto={"Ingresa a este espacio para hacer preguntas y conectar con otras personas que también son diabéticas."} label={"Entrar"} />
					</div>
					<Footer footer={"Copyright @ Your Website 2023"} />
				</div>
			</div>
		</>
	)
};
export default Home;

