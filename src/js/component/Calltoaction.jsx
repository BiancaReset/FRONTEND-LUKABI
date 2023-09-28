import React from 'react';

const Calltoaction = (props) => {
    return (
        <div className="card text-white bg-secondary my-5 py-4 text-center">
            <div className="card-body">
                <h4 className="text-white m-0">{props.texto}</h4>
            </div>
        </div>
    );
};
export default Calltoaction;