import React, { useState, useEffect } from "react";
import { ForoTab } from "../component/ForoTab";
import colibri from "./../img/longLogo.png";
import Login from "./Login";

const Foro = () => {
  const user = localStorage.getItem("user");

  const [temas, setTemas] = useState([]);
  const [values, setValues] = useState({
    title: "",
    content: "",
    report: "",
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
      report: "",
    });
    getTemas();
  };

  const isDisable = values.content.length >= 10 && values.title.length >= 3;

  const [foroId, setForoId] = useState(0);

  const reportPost = async () => {
    const res = await fetch(`http://127.0.0.1:5000/api/update_foro/${foroId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: JSON.parse(user).id,
        comentario_rep: values.report,
        activo: false,
      }),
    });

    res.ok && alert("Tema reportado, sera revisado por el administrador");
    setValues({
      title: "",
      content: "",
      report: "",
    });
    getTemas();
  };

  return user ? (
    <div className="w-50 shadow  mx-auto rounded-3 my-5 d-grid ">
      <img src={colibri} className="card-img-top mb-3 col-12 rounded-top" />
      <h1 className="px-5">Foro</h1>
      <span className="text-secondary px-5">
        Haz preguntas, comparte experiencias y sugerencias. Un espacio para
        crear comunidad.
      </span>
      <div className="px-5">
        <button
          className="btn bg-primary btn-sm text-white mt-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style={{}}
          type="button"
        >
          + Añadir Tema
        </button>
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

      <div className="row my-5 mx-auto">
        <div className="col-12">
          {" "}
          {temas.length !== 0 ? (
            temas.map(
              ({
                comentario,
                id,
                contenido,
                fecha,
                titulo,
                user,
                index,
                activo,
              }) =>
                activo && (
                  <div key={id}>
                    <ForoTab
                      titulo={titulo}
                      user={user.nombre}
                      fecha={fecha}
                      comentario={contenido}
                      cantidad={comentario}
                      id={id}
                      onCLick={() => setForoId(id)}
                    />
                    {index !== temas.length - 1 && (
                      <div className="mt-2  mx-auto">
                        <hr />
                      </div>
                    )}
                  </div>
                )
            )
          ) : (
            <div>No hay temas en este foro</div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <Login />
  );
};
export default Foro;
