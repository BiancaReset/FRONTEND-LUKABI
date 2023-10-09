import React, { useState, useEffect } from "react";
import CambioList from "./CambioList";
import AgregarProducto from "./AgregarProducto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import Login from "./Login";
import colibri from "./../img/longLogo.png";
import { Container, Button } from "react-floating-action-button";

const CambioRegalo = () => {
  // Define el estado para los campos del formulario
  const [producto, setProducto] = useState({
    nombre: "",
    direccion: "",
    descripcion: "",
    report: "",
  });

  // Manejar cambios en los campos del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProducto({
      ...producto,
      [name]: value,
    });
  };

  const isPostDisabled =
    producto.nombre.length >= 2 &&
    producto.direccion.length >= 5 &&
    producto.descripcion.length >= 5;

  // Manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor o realizar validaciones
    console.log("Producto enviado:", producto);
  };
  const [productos, setProductos] = useState([]);
  const [idToDelete, setIdToDelete] = useState(null);
  const [idToEdit, setIdToEdit] = useState(null);
  const getProductos = async () => {
    const res = await fetch("http://127.0.0.1:5000/post_producto");
    const data = await res.json();
    setProductos(data);
    // console.log(data);
  };
  useEffect(() => {
    try {
      getProductos();
    } catch (error) {
      console.log("error", error);
    }
  }, []);
  const user = localStorage.getItem("user");
  const postProducto = async () => {
    const res = await fetch("http://127.0.0.1:5000/api/post_producto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: JSON.parse(user).id,
        nombre: producto.nombre,
        direccion: producto.direccion,
        descripcion: producto.descripcion,
      }),
    });
    setProducto({
      nombre: "",
      direccion: "",
      descripcion: "",
      report: "",
    });
    getProductos();
  };
  const deleteProducto = async (productoId) => {
    const res = await fetch(
      `http://127.0.0.1:5000/api/delete_producto/${productoId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: JSON.parse(user).id,
        }),
      }
    );

    getProductos();
  };

  const editProducto = async () => {
    const res = await fetch(
      `http://127.0.0.1:5000/api/update_producto/${idToEdit}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: JSON.parse(user).id,
          nombre: producto.nombre,
          direccion: producto.direccion,
          descripcion: producto.descripcion,
        }),
      }
    );
    setProducto({
      nombre: "",
      direccion: "",
      descripcion: "",
      report: "",
    });
    getProductos();
  };

  console.log(productos);
  const reportProduct = async () => {
    const res = await fetch(
      `http://127.0.0.1:5000/api/update_producto/${idToEdit}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: JSON.parse(user).id,
          nombre: producto.nombre,
          direccion: producto.direccion,
          descripcion: producto.descripcion,
          activo: false,
          comentario_rep: producto.report,
        }),
      }
    );
    res.ok && alert("Tema reportado, sera revisado por el administrador");
    setProducto({
      nombre: "",
      direccion: "",
      descripcion: "",
      report: "",
    });
    getProductos();
  };

  return user ? (
    <>
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="editModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Editar producto
              </h1>
            </div>
            <div className=" d-grid modal-body">
              <AgregarProducto
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                producto={producto}
              />
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
                onClick={() => editProducto()}
                className="btn bg-primary btn-sm text-white "
                data-bs-dismiss="modal"
                disabled={!isPostDisabled}
              >
                Editar Producto
              </button>
            </div>
          </div>
        </div>
      </div>
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
                onClick={() => deleteProducto(idToDelete)}
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
                value={producto.report}
                type="text"
              />
              {producto.report.length !== 0 && producto.report.length < 5 && (
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
                onClick={() => reportProduct()}
                className="btn bg-primary btn-sm text-white"
                data-bs-dismiss="modal"
                disabled={producto.report.length < 5}
              >
                Reportar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-50 shadow  mx-auto rounded-3 mt-5 d-grid ">
        <img src={colibri} className="card-img-top mb-3 col-12 rounded-top" />
        <h1 className="px-5">Te lo cambio o regalo</h1>
        <span className="text-secondary px-5">
          Un espacio para que puedas intercambiar o regalar insumos. Lo que no
          necesitas, a alguien le puede servir.
        </span>
        <div className="px-5">
          <button
            className="btn bg-primary btn-sm text-white mt-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{}}
            type="button"
          >
            + Agregar producto
          </button>
        </div>
        {productos.length !== 0 ? (
          <div className="row px-5 my-3">
            {productos.map(
              (producto) =>
                producto.activo && (
                  <CambioList
                    fecha={producto.fecha}
                    key={producto.id} // Add a unique key for each item in the map
                    titulo={producto.nombre}
                    id={producto.id}
                    user={producto.user.nombre}
                    comentario={producto.descripcion}
                    onDeleteClick={() => setIdToDelete(producto.id)}
                    onEditClick={() => {
                      setIdToEdit(producto.id);
                      setProducto({
                        nombre: producto.nombre,
                        direccion: producto.direccion,
                        descripcion: producto.descripcion,
                        report: "",
                      });
                    }}
                    isUser={
                      producto.user.id === JSON.parse(user).id ||
                      JSON.parse(user).role === "admin"
                    }
                  />
                )
            )}
          </div>
        ) : (
          <div className="text-center my-5">No hay productos para mostrar</div>
        )}
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Agregar Producto
              </h1>
            </div>
            <div className=" d-grid modal-body">
              <AgregarProducto
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                producto={producto}
              />
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
                onClick={() => postProducto()}
                className="btn bg-primary btn-sm text-white "
                data-bs-dismiss="modal"
                disabled={!isPostDisabled}
              >
                Agregar producto
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Render the new CambioList component */}
    </>
  ) : (
    <Login />
  );
};

export default CambioRegalo;
