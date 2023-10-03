import React, { useState } from "react";

const AgregarProducto = ({ handleInputChange, handleSubmit, producto }) => {
  // Define el estado para los campos del formulario

  return (
    <div className="mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre del Producto</label>
          <input
            type="text"
            className="form-control mb-2"
            id="nombre"
            name="nombre"
            value={producto.nombre}
            onChange={handleInputChange}
          />
          {producto.nombre.length === 1 && (
            <span className="alert alert-danger">
              Nombre debe contener al menos 2 caracteres{" "}
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección</label>
          <input
            type="text"
            className="form-control mb-2"
            id="direccion"
            name="direccion"
            value={producto.direccion}
            onChange={handleInputChange}
          />
          {producto.direccion.length !== 0 && producto.direccion.length < 5 && (
            <span className="alert alert-danger">
              Dirección debe contener al menos 5 caracteres{" "}
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            className="form-control mb-2"
            id="descripcion"
            name="descripcion"
            value={producto.descripcion}
            onChange={handleInputChange}
          />
          {producto.descripcion.length !== 0 &&
            producto.descripcion.length < 5 && (
              <span className="alert alert-danger">
                Descripción debe contener al menos 5 caracteres{" "}
              </span>
            )}
        </div>
      </form>
    </div>
  );
};

export default AgregarProducto;
