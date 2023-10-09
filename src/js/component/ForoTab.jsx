import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareSquare,
  faFlag,
  faCircleUser,
} from "@fortawesome/free-regular-svg-icons";
import { Context } from "../../store/AppContext";
import { Tooltip } from "react-tooltip";

export const ForoTab = ({ titulo, fecha, user, comentario, id, onCLick }) => {
  const { actions } = useContext(Context);

  const post = { titulo, fecha, user, comentario, id };

  return (
    <>
      <div className="   p-3  mx-auto ">
        <div className="row">
          <div className="col-12  d-flex align-items-center mb-3 ">
            <FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "35px" }} />{" "}
            <span className="text-center fw-semibold  mx-2 "> {user} </span>
            <small className="d-sm-none d-md-inline"> Fecha: {fecha} </small>
          </div>

          <div className="col-12">
            <div>
              <Link
                to="/ForoComent/"
                className="fw-bold text-black"
                style={{ textDecoration: "none" }}
                onClick={() => actions.setActivePost(post)}
              >
                <strong>{titulo}</strong>
              </Link>
              <div className="row mt-1 ">
                <span className="text-secondary">{comentario}</span>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3  ">
            <div
              className="d-inline"
              data-tooltip-id="share"
              data-tooltip-content="Compartir"
              style={{ cursor: "pointer" }}
            >
              {/* <Tooltip id="share" /> */}
              <FontAwesomeIcon icon={faShareSquare} />{" "}
            </div>

            <div
              data-bs-toggle="modal"
              data-bs-target="#reportModal"
              className="ml-3 d-inline"
              style={{ cursor: "pointer" }}
              onClick={onCLick}
            >
              {/* <Tooltip id="report" /> */}
              <FontAwesomeIcon icon={faFlag} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
