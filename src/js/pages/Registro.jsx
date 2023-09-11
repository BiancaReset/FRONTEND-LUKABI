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
                            width={72}
                            height={57}
                        />
                        <h2>Formulario de Registro</h2>
                    </div>
                    <div className="row g-5">
                        <div className="col-md-5 col-lg-4 order-md-last">
                        </div>
                        <div className="col-md-7 col-lg-8">
                            <form className="needs-validation" noValidate="">
                                <div className="row g-3">
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
                                        Nombre de usuario
                                    </label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            placeholder="Nombre de usuario"
                                            required=""
                                        />
                                        <div className="invalid-feedback">
                                            Nombre de usuario requerido
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">
                                        Correo electrónico <span className="text-muted">(Optional)</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="tu@ejemplo.com"
                                    />
                                    <div className="invalid-feedback">
                                        Correo electrónico válido requerido
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </main>
            </div>

        </>

    )
}

export default Registro;