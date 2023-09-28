// ProductoCard.jsx
import React from 'react';

const ProductoCard = ({ producto }) => {
    const { titulo, descripcion, imagen } = producto;

    return (
        <div className="card">
            <img src={imagen} className="card-img-top" alt={titulo} />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descripcion}</p>
            </div>
        </div>
    );
};

export default ProductoCard;



