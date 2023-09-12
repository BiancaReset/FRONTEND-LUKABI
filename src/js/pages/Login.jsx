import React from 'react'
import logo from "../img/logo.jpeg"

const Login = () => {
    return (
        <>
            <div className="container">
                <div className="text-center mt-5">
                    <main className="form-signin w-100 m-auto">
                        <form>
                            <img
                                className="mb-4"
                                src={logo}
                                alt=""
                                width={100}
                                height={90}
                            />
                            <h1 className="h3 mb-3 fw-normal">Iniciar sesión</h1>
                            <div className="form-floating">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInput">Correo electrónico</label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                />
                                <label htmlFor="floatingPassword">Contraseña</label>
                            </div>
                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" defaultValue="remember-me" /> Recordarme
                                </label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">
                                Ingresar
                            </button>
                        </form>
                    </main>
                </div>
            </div>
        </>

    )
}

export default Login;