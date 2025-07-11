import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import CardComponent from "./CardComponent.jsx";

//create your first component
const Home = () => {

	const cardsInfo = [
		{
			title: "Card title",
			text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
			imgSrc: "src/img/fondo-gris-liso-con-alta-calidad.jpg",
			buttonText: "Find out more!",
			buttonLink: "#"
		},
		{
			title: "Card title",
			text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
			imgSrc: "src/img/fondo-gris-liso-con-alta-calidad.jpg",
			buttonText: "Find out more!",
			buttonLink: "#"
		},
		{
			title: "Card title",
			text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
			imgSrc: "src/img/fondo-gris-liso-con-alta-calidad.jpg",
			buttonText: "Find out more!",
			buttonLink: "#"
		},
		{
			title: "Card title",
			text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
			imgSrc: "src/img/fondo-gris-liso-con-alta-calidad.jpg",
			buttonText: "Find out more!",
			buttonLink: "#"
		}
	];

	return (
		<>
			<nav className="navbar navbar-expand-lg" style={{ background: "#696969" }}>
				<div className="container-fluid">
					<div className="container d-flex justify-content-between">
						<a className="navbar-brand" href="#" style={{ color: "white" }}>Start Bootstrap</a>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="#" style={{ color: "white" }}>Home</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#" style={{ color: "#A9A9A9" }}>About</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#" style={{ color: "#A9A9A9" }}>Services</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#" style={{ color: "#A9A9A9" }}>Contact</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>



			<div className="container justify-content-center">
				{/* JUMBOTRON */}
				<div className="row">
					<div className="col-md-12 d-flex justify-content-center mt-3">
						<div className="card" style={{ width: "100%", background: "#F8F8FF", border: "none" }}>
							<div className="card-body ms-4">
								<h1 className="card-title mt-5 mb-3" style={{ fontSize: "50px", fontFamily: "sans-serif" }}>A Warm Welcome!</h1>
								<p className="card-text mb-4">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
								<a href="#" className="btn btn-primary mb-5">Call to action!</a>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					{cardsInfo.map((card, index) => (
						<CardComponent
							key={index}
							title={card.title}
							text={card.text}
							imgSrc={card.imgSrc}
							buttonText={card.buttonText}
							buttonLink={card.buttonLink}
						/>
					))}
				</div>



			</div>

			<div className="footer d-flex justify-content-center align-items-center" style={{ background: "#696969", color: "white", height: "15vh" }}>
				<p>Copyright © Gerardo Hirschhorn, 2025</p>
			</div>
		</>
	);
};

export default Home;