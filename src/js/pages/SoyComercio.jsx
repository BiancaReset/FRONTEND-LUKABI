import React, { useState } from 'react'
import logo from "../img/logo.jpeg"


const SoyComercio = () => {
    /* hooks aqui
   funciones fetch metodo post 
   Funcion para dejar formulario en blanco nuevamente   */
    const [values, setValues] = useState({
        name: "",
        username: "",
        password: "",
        address: "",
        address2: "",
        country: "",
        region: "",
        description: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const handleRegistro = (event) => {
        event.preventDefault();
        console.log(values);
    };


    return (
        <>
            <div className="container">
                <main>
                    <div className="py-5 text-center">
                        <img
                            className="d-block mx-auto mb-4"
                            src={logo}
                            alt=""
                            width={100}
                            height={90}
                        />
                        <h2>Formulario de Registro</h2>
                        <p className="lead">
                            Ingresa tus datos para registarte en DiabeticLink
                        </p>
                    </div>
                    <div className="row g-5">
                        <div className="col-md-5 col-lg-4 order-md-last">
                        </div>
                        <div className="col-md-7 col-lg-8">
                            <h4 className="mb-3">Información de Registro</h4>
                            <form onSubmit={handleRegistro} className="needs-validation" noValidate="">
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label htmlFor="name" className="form-label">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            placeholder="Nombre"
                                            value={values.name}
                                            required=""
                                            onChange={handleInputChange}
                                        /* value={nombre} */
                                        />
                                        <div className="invalid-feedback">
                                            Nombre válido requerido
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="username" className="form-label">
                                            Correo electrónico
                                        </label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text">@</span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="username"
                                                placeholder="Correo electrónico"
                                                required=""
                                                onChange={handleInputChange}
                                                value={values.username}

                                            />
                                            <div className="invalid-feedback">
                                                Correo electrónico requerido
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>
                                        <div className="input-group has-validation">
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                placeholder="Password"
                                                required=""
                                                onChange={handleInputChange}
                                                value={values.password}

                                            />
                                            <div className="invalid-feedback">
                                                Password requerido
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12">
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="address" className="form-label">
                                            Dirección
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="address"
                                            placeholder="Avenida 123"
                                            required=""
                                            value={values.address}
                                            onChange={handleInputChange}

                                        />
                                        <div className="invalid-feedback">
                                            Por favor ingresar una dirección válida
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="address2" className="form-label">
                                            Casa u oficina Nº <span className="text-muted">(Opcional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="address2"
                                            value={values.address2}
                                            placeholder="Casa u oficina Nº"
                                            onChange={handleInputChange}

                                        />
                                    </div>
                                    <div className="col-md-5">
                                        <label htmlFor="country" className="form-label">
                                            País
                                        </label>
                                        <select className="form-select" id="country" required="" value={values.pais} onChange={handleInputChange} >
                                            <option value="">Seleccionar...</option>
                                            <option>Chile</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Por favor seleccionar un país válido
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="region" className="form-label">
                                            Región
                                        </label>
                                        <select className="form-select" id="region" required="" value={values.region} onChange={handleInputChange}>                                           <option value="">Seleccionar..</option>
                                            <option>Metropolitana de Santiago</option>
                                            <option> Arica y Parinacota</option>
                                            <option> Tarapacá</option>
                                            <option> Antofagasta</option>
                                            <option> Atacama</option>
                                            <option> Coquimbo</option>
                                            <option> Valparaíso</option>
                                            <option>O'Higgins</option>
                                            <option> Maule</option>
                                            <option> Ñuble</option>
                                            <option> BioBío</option>
                                            <option> Araucanía</option>
                                            <option> Los Ríos</option>
                                            <option> Los Lagos</option>
                                            <option> Aysén</option>
                                            <option> Magallanes</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Por favor seleccionar una región válida
                                        </div>
                                    </div>
                                </div>
                                <div className="row gy-3">
                                </div>
                                <div class="container mt-5">
                                    <p>Breve descripción del negocio</p>
                                    <form>
                                        <div class="mb-3">
                                            <textarea class="form-control" id="description" name="description" rows="4" placeholder="Ingrese la descripción aquí"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <hr className="my-4" />

                                <button className="w-40 btn btn-primary btn-lg" type="submit" >
                                    Confirmar registro
                                </button>

                            </form>
                        </div>
                    </div>
                </main>
                <footer className="my-5 pt-5 text-muted text-center text-small">
                    <p className="mb-1">Gracias por ser parte de la comunidad DiabeticLink</p>
                    <ul className="list-inline">

                    </ul>
                </footer>
            </div>

        </>

    )
}

export default SoyComercio;