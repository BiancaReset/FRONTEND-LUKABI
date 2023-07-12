import React from 'react';

const Banner = (props) => {
  return (
  <div class="h-100 p-5 bg-light border rounded-3">
          <h2>{props.titulo}</h2>
          <p>{props.texto}</p>
          <button class="btn btn-primary" type="button">{props.label}</button>
        </div>
  );
}

export default Banner;
