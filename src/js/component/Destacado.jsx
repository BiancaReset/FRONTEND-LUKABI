import React from 'react';

const Destacado = (props) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h2 className="card-title">{props.titulo}</h2>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
          magni quas ex numquam, maxime minus quam molestias corporis quod,
          ea minima accusamus.
        </p>
      </div>
      <div className="card-footer">
        <a className="btn btn-primary btn-sm" href="#!">
          More Info
        </a>
      </div>
    </div>
  );
};
export default Destacado;

