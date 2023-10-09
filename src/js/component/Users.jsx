import React, { useEffect, useState } from "react";

export const Users = ({ users }) => {
  return (
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
                onClick={() => deleteProducto(idToDelete)}
                data-bs-dismiss="modal"
              >
                Si
              </button>
            </div>
          </div>
        </div>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Correo</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.nombre}</td>
                <td>{user.apellido}</td>
                <td>{user.correo}</td>
                <td>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#DeleteModal"
                    type="button"
                    class="btn btn-danger"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
