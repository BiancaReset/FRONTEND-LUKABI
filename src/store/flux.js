<<<<<<< HEAD
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            name: 'Test Name'
        },
        actions: {
            greeting: () => {
                console.log("Test Function")
            }
        }
    }
}

export default getState;
=======
import { json } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      name: "Test Name",
      //objeto con los datos del usuario
      user: null,
      activePost: null,
    },
    actions: {
      //Función para conectar login con endpoint
      loginRequest: async (mail, pass, navigate) => {
        const res = await fetch("http://127.0.0.1:5000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            correoelectronico: mail,
            password: pass,
          }),
        });
        const data = await res.json();
        setStore({
          user: data.user,
        });
        res.ok && navigate("/");
        res.ok && localStorage.setItem("user", JSON.stringify(data.user));
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
>>>>>>> secciónforo
