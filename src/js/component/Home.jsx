import React from 'react';
import Card from './Card';
import NavBar from './NavBar';
import Banner from './Banner';
import Footer from './Footer';
import img1 from "./../img/blackTea.jpeg";
import img2 from "./../img/greenTea.jpeg";
import img3 from "./../img/Oolong.jpeg";
import img4 from "./../img/puErh.jpeg";



const Home = () => {
	return (
		<>
			<NavBar bootstrap={"Start Bootstrap"} home={"Home"} about={"About"} services={"Services"} contact={"Contact"} />
			<div className="container my-container d-flex justify-content-center align-items-center">
				<div className="col-md-12">
					<Banner titulo={"The Wonderful World of Tea"} texto={"If you haven't discovered the wonderful magic held within the leaves of the Camellia Sinensis plant yet, then quite frankly…Where on Earth have you been?!?! All tea, Green, White, Oolong, Pu-erh and Black are produced from the leaves and buds of the amazing Camellia Sinensis plant."} label={"More Info"} />

					<div className="container">
						<div className="row">
							<div className="col-md-3">
								<div className="card">
									<Card img={img1} titulo={"Black Tea"} texto={"Due to the fermentation process, pu-erh tea has a unique pungent or “funky” taste."} label={"Find out more"} />
								</div>
							</div>
							<div className="col-md-3">
								<div className="card">
									<Card img={img2} titulo={"Green Tea"} texto={"Green tea is considered one of the healthiest beverages on the planet with many health benefits."} label={"Find out more"} />
								</div>
							</div>
							<div className="col-md-3">
								<div className="card">
									<Card img={img3} titulo={"Oolong Tea"} texto={"Oolong, also known as blue tea, is a variety of Chinese tea that lies between black and green tea."} label={"Find out more"} />
								</div>
							</div>
							<div className="col-md-3">
								<div className="card">
									<Card img={img4} titulo={"PuErh Tea"} texto={"Pu-erh tea contains antioxidants that might help protect the heart and blood vessels."} label={"Find out more"} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer footer= {"Copyright @ Your Website 2019"}/>
		</>
	)
}
export default Home;

