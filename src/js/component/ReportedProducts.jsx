import React, { useState } from "react";
import CambioList from "../pages/CambioList";

export const ReportedProducts = ({ productos, getProductos }) => {
  const [productoId, setProductoId] = useState(0);
  const user = localStorage.getItem("user");
  let algunReporte = true;

  const reportProduct = async () => {
    const res = await fetch(
      `http://127.0.0.1:5000/api/update_producto/${productoId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: JSON.parse(user).id,
          activo: true,
        }),
      }
    );
    res.ok && alert("Producto reactivado");

    getProductos();
  };

  return (
    <div className="mt-5 w-75 mx-auto">
      <div
        className="modal fade"
        id="reportModal"
        tabIndex="-1"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="ModalLabel">
                Reactivar producto
              </h1>
            </div>
            <div className="d-grid modal-body">
              <span>¿Estás seguro que deseas reactivar este producto?</span>
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
                className="btn bg-success btn-sm text-white px-3 "
                onClick={() => reportProduct()}
                data-bs-dismiss="modal"
              >
                Si
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
      {productos.length !== 0 && (
        <div className="row px-5 my-3">
          {productos.map((producto) => {
            if (!producto.activo) {
              algunReporte = false;
            }
            return (
              !producto.activo && (
                <CambioList
                  fecha={producto.fecha}
                  key={producto.id} // Add a unique key for each item in the map
                  titulo={producto.nombre}
                  id={producto.id}
                  user={producto.user.nombre}
                  comentario={producto.descripcion}
                  onDeleteClick={() => setProductoId(producto.id)}
                  onEditClick={() => {
                    setProductoId(producto.id);
                  }}
                  isUser={
                    producto.user.id === JSON.parse(user).id ||
                    JSON.parse(user).role === "admin"
                  }
                />
              )
            );
          })}
        </div>
      )}
      {algunReporte && <div>No hay productos reportados</div>}
    </div>
  );
};
