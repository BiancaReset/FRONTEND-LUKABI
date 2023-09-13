import React from 'react';
import { ForoTab } from '../component/ForoTab';


const Foro = () => {
    const publications = [
        { titulo: "primer post", user: "user 1", fecha: "12/11/2023", comentario: "soy el comentario", cantidad: 158, imagen: "https://picsum.photos/200" },
        { titulo: "segundo post", user: "user 2", fecha: "12/11/2023", comentario: "soy el comentario", cantidad: 158, imagen: "https://picsum.photos/200" },
        { titulo: "tercer post", user: "user 1", fecha: "12/11/2023", comentario: "soy el comentario", cantidad: 158, imagen: "https://picsum.photos/200" }
    ]
    return (
        <>
            <div className="row">

                <div className="col-2">Colibri</div>
                <div className="col-8"> {publications.map(({ titulo, user, fecha, comentario, cantidad, imagen }, index) => (<ForoTab key={index} titulo={titulo} user={user} fecha={fecha} comentario={comentario} cantidad={cantidad} imagen={imagen} />))} </div>
                <div className="col-2">4 imagenes</div>



            </div>







        </>
    )
};
export default Foro;