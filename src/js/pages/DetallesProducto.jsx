import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import colibri from "./../img/longLogo.png";
import img from "./../img/insulina.jpg";
import {
  faCircleUser,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";

export const DetallesProducto = () => {
  const [values, setValues] = useState({
    newComment: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const localUser = localStorage.getItem("user");
  const activeProduct = localStorage.getItem("product");
  const product = JSON.parse(activeProduct);
  const user = JSON.parse(localUser);

  const [comments, setComments] = useState([]);

  const postNewComment = async () => {
    const res = await fetch("http://127.0.0.1:5000/api/post_product_comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        producto_id: product.id,
        comentario: values.newComment,
      }),
    });
    setValues({ newComment: "" });
    getComments();
  };

  const getComments = async () => {
    const res = await fetch(
      `http://127.0.0.1:5000/api/product_comment/${product.id}`
    );
    const data = await res.json();
    setComments(data);
  };

  const editPost = async () => {
    const res = await fetch(
      `http://127.0.0.1:5000/api/update_comment_product/${commentId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.id,
          comentario: values.newComment,
        }),
      }
    );
    setValues({ newComment: "" });
    getComments();
  };

  const [commentId, setCommentId] = useState();

  const deleteComments = async () => {
    const res = await fetch(
      `http://127.0.0.1:5000/api/delete_product_comment/${commentId}`,
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
    getComments();
  }, []);

  return (
    localUser !== null &&
    activeProduct !== null && (
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
                  onClick={() => deleteComments()}
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
                  name="newComment"
                  value={values.newComment}
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
                  onClick={() => editPost()}
                  data-bs-dismiss="modal"
                  disabled={values.newComment.length < 2}
                >
                  Editar comentario
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-50 mt-5 d-flex justify-content-center align-items-center">
          <div className="px-5 mb-3">
            <Link
              className="rounded-circle bg-primary d-flex justify-content-center align-items-center"
              to="/cambioregalo"
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

        <div className="w-50 shadow  pb-4  mx-auto rounded-3 mt-3 d-grid ">
          <img src={colibri} className="card-img-top mb-3 col-12 rounded-top" />

          <div className="row px-5 ">
            <div className=" rounded-3 d-flex align-items-center col-md-12 col-lg-4">
              <img
                src={img}
                alt=""
                className="img-fluid "
                style={{ borderRadius: "10px" }}
              />
            </div>

            <div className=" py-3 col-lg-8 col-md-12">
              <div className="col-8  d-flex align-items-center mb-3 ">
                <FontAwesomeIcon
                  icon={faCircleUser}
                  style={{ fontSize: "35px" }}
                />{" "}
                <span className="text-center fw-semibold  mx-2 ">
                  {" "}
                  {product.user}{" "}
                </span>
                <small className="d-sm-none d-xs-none d-md-inline">
                  {" "}
                  Fecha: {product.fecha}
                </small>
              </div>
              <h1 style={{ fontWeight: "bold" }}>{product.titulo}</h1>
              <div className="text-secondary  mt-2">{product.comentario}</div>
            </div>
          </div>

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
            comments.map((comment, index) => (
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
                  {user.id === comment.user.id && (
                    <div
                      style={{ width: "10%" }}
                      className="d-flex justify-content-between"
                    >
                      <FontAwesomeIcon
                        style={{ cursor: "pointer" }}
                        icon={faTrashCan}
                        data-bs-toggle="modal"
                        data-bs-target="#DeleteModal"
                        onClick={() => setCommentId(comment.id)}
                      />
                      <FontAwesomeIcon
                        style={{ cursor: "pointer" }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => {
                          setCommentId(comment.id);
                          setValues({ newComment: comment.comentario });
                        }}
                        icon={faPenToSquare}
                      />
                    </div>
                  )}
                </div>
                {index !== comments.length - 1 && <hr />}
              </div>
            ))
          ) : (
            <div className=" px-5 mt-5">
              No hay comentarios sobre este producto
            </div>
          )}
        </div>
      </>
    )
  );
};
