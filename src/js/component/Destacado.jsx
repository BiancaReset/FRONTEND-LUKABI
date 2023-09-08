import React from 'react';

const Destacado = (props) => {
    return (
      <div className="contenedor-home">
        <img src={props.img} alt="Description of the image" className="img-destacado" />
        <div className="contenido-destacado">
          <h1>{props.titulo}</h1>
          <p>{props.texto}</p>
          <button className="boton-destacado" >{props.label}</button>
        </div>
      </div>
    );
  };
  export default Destacado;

