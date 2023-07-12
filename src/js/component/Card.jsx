import React from 'react';

const Card = (props) => {
	return (
		<div className="Card">
			<img className="card-img-top img-fluid" src={props.img} style={{ width: 200, height: 100 }} alt="Card" />
			<div className="card-body text-center">
				<h5 className="card-title h6">{props.titulo}</h5>
				<p className="card-text small">{props.texto}</p>
				<div className="text-center d-flex">
					<div class="p-2">
						<a href="#" className="btn btn-primary">{props.label}</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
