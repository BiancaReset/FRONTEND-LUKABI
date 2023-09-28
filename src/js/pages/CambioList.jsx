// CambioList.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare, faComment, faBookmark, faFlag, faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { Context } from '../../store/AppContext';

const CambioList = ({ imagen, titulo, fecha, user, comentario, cantidad, id }) => {
    const { actions } = useContext(Context);
    const post = { titulo, fecha, user, comentario, id };

    return (
        <>
            <div className="card mt-2">
                <div className="row">
                    <div className="col-2 d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon icon={faCircleUser} style={{ fontSize: '70px' }} />
                    </div>
                    <div className="col-10">
                        <div>
                            <div className="row"> <span>{comentario}</span></div>
                            <div className="row">
                                <small> publicado por: {user} Fecha: {fecha} </small>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col ">
                                <FontAwesomeIcon icon={faComment} /> <small>comentarios:{cantidad}</small>{' '}
                                <h3>{comentario}</h3>
                            </div>
                            <div className="col">
                                <FontAwesomeIcon icon={faShareSquare} /> <small>compartir</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CambioList;

