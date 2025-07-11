import React from "react";

const CardComponent = ({ title, text, imgSrc, buttonText, buttonLink }) => {
	return (
		<div className="col-md-3 mt-3 mb-3">
			<div className="card">
				<img src={imgSrc} className="card-img-top" alt={title} />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{text}</p>
					<a href={buttonLink} className="btn btn-primary">{buttonText}</a>
				</div>
			</div>
		</div>
	);
};

export default CardComponent;