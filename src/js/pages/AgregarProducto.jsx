import React, { useState } from 'react';


const AgregarProducto = () => {
    // Define el estado para los campos del formulario
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
    });

    // Manejar cambios en los campos del formulario
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProducto({
            ...producto,
            [name]: value,
        });
    };

    // Manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor o realizar validaciones
        console.log('Producto enviado:', producto);
    };

    return (
        <div className="container mt-4">
            <h2>Agregar Producto</h2>
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
                    <label htmlFor="precio">Precio</label>
                    <input
                        type="number"
                        className="form-control"
                        id="precio"
                        name="precio"
                        value={producto.precio}
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
                <button type="submit" className="btn btn-primary">
                    Agregar Producto
                </button>
            </form>
        </div>
    );
};

export default AgregarProducto;
