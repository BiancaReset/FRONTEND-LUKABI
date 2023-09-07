import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Destacado from './Destacado';
import foro from "./../img/foro.jpg";




const Home = () => {
	return (
		<>
			<NavBar diabeticlink={"DiabeticLink"} quienes={"Quiénes Somos"} Foro={"Foro"} cambioregalo={"Te lo Cambio/Regalo"} registroligin={"Registro/Login"} />
			<div>
				<img src="background.jpg" alt="Descripción de la imagen" className="background-image" />
			<div className="card">
					<Destacado img={foro} titulo={"Foro"} texto={"Ingresa a este espacio para hacer preguntas y conectar con otras personas que también son diabéticas."} boton={"Entrar"} />
				</div>
			</div>
			<Footer footer={"Copyright @ Your Website 2023"} />

		</>
	)
};
export default Home;

