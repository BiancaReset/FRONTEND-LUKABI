import React, { useState, useEffect, useContext } from 'react'
import { Context } from "../../store/AppContext.jsx"


function Comercios() {
    const [comercios, setComercios] = useState([]);
    const { store } = useContext(Context);

    useEffect(() => {
        fetch(`${store.API_URL}/api/comercios`)
            .then(response => response.json())
            .then(data => {
                setComercios(data);

            })
            .catch(error => {
                console.error('Error al obtener comercios:', error);
            });
    }, []);

    return (
        <div>
            <section id="about">
                <div className="container px-4 mt-5">
                    <div className="row gx-4 justify-content-center">
                        <div className="col-lg-3">
                            <h2>Comercios</h2>
                            <ul>
                                {comercios.map(comercio => (
                                    <li key={comercio.id}>
                                        <h4>{comercio.nombre}</h4>
                                        <p><strong>Correo:</strong> {comercio.correo}</p>
                                        <p><strong>Dirección</strong> {comercio.direccion}</p>
                                        <p><strong>Local Nº</strong> {comercio.direccion2}</p>
                                        <p><strong>País:</strong> {comercio.pais}</p>
                                        <p><strong>Región:</strong> {comercio.region}</p>
                                        <p><strong>Sitio Web:</strong> {comercio.website}</p>
                                        <p><strong>Descripción:</strong> {comercio.descripcion}</p>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Comercios;

