import React from 'react';

const Destacado = (props) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h2 className="card-title">{props.titulo}</h2>
        <p className="card-text">{props.texto}</p>
      </div>
      <div className="card-footer">
        <a className="btn btn-primary btn-sm" href="#!">{props.label}</a>
      </div>
    </div>
  );
};
export default Destacado;

