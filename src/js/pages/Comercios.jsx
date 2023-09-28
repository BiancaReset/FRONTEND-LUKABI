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
                console.log(data)

            })
            .catch(error => {
                console.error('Error al obtener comercios:', error);
            });
    }, []);

    return (
        <div>
            <h1>Lista de Comercios</h1>
            <ul>
                {comercios.map(comercio => (
                    <li key={comercio.id}>
                        <h2>{comercio.nombre}</h2>
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
    );
}

export default Comercios;

