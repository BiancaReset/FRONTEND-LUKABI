import React, { useState } from 'react';
import logo from '../img/logo.jpeg';

const Login = () => {
    const [values, setValues] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleLogin = (event) => {
        event.preventDefault();
        console.log(values);
    };

    return (
        <div className="container">
            <div className="text-center mt-5">
                <main className="form-signin w-100 m-auto">
                    <form onSubmit={handleLogin}>
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
                                type="text"
                                className="form-control"
                                name="username"
                                placeholder="Correo electrónico"
                                required=""
                                onChange={handleInputChange}
                                value={values.username}
                            />
                            <label htmlFor="floatingInput">Correo electrónico</label>
                            <div className="invalid-feedback">
                                Correo electrónico requerido
                            </div>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                required=""
                                onChange={handleInputChange}
                                value={values.password}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                            <div className="invalid-feedback">
                                Password requerido
                            </div>
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
    );
};

export default Login;