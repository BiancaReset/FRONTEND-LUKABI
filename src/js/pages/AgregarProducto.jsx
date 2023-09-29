import React, { useState } from 'react';


const AgregarProducto = ({ handleInputChange, handleSubmit, producto }) => {
    // Define el estado para los campos del formulario

    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre del Producto</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        value={producto.nombre}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="direccion">direccion</label>
                    <input
                        type="text"
                        className="form-control"
                        id="direccion"
                        name="direccion"
                        value={producto.direccion}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción</label>
                    <textarea
                        className="form-control"
                        id="descripcion"
                        name="descripcion"
                        value={producto.descripcion}
                        onChange={handleInputChange}
                    />
                </div>
            </form>
        </div>
    );
};

export default AgregarProducto;
