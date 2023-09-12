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
                            src="/docs/5.2/assets/brand/bootstrap-logo.svg"
                            alt=""
                            width={72}
                            height={57}
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
                                            <option>Región Metropolitana</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Por favor seleccionar una región válida
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="same-address"
                                    />

                                </div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="save-info"
                                    />
                                    <label className="form-check-label" htmlFor="save-info">
                                        Save this information for next time
                                    </label>
                                </div>
                                <hr className="my-4" />
                                <h4 className="mb-3">Payment</h4>
                                <div className="my-3">
                                    <div className="form-check">
                                        <input
                                            id="credit"
                                            name="paymentMethod"
                                            type="radio"
                                            className="form-check-input"
                                            defaultChecked=""
                                            required=""
                                        />
                                        <label className="form-check-label" htmlFor="credit">
                                            Credit card
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            id="debit"
                                            name="paymentMethod"
                                            type="radio"
                                            className="form-check-input"
                                            required=""
                                        />
                                        <label className="form-check-label" htmlFor="debit">
                                            Debit card
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            id="paypal"
                                            name="paymentMethod"
                                            type="radio"
                                            className="form-check-input"
                                            required=""
                                        />
                                        <label className="form-check-label" htmlFor="paypal">
                                            PayPal
                                        </label>
                                    </div>
                                </div>
                                <div className="row gy-3">
                                    <div className="col-md-6">
                                        <label htmlFor="cc-name" className="form-label">
                                            Name on card
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="cc-name"
                                            placeholder=""
                                            required=""
                                        />
                                        <small className="text-muted">
                                            Full name as displayed on card
                                        </small>
                                        <div className="invalid-feedback">Name on card is required</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="cc-number" className="form-label">
                                            Credit card number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="cc-number"
                                            placeholder=""
                                            required=""
                                        />
                                        <div className="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="cc-expiration" className="form-label">
                                            Expiration
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="cc-expiration"
                                            placeholder=""
                                            required=""
                                        />
                                        <div className="invalid-feedback">Expiration date required</div>
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="cc-cvv" className="form-label">
                                            CVV
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="cc-cvv"
                                            placeholder=""
                                            required=""
                                        />
                                        <div className="invalid-feedback">Security code required</div>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <button className="w-100 btn btn-primary btn-lg" type="submit">
                                    Continue to checkout
                                </button>
                            </form>
                        </div>
                    </div>
                </main>
                <footer className="my-5 pt-5 text-muted text-center text-small">
                    <p className="mb-1">© 2017–2022 Company Name</p>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="#">Privacy</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">Terms</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">Support</a>
                        </li>
                    </ul>
                </footer>
            </div>

        </>

    )
}

export default Registro;