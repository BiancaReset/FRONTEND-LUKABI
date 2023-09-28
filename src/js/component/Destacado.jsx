import React from 'react';
import { Link } from 'react-router-dom';

const Destacado = (props) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h2 className="card-title">{props.titulo}</h2>
        <p className="card-text">{props.texto}
        </p>
      </div>
      <div className="card-footer">
        <Link className="btn btn-warning" to={props.link}>{props.label}
        </Link>
      </div>
    </div>
  );
};
export default Destacado;

