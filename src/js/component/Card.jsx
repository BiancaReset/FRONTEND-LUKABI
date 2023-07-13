import React from 'react';

const Card = (props) => {
	return (
		<div className="card">
			<img className="card-img-top img-fluid" src={props.img} style={{ width: "100%", height: "200px" }} alt="Card" />
			<div className="card-body text-center">
				<h5 className="card-title h6">{props.titulo}</h5>
				<p className="card-text small">{props.texto}</p>
			</div>
			<div className="card-footer text-center">
				<a href="#" className="btn btn-primary">{props.label}</a>
			</div>
		</div>
	);
}

export default Card;
