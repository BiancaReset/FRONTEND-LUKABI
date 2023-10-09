import React, { useEffect, useState } from "react";
import colibri from "./../img/colibri.png";
import { AdminHome } from "../component/AdminHome";
import "../../styles/admin.css";
import { Users } from "../component/Users";
import { ReportedComments } from "../component/ReportedComments";
import { ReportedTopics } from "../component/ReportedTopics";
import { ReportedProducts } from "../component/ReportedProducts";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "./Login";

const Admin = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));
  const [temas, setTemas] = useState([]);
  const [users, setUsers] = useState([]);
  const [productos, setProductos] = useState([]);
  const [topicsComments, setTopicsComments] = useState([]);
  const [productsComments, setProductsComments] = useState([]);

  // const getProductsComments = async () => {
  //   const res = await fetch(
  //     `http://127.0.0.1:5000/api/product_comment/${product.id}`
  //   );
  //   const data = await res.json();
  //   setProductsComments(data);
  // };

  // const getComments = async () => {
  //   const res = await fetch(
  //     `http://127.0.0.1:5000/api/post_comments/${activePost.id}`
  //   );
  //   const data = await res.json();
  //   setTopicsComments(data);
  // };

  const getTemas = async () => {
    const res = await fetch("http://127.0.0.1:5000/api/post_topic_all");
    const data = await res.json();
    setTemas(data);
  };

  const getUser = async () => {
    const res = await fetch("http://127.0.0.1:5000/api/users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setUsers(data.users);
  };

  const getProductos = async () => {
    const res = await fetch("http://127.0.0.1:5000/informacion");
    const data = await res.json();
    setProductos(data);
    // console.log(data);
  };

  useEffect(() => {
    try {
      getTemas();
      getUser();
      getProductos();
      // getComments();
      // getProductsComments();
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const reportedTopics = temas.filter((x) => !x.activo);
  const reportedProducts = productos.filter((x) => !x.activo);

  return user ? (
    user.role === "admin" ? (
      <div className="d-flex">
        <div className="wrapper">
          <nav id="sidebar">
            <div className="sidebar-header">
              <img className="img-fluid rounded-3" src={colibri} alt="" />
            </div>

            <ul className="list-unstyled components">
              <p>Panel Administrador</p>
              <li className={`${pageIndex === 0 && "active"}`}>
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className=""
                  onClick={() => setPageIndex(0)}
                >
                  Home
                </a>
              </li>
              <li className={`${pageIndex === 1 && "active"}`}>
                <a onClick={() => setPageIndex(1)} href="#">
                  Usuarios
                </a>
              </li>
              <li className={`${pageIndex === 4 && "active"}`}>
                <a
                  onClick={() => setPageIndex(4)}
                  href="#pageSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className=""
                >
                  Productos
                </a>
              </li>
              <li className={`${pageIndex === 3 && "active"}`}>
                <a onClick={() => setPageIndex(3)} href="#">
                  Temas
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="justify-content-center w-100 p-5" id="content">
          {pageIndex !== 0 && (
            <div
              className="rounded-circle bg-primary d-flex float-start justify-content-center align-items-center mb-4"
              style={{
                width: "30px",
                height: "30px",
                cursor: "pointer",
              }}
              onClick={() => setPageIndex(0)}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ fontSize: "20px", color: "white" }}
              />{" "}
            </div>
          )}
          {pageIndex === 0 && (
            <AdminHome
              onClick={setPageIndex}
              users={users.length}
              comments
              products={reportedProducts.length}
              topics={reportedTopics.length}
            />
          )}
          {pageIndex === 1 && <Users users={users} />}
          {/* {pageIndex === 2 && (
            <ReportedComments
              productsComments={productsComments}
              topicsComments={topicsComments}
            />
          )} */}
          {pageIndex === 3 && (
            <ReportedTopics temas={temas} getTemas={getTemas} />
          )}
          {pageIndex === 4 && (
            <ReportedProducts
              getProductos={getProductos}
              productos={productos}
            />
          )}
        </div>
      </div>
    ) : (
      <div>No tiene permisos para acceder a esta pagina</div>
    )
  ) : (
    <Login />
  );
};

export default Admin;
