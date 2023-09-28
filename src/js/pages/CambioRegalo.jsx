import React from 'react';
import CambioList from './CambioList';

const productosData = [
    {
        id: 1,
        titulo: 'Insulina',
        descripcion: 'INSULINA',
        imagen: require('../img/insulina.jpg').default,

    },
    {
        id: 2,
        titulo: 'logo',
        descripcion: 'GLUCOMETRO',
        imagen: require('../img/logo1.jpg').default,
    },
    {
        id: 3,
        titulo: 'Insulina',
        descripcion: 'LANCETAS',
        imagen: require('../img/insulina.jpg').default,
    },
    {
        id: 4,
        titulo: 'Insulina',
        descripcion: 'ENDULZANTE',
        imagen: require('../img/insulina.jpg').default,
    },
    {
        id: 5,
        titulo: 'Insulina',
        descripcion: 'hola',
        imagen: require('../img/insulina.jpg').default,
    },
    {
        id: 5,
        titulo: 'Insulina',
        descripcion: 'TIRAS DE CETONA',
        imagen: require('../img/insulina.jpg').default,
    },
    // Add more products as needed
];

const CambioRegalo = () => {
    return (
        <>
            <div className="d-flex justify-content-center mt-2 mb-2">
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    Agregar Producto
                </button>
            </div>

            {/* Render the new CambioList component */}
            {productosData.map(producto => (
                <CambioList
                    key={producto.id}  // Add a unique key for each item in the map
                    titulo={producto.titulo}
                    id={producto.id}
                    comentario={producto.descripcion}
                />
            ))}
        </>
    );
};

export default CambioRegalo;

