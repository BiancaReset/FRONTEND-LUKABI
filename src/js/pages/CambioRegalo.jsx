import React, { useState } from 'react';
import { logo1 } from "./../img/logo1.jpg";


const AgregarProducto = () => {
    // Define el estado para los campos del formulario
    const [producto, setProducto] = useState({
        nombre: '',
        direccion: '',
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
    const handleImageChange = (event) => {
        const file = event.target.files[0]; // Obtiene el archivo de la lista de archivos seleccionados
        // Puedes realizar acciones con el archivo, como mostrar una vista previa o cargarlo en el servidor
        console.log('Imagen seleccionada:', file);
    };

    const MiComponente = () => {
        return (
            <div>
                <h1>Mi Página con Imágenes</h1>
                <img src="{logo.jpg}" alt="Descripción de la imagen" fluid />
            </div>
        );
    }


    return (
        <div className="container mt-4 centered-form">
            <h2>Agregar Producto</h2>
            <form onSubmit={handleSubmit} enctype="multipart/form-data">
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
                    <label htmlFor="dirección">Direccion de entrega</label>
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
                <div className="form-group">
                    <label htmlFor="imagen">Imagen del Producto</label>
                    <       input
                        type="file"
                        accept="image/*"
                        className="form-control-file"
                        id="imagen"
                        name="imagen"
                        onChange={handleImageChange}
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
