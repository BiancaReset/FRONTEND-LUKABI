import React, { useState, useEffect } from "react";
import { ForoTab } from "../component/ForoTab";

import colibri from "./../img/longLogo.png";
import Login from "./Login";
import { Container, Button } from "react-floating-action-button";

const Foro = () => {
  const user = localStorage.getItem("user");

  const [temas, setTemas] = useState([]);
  const [values, setValues] = useState({
    title: "",
    content: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const getTemas = async () => {
    const res = await fetch("http://127.0.0.1:5000/api/post_topic_all");
    const data = await res.json();
    setTemas(data);
  };

  useEffect(() => {
    try {
      getTemas();
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const createNewPost = async () => {
    const res = await fetch("http://127.0.0.1:5000/api/post_topic", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: JSON.parse(user).id,
        titulo: values.title,
        contenido: values.content,
      }),
    });
    setValues({
      title: "",
      content: "",
    });
    getTemas();
  };

  const isDisable = values.content.length >= 10 && values.title.length >= 3;
  console.log(isDisable);

  return user ? (
    <div className="w-50 shadow  mx-auto rounded-3 mt-5 d-grid ">
      <img src={colibri} className="card-img-top mb-3 col-12 rounded-top" />
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
                Crea un tema
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className=" d-grid modal-body">
              <label htmlFor="">Titulo</label>
              <input
                onChange={handleInputChange}
                name="title"
                value={values.title}
                type="text"
                className="mb-2"
              />
              {values.title.length !== 0 && values.title.length < 3 && (
                <span className="alert alert-danger">
                  Titulo debe contener al menos 3 caracteres{" "}
                </span>
              )}

              <label htmlFor="">Contenido</label>
              <textarea
                className="mb-2"
                onChange={handleInputChange}
                name="content"
                value={values.content}
                type="text"
              />
              {values.content.length !== 0 && values.content.length < 10 && (
                <span className="alert alert-danger">
                  Contenido debe contener al menos 10 caracteres{" "}
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
                onClick={() => createNewPost()}
                className="btn bg-primary btn-sm text-white"
                data-bs-dismiss="modal"
                disabled={!isDisable}
              >
                Crear tema
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5 mx-auto">
        <div className="col-12">
          {" "}
          {temas.length !== 0 ? (
            temas.map(
              ({ comentario, id, contenido, fecha, titulo, user, index }) => (
                <div key={id}>
                  <ForoTab
                    titulo={titulo}
                    user={user.nombre}
                    fecha={fecha}
                    comentario={contenido}
                    cantidad={comentario}
                    id={id}
                  />
                  {index !== temas.length - 1 && (
                    <hr className="m-0 w-75 mx-auto" />
                  )}
                </div>
              )
            )
          ) : (
            <div>No hay temas en este foro</div>
          )}
        </div>
      </div>
      <Container>
        <div
          style={{ cursor: "pointer" }}
          className="bg-transparent border-0"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <Button
            className="bg-primary"
            tooltip="Crear tema"
            icon="fas fa-plus"
            // style={{backgroundColor: ''}}
          />
        </div>
      </Container>
    </div>
  ) : (
    <Login />
  );
};
export default Foro;
