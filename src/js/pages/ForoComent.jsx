import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/AppContext";
import Login from "./Login";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Imagehome from "../component/Imagehome";
import colibri from "./../img/colibri.png";

export const ForoComent = () => {
    const { store } = useContext(Context);
    const { activePost, user } = store;
    const [values, setValues] = useState({
        newComment: "",
        editedComment: "",
    }); console.log(user)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const [commentID, setCommentID] = useState(null);

    const localUser = localStorage.getItem("user");

    const [comments, setComments] = useState([]);
    const getComments = async () => {
        const res = await fetch(
            `http://127.0.0.1:5000/api/post_comments/${activePost.id}`
        );
        const data = await res.json();
        setComments(data);
    };
    const deleteComments = async (commentId) => {
        const res = await fetch(
            `http://127.0.0.1:5000/api/delete_comment/${commentId}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: user.id,
                }),
            }
        );

        getComments();
    };

    useEffect(() => {
        if (activePost && comments.length === 0) {
            try {
                getComments();
            } catch (error) {
                console.log("error", error);
            }
        }
    }, [activePost]);

    const editPost = async () => {
        const res = await fetch(
            `http://127.0.0.1:5000/api/update_comment/${commentID}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: user.id,
                    comentario: values.editedComment,
                }),
            }
        );
        setValues({ newComment: "", editedComment: "" });
        getComments();
    };

    const postNewComment = async () => {
        const res = await fetch("http://127.0.0.1:5000/api/post_comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: user.id,
                foro_id: activePost.id,
                comentario: values.newComment,
            }),
        });
        setValues({ newComment: "", editedComment: "" });
        getComments();
    };

    return localUser !== null && activePost !== null ? (
        <>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Edita tu comentario
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="d-grid modal-body">
                            <label htmlFor="">Nuevo comentario</label>
                            <textarea
                                onChange={handleInputChange}
                                name="editedComment"
                                value={values.editedComment}
                                type="text"
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary "
                                onClick={() => editPost()}
                                data-bs-dismiss="modal"
                            >
                                Editar comentario
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5" style={{ minHeight: "60vh" }}>
                <div className="col-2">
                    <Imagehome image={colibri} />
                </div>
                <div className="col-8">
                    <h1 className="row" style={{ fontWeight: "bold" }}>
                        {activePost.titulo}</h1>

                    <div className="row">
                        publicado por: {activePost.user}

                    </div>
                    <div className="row">
                        Fecha: {activePost.fecha}

                    </div>

                    <h3 className="row">{activePost.comentario}</h3>

                    <div className="row">
                        <div className="mb-3 p-0">

                            <textarea placeholder="Agrega tu comentario aqui"
                                onChange={handleInputChange}
                                value={values.newComment}
                                name="newComment"
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                            ></textarea>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button
                                className="btn btn-primary me-md-2"
                                onClick={() => postNewComment()}
                                type="button"
                            >
                                Answer
                            </button>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="card py-3">
                            {comments.length !== 0 ? (
                                comments.map((comment, index) => (
                                    <>
                                        <div
                                            className="card-body d-flex justify-content-between "
                                            key={index}
                                        >
                                            {comment.comentario}
                                            {user.id === comment.user_id && (
                                                <div
                                                    style={{ width: "5%" }}
                                                    className="d-flex justify-content-between"
                                                >
                                                    <FontAwesomeIcon
                                                        style={{ cursor: "pointer" }}
                                                        icon={faTrashCan}
                                                        onClick={() => deleteComments(comment.id)}
                                                    />
                                                    <FontAwesomeIcon
                                                        style={{ cursor: "pointer" }}
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                        onClick={() => setCommentID(comment.id)}
                                                        icon={faPenToSquare}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        {index !== comments.length - 1 && <hr />}
                                    </>
                                ))
                            ) : (
                                <div className="card-body">No hay comentarios</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <Login />
    );
};
