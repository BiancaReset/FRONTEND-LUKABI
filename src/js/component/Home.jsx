import React from 'react';
import {createRoot} from 'react-dom/client'

const root = createRoot (document.getElementById ["root]"]);
root.render[LandingPage];
 import LandingPage from './LandingPage';

 root.render[]



}
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg"; 
import Home from "src/js/component/Home.jsx";   
const Navbar = () => {
	return (
	  <navbar>
		<ul>
		  <li>Home</li>
		  <li>About</li>
		  <li>Services</li>
		  <li>Contact</li>
		</ul>
	  </navbar>
	);
  };
  const Card = () => {
	return (
	  <div className="card">
		<img src="path/to/image" alt="Card" />
		<h3>Pu-erh tea </h3>
		<p>Due to the fermentation process, pu-erh tea has a unique pungent or “funky” taste, but this is mixed with other flavors — such as sweetness, bitterness, and earthiness.</p>
	  </div>
	);
};

const Home = () => {
	return (
		<div className="text-center">
			<Card/>
			<Card/>
			<Card/>
			<Card/>

			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
