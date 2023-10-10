import React, { useState, useContext } from 'react'
import logo from "../img/logo.jpeg"
import { Context } from "../../store/AppContext.jsx"

const RegistroComercio = () => {
    const correoRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/
    const { store } = useContext(Context)
    const [values, setValues] = useState({
        nombre: "",
        correo: "",
        password: "",
        direccion: "",
        direccion2: "",
        pais: "",
        region: "",
        website: "website",
        descripcion: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const handleRegistro = async (event) => {
        event.preventDefault();
        console.log(JSON.stringify(values));
        try {
            const response = await fetch(`${store.API_URL}/api/comercio`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                const data = await response.json();
                alert("Usuario creado exitosamente");
            } else {
                alert("Error al registrar usuario");
            }
        } catch (error) {
            console.error("Error", error);
        }
    }
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
                        <h2>Formulario de Registro Comercios</h2>
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
                                            name="nombre"
                                            placeholder="Nombre"
                                            value={values.nombre}
                                            required=""
                                            onChange={handleInputChange}
                                        /* value={nombre} */
                                        />
                                        {values.nombre.length !== 0 && values.nombre.length < 2 && (
                                            <span className="alert alert-danger" style={{ fontSize: '12px', padding: '4px 8px' }}>
                                                Nombre debe contener al menos 2 caracteres{" "}
                                            </span>
                                        )}
                                    </div>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <label htmlFor="username" className="form-label">
                                                Correo electrónico
                                            </label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text">@</span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="correo"
                                                    placeholder="Correo electrónico"
                                                    required=""
                                                    onChange={handleInputChange}
                                                    value={values.correo}

                                                />
                                                {values.correo.length > 0 && !correoRegex.test(values.correo) && (
                                                    <span className="alert alert-danger" style={{ fontSize: '12px', padding: '4px 8px' }}>
                                                        Ingresar correo electrónico válido
                                                    </span>
                                                )}
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
                                            {values.password.length !== 0 && values.password.length < 6 && !passwordRegex.test(values.password) && (
                                                <span className="alert alert-danger" style={{ fontSize: '12px', padding: '4px 8px' }}>
                                                    El password debe contener 6-10 caracteres, un dígito, una letra minúscula y una mayúscula{" "}
                                                </span>
                                            )}
                                        </div>
                                    </div>


                                    <div className="col-12">
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="direccion" className="form-label">
                                            Dirección
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="direccion"
                                            placeholder="Avenida 123"
                                            required=""
                                            value={values.direccion}
                                            onChange={handleInputChange}

                                        />
                                        <div className="invalid-feedback">
                                            Por favor ingresar una dirección válida
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="direccion2" className="form-label">
                                            Local u Oficina Nº <span className="text-muted">(Opcional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="direccion2"
                                            value={values.direccion2}
                                            placeholder="Local u Oficina Nº"
                                            required=""
                                            onChange={handleInputChange}

                                        />
                                    </div>
                                    <div className="col-md-5">
                                        <label htmlFor="country" className="form-label">
                                            País
                                        </label>
                                        <select className="form-select" name="pais" required="" value={values.pais} onChange={handleInputChange} >
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
                                        <select className="form-select" name="region" required="" value={values.region} onChange={handleInputChange}>                                           <option value="">Seleccionar..</option>
                                            <option value="Metropolitana de Santiago">Metropolitana de Santiago</option>
                                            <option value="Arica y Parinacota">Arica y Parinacota</option>
                                            <option value="Tarapacá">Tarapacá</option>
                                            <option value="Antofagasta">Antofagasta</option>
                                            <option value="Atacama">Atacama</option>
                                            <option value="Coquimbo">Coquimbo</option>
                                            <option value="Valparaíso">Valparaíso</option>
                                            <option value="O'Higgins">O'Higgins</option>
                                            <option value="Maule">Maule</option>
                                            <option value="Ñuble">Ñuble</option>
                                            <option value="BioBío">BioBío</option>
                                            <option value="Araucanía">Araucanía</option>
                                            <option value="Los Ríos">Los Ríos</option>
                                            <option value="Los Lagos">Los Lagos</option>
                                            <option value="Aysén">Aysén</option>
                                            <option value="Magallanes">Magallanes</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Por favor seleccionar una región válida
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div className="row gy-3">
                                    <div className="col-md-6">
                                        <label htmlFor="website" className="form-label">
                                            Sitio Web
                                        </label>
                                        <input

                                            type="text"
                                            className="form-control"
                                            name="website"
                                            placeholder="Ingrese tu sitio web"
                                            required=""
                                            value={values.website}
                                            onChange={handleInputChange}

                                        />
                                        <div className="invalid-feedback">Por favor ingresar un sitio web válido</div>
                                    </div>

                                </div>
                                <div className="row gy-3">
                                    <div className="col-md-6">
                                        <label htmlFor="descripcion" className="form-label">
                                            Ingresa una descripción de tu negocio
                                        </label>
                                        <input

                                            type="text"
                                            className="form-control"
                                            name="descripcion"
                                            placeholder="Ingresa una descripcion de tu negocio"
                                            required=""
                                            value={values.descripcion}
                                            onChange={handleInputChange}

                                        />
                                        <div className="invalid-feedback">Por favor ingresa una descripcion válida</div>
                                    </div>

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
};


export default RegistroComercio;