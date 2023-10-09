import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/AppContext";
import Login from "./Login";
import {
  faTrashCan,
  faPenToSquare,
  faCircleUser,
  faFlag,
} from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colibri from "./../img/longLogo.png";
import { Link } from "react-router-dom";

export const ForoComent = () => {
  const { store } = useContext(Context);
  const { activePost, user } = store;
  const [values, setValues] = useState({
    newComment: "",
    editedComment: "",
    report: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const [idToDelete, setIdToDelete] = useState(null);
  const [commentID, setCommentID] = useState(null);

  const localUser = localStorage.getItem("user");

  const [comments, setComments] = useState([]);
  const getComments = async () => {
    const res = await fetch(
      `http://127.0.0.1:5000/api/post_comments/${activePost.id}`
    );
    const data = await res.json();
    setComments(data);
    console.log(data);
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
    setValues({ newComment: "", editedComment: "", report: "" });
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
    setValues({ newComment: "", editedComment: "", report: "" });
    getComments();
  };

  const reportPost = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:5000/api/update_comment/${commentID}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user.id,
            comentario_rep: values.report,
            foro_id: activePost.id,
            activo: false,
          }),
        }
      );

      res.ok &&
        alert("Comentario reportado, sera revisado por el administrador");
      setValues({
        newComment: "",
        editedComment: "",
        report: "",
      });
      getComments();
    } catch (e) {
      console.log(e);
    }
  };

  const isEditBtnDisable = values.editedComment.length >= 2;
  return localUser !== null && activePost !== null ? (
    <>
      <div
        className="modal fade"
        id="DeleteModal"
        tabIndex="-1"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="ModalLabel">
                Eliminar comentario
              </h1>
            </div>
            <div className="d-grid modal-body">
              <span>¿Estás seguro que deseas eliminar este comentario?</span>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-secondary btn-sm text-white px-3"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                className="btn bg-danger btn-sm text-white px-3 "
                onClick={() => deleteComments(idToDelete)}
                data-bs-dismiss="modal"
              >
                Si
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="Modal"
        tabIndex="-1"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="ModalLabel">
                Escribe tu comentario
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="d-grid modal-body">
              <textarea
                className="mb-2"
                onChange={handleInputChange}
                value={values.newComment}
                name="newComment"
                placeholder="Tu comentario aqui"
                type="text"
              />
              {values.newComment.length === 1 && (
                <span className="alert alert-danger">
                  Cometario debe contener al menos 2 caracteres{" "}
                </span>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-secondary btn-sm text-white"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn bg-primary btn-sm text-white "
                onClick={() => postNewComment()}
                data-bs-dismiss="modal"
                disabled={values.newComment.length < 2}
              >
                Crear comentario
              </button>
            </div>
          </div>
        </div>
      </div>
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
              <textarea
                className="mb-2"
                onChange={handleInputChange}
                placeholder="Tu nuevo comentario"
                name="editedComment"
                value={values.editedComment}
                type="text"
              />
              {values.editedComment.length === 1 && (
                <span className="alert alert-danger">
                  Cometario debe contener al menos 2 caracteres{" "}
                </span>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-secondary btn-sm text-white"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn bg-primary btn-sm text-white "
                onClick={() => editPost()}
                data-bs-dismiss="modal"
                disabled={!isEditBtnDisable}
              >
                Editar comentario
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="reportModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Motivo del reporte
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className=" d-grid modal-body">
              <textarea
                className="mb-2"
                onChange={handleInputChange}
                name="report"
                value={values.report}
                type="text"
              />
              {values.report.length !== 0 && values.report.length < 5 && (
                <span className="alert alert-danger">
                  Contenido debe contener al menos 5 caracteres{" "}
                </span>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-secondary btn-sm text-white"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                onClick={() => reportPost()}
                className="btn bg-primary btn-sm text-white"
                data-bs-dismiss="modal"
                disabled={values.report.length < 5}
              >
                Reportar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-50 mt-5 d-flex justify-content-center align-items-center">
        <div className="px-5 mb-3">
          <Link
            className="rounded-circle bg-primary d-flex justify-content-center align-items-center"
            to="/foro"
            style={{
              width: "30px",
              height: "30px",
            }}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ fontSize: "20px", color: "white" }}
            />{" "}
          </Link>
        </div>
      </div>

      <div className="w-50 shadow pb-4  mx-auto rounded-3 mt-3 d-grid ">
        <img src={colibri} className="card-img-top mb-3 col-12 rounded-top" />

        <div className="col-12 px-5 d-flex align-items-center mb-3 ">
          <FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "35px" }} />{" "}
          <span className="text-center fw-semibold  mx-2 ">
            {" "}
            {activePost.user}{" "}
          </span>
          <small className="d-sm-none d-xs-none d-md-inline">
            {" "}
            Fecha: {activePost.fecha}{" "}
          </small>
        </div>
        <h1 className="px-5" style={{ fontWeight: "bold" }}>
          {activePost.titulo}
        </h1>
        <span className="text-secondary px-5 mt-3">
          {activePost.comentario}
        </span>
        <div className="px-5">
          <button
            className="btn bg-primary btn-sm text-white mt-3"
            data-bs-toggle="modal"
            data-bs-target="#Modal"
            style={{}}
            type="button"
          >
            + Añadir comentario
          </button>
        </div>

        {comments.length !== 0 ? (
          comments.map(
            (comment, index) =>
              comment.activo && (
                <div className="px-5 mt-5" key={comment.id}>
                  <div className="col-12  d-flex align-items-center mb-3 ">
                    <FontAwesomeIcon
                      icon={faCircleUser}
                      style={{ fontSize: "35px" }}
                    />{" "}
                    <span className="text-center fw-semibold  mx-2 ">
                      {" "}
                      {comment.user.nombre}{" "}
                    </span>
                  </div>
                  <div
                    className="card-body d-flex justify-content-between "
                    key={index}
                  >
                    {comment.comentario}
                    {(user.id === comment.user_id || user.role === "admin") && (
                      <div className="d-flex justify-content-between">
                        <FontAwesomeIcon
                          style={{ cursor: "pointer" }}
                          icon={faTrashCan}
                          data-bs-toggle="modal"
                          data-bs-target="#DeleteModal"
                          onClick={() => setIdToDelete(comment.id)}
                        />
                        <FontAwesomeIcon
                          style={{ cursor: "pointer" }}
                          className="mx-1"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => {
                            setCommentID(comment.id);
                            setValues({
                              ...values,
                              editedComment: comment.comentario,
                            });
                          }}
                          icon={faPenToSquare}
                        />
                        <FontAwesomeIcon
                          style={{ cursor: "pointer" }}
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                          onClick={() => {
                            setCommentID(comment.id);
                          }}
                          icon={faFlag}
                        />
                      </div>
                    )}
                  </div>
                  {index !== comments.length - 1 && <hr />}
                </div>
              )
          )
        ) : (
          <div className=" px-5 mt-5">No hay comentarios en este tema</div>
        )}
      </div>
    </>
  ) : (
    <Login />
  );
};
