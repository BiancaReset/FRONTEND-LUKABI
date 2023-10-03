import React, { useContext } from "react";
import logo from "../img/logo.jpeg";
import { Link } from "react-router-dom";
import { Context } from "../../store/AppContext";
import Login from "./Login";

const Profile = () => {
  const { store } = useContext(Context);
  const { user } = store;
  const localUser = localStorage.getItem("user");

  return localUser !== null && user !== null ? (
    <>
      <div className="py-5 text-center">
        <img
          className="d-block mx-auto mb-1"
          src={logo}
          alt=""
          width={100}
          height={90}
        />
        <h2>Mi Perfil</h2>
      </div>
      <section className="py-5" style={{ backgroundColor: "#eee" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 w-75 mx-auto">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Nombre</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.nombre}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Apellido</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.apellido}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Correo</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.correo}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Dirección</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.direccion}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">País</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.pais}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Región</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.region}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Fecha de nacimiento</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.fechanac}</p>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
              {/* <div className="row">
                                    <div className="col-md-6">
                                        <div className="card mb-4 mb-md-0">
                                            <div className="card-body">
                                                <p className="mb-4">
                                                    <span className="text-primary font-italic me-1">
                                                        <Link className="nav-link" to="/foro">Ingresar al Foro</Link>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card mb-4 mb-md-0">
                                            <div className="card-body">
                                                <p className="mb-4">
                                                    <span className="text-primary font-italic me-1">
                                                        <Link className="nav-link" to="/cambioregalo">Ingresar a Te lo Cambio/Regalo</Link>
                                                    </span>
                                                    <Link className="nav-link" to="/comercios">ver Comercios</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  ) : (
    <Login />
  );
};
export default Profile;
