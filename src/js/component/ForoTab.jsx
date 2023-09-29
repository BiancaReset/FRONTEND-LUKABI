import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareSquare, faComment, faBookmark, faFlag, faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { Context } from '../../store/AppContext';



export const ForoTab = ({ imagen, titulo, fecha, user, comentario, cantidad, id }) => {

    const { actions } = useContext(Context)

    const post = { titulo, fecha, user, comentario, id }


    return (
        <>
            <div className="card mt-2">
                <div className="row">
                    <div className="col-2 d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faCircleUser} style={{ fontSize: '70px' }} /></div>
                    <div className="col-10">
                        <div >
                            <Link to="/ForoComent/" onClick={() => actions.setActivePost(post)} ><strong>{titulo}</strong></Link>
                            <div className="row"> <span>{comentario}</span></div>
                            <div className="row"> <small> publicado por: {user}   </small></div>
                            <div className="row"> <small>   Fecha: {fecha} </small></div>
                        </div>
                        <div className="row mb-2">
                            <div className="col "><FontAwesomeIcon icon={faComment} /> <small>comentarios:{cantidad}</small> </div>
                            <div className="col"> <FontAwesomeIcon icon={faShareSquare} /> <small>compartir</small></div>
                            <div className="col"><FontAwesomeIcon icon={faBookmark} /> <small>guardar</small></div>
                            <div className="col"><FontAwesomeIcon icon={faFlag} /><small> reportar</small></div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}