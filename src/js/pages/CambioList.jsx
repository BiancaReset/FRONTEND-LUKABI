// CambioList.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare, faComment, faBookmark, faFlag, faCircleUser, faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { Context } from '../../store/AppContext';

const CambioList = ({ imagen, titulo, fecha, user, comentario, cantidad, id, buttonedit, handleDelete }) => {
    const { actions } = useContext(Context);
    const post = { titulo, fecha, user, comentario, id };

    return (
        <>
            <div className="card mt-2">
                <div className="row">
                    <div className="col-2 d-flex justify-content-center align-items-center">
                        <img src={imagen} />
                    </div>
                    <div className="col-10">
                        <div>
                            <div className="row"> <span>{titulo}</span></div>
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
                            <div className="col">
                                <FontAwesomeIcon icon={faTrashCan} style={{ cursor: "pointer" }} onClick={handleDelete} /> <small>eliminar</small>
                            </div>
                            <div className="col">
                                {buttonedit}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CambioList;

