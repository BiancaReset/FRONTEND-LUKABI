import React from 'react';
import { ForoTab } from '../component/ForoTab';
import Imagehome from '../component/Imagehome';
import colibri from "./../img/colibri.png";


const Foro = () => {
    const publications = [
        { titulo: "primer post", user: "user 1", fecha: "12/11/2023", comentario: "soy el comentario", cantidad: 158, imagen: "https://picsum.photos/200" },
        { titulo: "segundo post", user: "user 2", fecha: "12/11/2023", comentario: "soy el comentario", cantidad: 158, imagen: "https://picsum.photos/200" },
        { titulo: "tercer post", user: "user 1", fecha: "12/11/2023", comentario: "soy el comentario", cantidad: 158, imagen: "https://picsum.photos/200" }
    ]
    return (
        <>

            <div className="d-flex justify-content-center mt-2 mb-2">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Agregar Tema
                </button>
            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-5">

                <div className="col-2 align-self-center p-2">

                    <Imagehome image={colibri} />


                </div>
                <div className="col-8"> {publications.map(({ titulo, user, fecha, comentario, cantidad, imagen }, index) => (<ForoTab key={index} titulo={titulo} user={user} fecha={fecha} comentario={comentario} cantidad={cantidad} imagen={imagen} />))} </div>
                <div className="col-2">4 imagenes</div>



            </div >







        </>
    )
};
export default Foro;