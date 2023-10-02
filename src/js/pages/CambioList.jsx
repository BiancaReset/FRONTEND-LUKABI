// CambioList.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { Context } from "../../store/AppContext";
import { Tooltip } from "react-tooltip";

const CambioList = ({
  imagen,
  titulo,
  fecha,
  user,
  comentario,
  id,
  onDeleteClick,
  onEditClick,
  isUser,
}) => {
  const { actions } = useContext(Context);
  const product = { titulo, fecha, user, comentario, id };

  return (
    <div className="col-md-6 col-lg-4 col-sm-12 mb-4 ">
      <div className="card px-0 ">
        <img
          src="https://placehold.co/600x400"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body " style={{ height: "150px" }}>
          <h5 className="card-title text-nowrap text-truncate overflow-hidden">
            {titulo}
          </h5>

          <p className="card-text text-secondary text-nowrap text-truncate">
            {comentario}
          </p>

          <div className="d-inline">
            {isUser && (
              <>
                <FontAwesomeIcon
                  style={{ cursor: "pointer" }}
                  icon={faTrashCan}
                  data-bs-toggle="modal"
                  data-bs-target="#DeleteModal"
                  onClick={onDeleteClick}
                />

                <FontAwesomeIcon
                  style={{ cursor: "pointer", marginLeft: "8px" }}
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                  onClick={onEditClick}
                  icon={faPenToSquare}
                />
              </>
            )}

            <FontAwesomeIcon
              style={{ cursor: "pointer", marginLeft: isUser ? "8px" : "" }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              icon={faFlag}
            />
          </div>

          <Link
            to="/detalle"
            className="btn bg-primary btn-sm text-white float-end"
            onClick={() => actions.setActiveProduct(product)}
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CambioList;
