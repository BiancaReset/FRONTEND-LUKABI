import React, { useState, useEffect } from "react";
import ProductoCard from "../components/ProductoCard";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Login from "./Login";

// Resto del código...
const ListaProductos = () => {
    const user = localStorage.getItem("user");

    const [productos, setProductos] = useState([]);
    const [values, setValues] = useState({
        nombre: "",
        descripcion: "",
        imagen: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const getProductos = async () => {
        try {
            const res = await fetch("http://127.0.0.1:5000/api/get_products");
            const data = await res.json();
            setProductos(data);
        } catch (error) {
            console.error("Error fetching products", error);
        }
    };

    useEffect(() => {
        getProductos();
    }, []);

    const createNewProduct = async () => {
        try {
            const res = await fetch("http://127.0.0.1:5000/api/create_product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre: values.nombre,
                    descripcion: values.descripcion,
                    imagen: values.imagen,
                }),
            });
            setValues({
                nombre: "",
                descripcion: "",
                imagen: "",
            });
            getProductos();
        } catch (error) {
            console.error("Error creating product", error);
        }
    };

    return user ? (
        <>
            {/* Código del modal para agregar productos */}
            <div className="row mb-5">
                <div className="col-2 p-2">
                    <ImagePlaceholder />
                </div>
                <div className="col-8">
                    {productos.length !== 0 ? (
                        productos.map(({ id, nombre, descripcion, imagen }) => (
                            <ProductoCard
                                key={id}
                                nombre={nombre}
                                descripcion={descripcion}
                                imagen={imagen}
                            />
                        ))
                    ) : (
                        <p>No hay productos disponibles.</p>
                    )}
                </div>
            </div>
        </>
    ) : (
        <Login />
    );
};

export default ListaProductos;