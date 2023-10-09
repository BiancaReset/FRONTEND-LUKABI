import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faComment, faFlag } from "@fortawesome/free-regular-svg-icons";
import { faSyringe, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const AdminHome = ({ users, products, topics, comments, onClick }) => {
  return (
    <div className="mt-5 container  ">
      <div className="row justify-contenter-center">
        <div
          onClick={() => onClick(1)}
          className="col-lg-3 col-md-6 m-1 user-card col-sm-12 shadow cards rounded  "
        >
          <FontAwesomeIcon icon={faUser} style={{ fontSize: "50px" }} />
          Usuarios totales: {users}
          <a href="">
            Ver mas <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        {/* <div
          onClick={() => onClick(2)}
          className="col-lg-3 col-sm-12 m-1 col-md-6  product-card shadow cards rounded "
        >
          <FontAwesomeIcon icon={faComment} style={{ fontSize: "50px" }} />
          Comentarios reportados: 5
          <a href="">
            Ver mas <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div> */}
        <div
          onClick={() => onClick(3)}
          className="col-lg-3 col-sm-12 m-1 col-md-6  comments-card shadow cards  rounded"
        >
          <FontAwesomeIcon icon={faFlag} style={{ fontSize: "50px" }} />
          Temas reportados: {topics}
          <a href="">
            Ver mas <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        <div
          onClick={() => onClick(4)}
          className="col-lg-3 col-sm-12 m-1 col-md-6 topic-card shadow cards  rounded"
        >
          <FontAwesomeIcon icon={faSyringe} style={{ fontSize: "50px" }} />
          Productos reportados: {products}
          <a href="">
            Ver mas <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
    </div>
  );
};
