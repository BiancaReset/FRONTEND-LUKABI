import React from 'react';

const Destacado = (props) => {
  return (
    <div className="card">
      <img className="card-img-top img-fluid" src={props.img} style={{ width: "15%", height: "100px" }} alt="Destacado" />
      <h5 className="card-header">{props.titulo}</h5>
      <div className="card-body">
        <p className="card-text">{props.texto}</p>
        <a href="#" className="btn btn-warning">{props.boton}</a>
      </div>
    </div>
  );
}
export default Destacado;

