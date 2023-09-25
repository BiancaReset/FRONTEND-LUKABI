import React, { useState, useEffect } from 'react';
import { ForoTab } from '../component/ForoTab';
import Imagehome from '../component/Imagehome';
import colibri from "./../img/colibri.png";
import Login from './Login';


const Foro = () => {

    const user = localStorage.getItem('user')

    const [temas, setTemas] = useState([])
    const [values, setValues] = useState({
        title: '',
        content: ''
    })


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });


    };
    const getTemas = async () => {
        const res = await fetch("http://127.0.0.1:5000/api/post_topic_all");
        const data = await res.json();
        setTemas(data);
    };

    useEffect(() => {
        try {

            // getTemas();
        } catch (error) {
            console.log("error", error);
        }
    }, []);


    const createNewPost = async () => {
        const res = await fetch('http://127.0.0.1:5000/api/post_topic', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: JSON.parse(user).id,
                titulo: values.title,
                contenido: values.content

            })
        })
        setValues({
            title: '',
            content: ''
        })
        getTemas()

    }


    return (
        user ? <>

            <div className="d-flex justify-content-center mt-2 mb-2">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Agregar Tema
                </button>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Crea un tema</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className=" d-grid modal-body">
                            <label htmlFor="">Titulo</label>
                            <input onChange={handleInputChange} name='title' value={values.title} type="text" className='mb-2' />

                            <label htmlFor="">Contenido</label>
                            <textarea onChange={handleInputChange} name='content' value={values.content} type="text" />


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={() => createNewPost()} className="btn btn-primary " data-bs-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-5">

                <div className="col-2 p-2">

                    <Imagehome image={colibri} />


                </div>
                <div className="col-8"> {temas.length !== 0 && (
                    temas.map(({ comentario, id, contenido, fecha, titulo, user }) => (
                        <ForoTab
                            key={id}
                            titulo={titulo}
                            user={user.nombre}
                            fecha={fecha}
                            comentario={contenido}
                            cantidad={comentario}
                            id={id}
                        />
                    ))
                )}</div>




            </div >







        </> : <Login />

    )
};
export default Foro;