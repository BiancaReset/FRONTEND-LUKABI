import React from 'react';

const ImagePlaceholder = ({ imagen }) => {
    return (
        <div>
            <img src={imagen} alt="Imagen del Producto" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        </div>
    );
};

export default ImagePlaceholder;



