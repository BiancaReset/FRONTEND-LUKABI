import React, { useEffect, useState } from "react";
import { ForoTab } from "./ForoTab";

export const ReportedTopics = ({ temas, getTemas }) => {
  const [foroId, setForoId] = useState(0);
  const user = localStorage.getItem("user");

  const reportPost = async () => {
    const res = await fetch(`http://127.0.0.1:5000/api/update_foro/${foroId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: JSON.parse(user).id,
        activo: true,
      }),
    });

    res.ok && alert("Se ha reactivado el tema");
    getTemas();
  };

  let algunReporte = true;

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
                Reactivar tema
              </h1>
            </div>
            <div className="d-grid modal-body">
              <span>¿Estás seguro que deseas reactivar este tema?</span>
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
                onClick={() => reportPost()}
                data-bs-dismiss="modal"
              >
                Si
              </button>
            </div>
          </div>
        </div>
      </div>
      {temas.length !== 0 &&
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
          }) => {
            if (!activo) {
              algunReporte = false;
            }
            return (
              !activo && (
                <div className="" key={id}>
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
            );
          }
        )}
      {algunReporte && <div>No hay temas reportados</div>}
    </div>
  );
};
