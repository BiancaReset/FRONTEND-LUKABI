import React from 'react';

const Imagehome = (props) => {
    return (

        <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src={props.image}
            alt="imagen del home"
        />
    );
}
export default Imagehome;