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
      token: null,
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
            token: data.access_token,
          });
        console.log(data);
        res.ok && navigate("/");
        res.ok && localStorage.setItem("user", JSON.stringify(data.user));
        res.ok &&
          localStorage.setItem("token", JSON.stringify(data.access_token));
        !res.ok && alert("usuario o contraseña incorrecta");
      },
      //funcion para eliminar datos del objeto user (deslogueo)
      logout: () => {
        localStorage.clear();
        setStore({
          user: null,
        });
        alert("Sesión finalizada");
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
