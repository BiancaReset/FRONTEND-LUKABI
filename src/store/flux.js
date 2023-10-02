import { json } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      API_URL: "http://127.0.0.1:5000",
      name: "Test Name",
      //objeto con los datos del usuario
      user: null,
      activePost: null,
      activeProducto: null,
    },
    actions: {
      //Función para conectar login con endpoint
      loginRequest: async (mail, pass, navigate) => {
        const { API_URL } = getStore();
        const res = await fetch(`${API_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            correo: mail,
            password: pass,
          }),
        });
        const data = await res.json();
        console.log(data);
        res.ok &&
          setStore({
            user: data.user,
          });
        res.ok && navigate("/");
        res.ok && localStorage.setItem("user", JSON.stringify(data.user));
        !res.ok && alert("usuario o contraseña incorrecta");
      },
      //funcion para eliminar datos del objeto user (deslogueo)
      logout: () => {
        localStorage.clear();
        setStore({
          user: null,
        });
      },
      // Funcion para setear el post o tema que queremos abrir y comentar
      setActivePost: (post) => {
        localStorage.setItem("post", JSON.stringify(post));
        setStore({
          activePost: post,
        });
      },

      setActiveProduct: (product) => {
        localStorage.setItem("product", JSON.stringify(product));
        setStore({
          activePost: product,
        });
      },

      getUser: () => {
        localStorage.getItem("post") &&
          setStore({ activePost: JSON.parse(localStorage.getItem("post")) });
        localStorage.getItem("user") &&
          setStore({ user: JSON.parse(localStorage.getItem("user")) });
      },
    },
  };
};
222770201;
export default getState;
