import React from 'react';

const comentarios = ["soy el comentario 1", "soy el comentario 2", "soy el comentario 3"]

export const ForoComent = ({ imagen, titulo, fecha, user, comentario, cantidad }) => {
    return (
        <>
            <div className="row">

                <div className="col-2">Colibri</div>
                <div className="col-8">

                    <div className="row">publicado por: {user} y fecha: {fecha}</div>
                    <div className="row"><strong>{titulo}</strong></div>
                    <div className="row">{comentario}</div>
                    <div className="row">posible imagen o video publicado</div>
                    <div className="row">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Agrega tu comentario</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button className="btn btn-primary me-md-2" type="button">Answer</button>

                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="card">
                            {comentarios.map((comentario, index) => (
                                <div className="card-body" key={index}>
                                    {comentario}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="col-2">4 imagenes</div>

            </div>
        </>
    )
}