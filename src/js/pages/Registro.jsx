import React from 'react'
import logo from "../img/logo.jpeg"

const Registro = () => {
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
                            <form className="needs-validation" noValidate="">
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label htmlFor="firstName" className="form-label">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            placeholder=""
                                            defaultValue=""
                                            required=""
                                        />
                                        <div className="invalid-feedback">
                                            Nombre válido requerido
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="lastName" className="form-label">
                                            Apellido
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            placeholder=""
                                            defaultValue=""
                                            required=""
                                        />
                                        <div className="invalid-feedback">
                                            Apellido válido requerido
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="username" className="form-label">
                                            Correo electrónico
                                        </label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text">@</span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="username"
                                                placeholder="Correo electrónico"
                                                required=""
                                            />
                                            <div className="invalid-feedback">
                                                Correo electrónico requerido
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="address" className="form-label">
                                            Dirección postal
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            placeholder="Avenida 123"
                                            required=""
                                        />
                                        <div className="invalid-feedback">
                                            Por favor ingresar una dirección válida
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="address2" className="form-label">
                                            Dirección 2 <span className="text-muted">(Opcional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="Dirección 2"
                                            placeholder="Departamento o casa Nº"
                                        />
                                    </div>
                                    <div className="col-md-5">
                                        <label htmlFor="country" className="form-label">
                                            País
                                        </label>
                                        <select className="form-select" id="País" required="">
                                            <option value="">Seleccionar...</option>
                                            <option>Chile</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Por favor seleccionar un país válido
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="state" className="form-label">
                                            Región
                                        </label>
                                        <select className="form-select" id="state" required="">
                                            <option value="">Seleccionar..</option>
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
                                <hr className="my-4" />
                                <div className="row gy-3">
                                    <div className="col-md-6">
                                        <label htmlFor="cc-name" className="form-label">
                                            Fecha de nacimiento (dd/mm/aaaa)
                                        </label>
                                        <input

                                            type="text"
                                            className="form-control"
                                            id="cc-name"
                                            placeholder="dd/mm/aaaa"
                                            required=""
                                        />
                                        <div className="invalid-feedback">Por favor ingresar fecha de nacimiento válida</div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="invalid-feedback">Expiration date required</div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="invalid-feedback">Security code required</div>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <button className="w-100 btn btn-primary btn-lg" type="submit">
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

export default Registro;