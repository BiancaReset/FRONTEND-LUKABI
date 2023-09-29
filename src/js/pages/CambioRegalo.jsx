import React, { useState, useEffect } from 'react';
import CambioList from './CambioList';
import AgregarProducto from './AgregarProducto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare, faComment, faBookmark, faFlag, faCircleUser, faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons';

const productosData = [
    {
        id: 1,
        titulo: 'Insulina',
        descripcion: 'INSULINA',
        imagen: require('../img/insulina.jpg').default,

    },
    {
        id: 2,
        titulo: 'logo',
        descripcion: 'GLUCOMETRO',
        imagen: require('../img/logo1.jpg').default,
    },
    {
        id: 3,
        titulo: 'Insulina',
        descripcion: 'LANCETAS',
        imagen: require('../img/insulina.jpg').default,
    },
    {
        id: 4,
        titulo: 'Endulzante',
        descripcion: 'Splenda',
        imagen: require('../img/insulina.jpg').default,
    },
    {
        id: 5,
        titulo: 'Insulina',
        descripcion: 'hola',
        imagen: require('../img/insulina.jpg').default,
    },
    {
        id: 5,
        titulo: 'Insulina',
        descripcion: 'TIRAS DE CETONA',
        imagen: require('../img/insulina.jpg').default,
    },
    // Add more products as needed
];


const CambioRegalo = () => {

    // Define el estado para los campos del formulario
    const [producto, setProducto] = useState({
        nombre: '',
        direccion: '',
        descripcion: '',
    });

    // Manejar cambios en los campos del formulario
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProducto({
            ...producto,
            [name]: value,
        });
    };

    // Manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor o realizar validaciones
        console.log('Producto enviado:', producto);
    };
    const [productos, setProductos] = useState([])
    const getProductos = async () => {
        const res = await fetch("http://127.0.0.1:5000/informacion");
        const data = await res.json();
        setProductos(data);
        console.log(data)
    };
    useEffect(() => {
        try {
            getProductos();
        } catch (error) {
            console.log("error", error);
        }
    }, []);
    const user = localStorage.getItem("user");
    const postProducto = async () => {
        const res = await fetch("http://127.0.0.1:5000/api/post_producto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: JSON.parse(user).id,
                nombre: producto.nombre,
                direccion: producto.direccion,
                descripcion: producto.descripcion,
            }),
        });
        setProducto({
            nombre: "",
            direccion: "",
            descripcion: "",
        });
        getProductos();
    };
    const deleteProducto = async (productoId) => {
        const res = await fetch(
            `http://127.0.0.1:5000/api/delete_producto/${productoId}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: JSON.parse(user).id,
                }),
            }
        );

        getProductos();
    };
    const [productoid, setproductoid] = useState({
        nombre: "",
        direccion: "",
        descripcion: "",
        id: "",
    })
    const editProducto = async () => {
        const res = await fetch(
            `http://127.0.0.1:5000/api/update_producto/${productoid}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: JSON.parse(user).id,
                    nombre: producto.nombre,
                    direccion: producto.direccion,
                    descripcion: producto.descripcion,
                }),
            }
        );
        setProducto({
            nombre: "",
            direccion: "",
            descripcion: "",
        });
        getProductos();
    };

    return (
        productos.length !== 0 ?
            <>
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                    Agregar Producto
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className=" d-grid modal-body">
                                <AgregarProducto handleInputChange={handleInputChange} handleSubmit={handleSubmit} producto={producto} />
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    onClick={() => postProducto()}
                                    className="btn btn-primary "
                                    data-bs-dismiss="modal"
                                >
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-2 mb-2">
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        Agregar Producto
                    </button>
                </div>
                <div
                    className="modal fade"
                    id="exampleModal1"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"

                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                    Agregar Producto
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal1"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className=" d-grid modal-body">
                                <AgregarProducto handleInputChange={handleInputChange} handleSubmit={handleSubmit} producto={producto} />
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal1"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    onClick={() => postProducto()}
                                    className="btn btn-primary "
                                    data-bs-dismiss="modal1"
                                >
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Render the new CambioList component */}
                {productos.map(producto => (
                    <CambioList
                        key={producto.id}  // Add a unique key for each item in the map
                        titulo={producto.nombre}
                        id={producto.id}
                        user={producto.user.nombre}
                        comentario={producto.descripcion}
                        handleDelete={() => deleteProducto(producto.id)}
                        buttonedit={<><FontAwesomeIcon icon={faPenToSquare} style={{ cursor: "pointer" }} onClick={() => setproductoid(producto.id)} data-bs-toggle="modal1"
                            data-bs-target="#exampleModal1" /> <small>editar</small></>}
                    />
                ))}
            </> : <div>no hay productos para mostrar</div>
    );
};

export default CambioRegalo;

