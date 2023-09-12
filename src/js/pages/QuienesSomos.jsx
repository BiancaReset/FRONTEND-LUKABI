import React from 'react';
import logo from "../img/logo.jpeg"


const QuienesSomos = () => {
    return (
        <>
            <section id="about">
                <div className="container px-4">
                    <div className="row gx-4 justify-content-center">
                        <div className="col-lg-8">
                            <h4>Quiénes Somos</h4>
                            <p className="fs-6">
                                Bienvenidos a DiabeticLink, un espacio diseñado con mucha dedicación para las personas diabéticas en Chile. Somos una comunidad que se preocupa por tu bienestar y está aquí para apoyarte en cada paso de tu camino con diabetes.
                                Creemos en la importancia de la conexión y el apoyo mutuo. Nos esforzamos por ser un lugar de encuentro donde las personas diabéticas puedan reunirse, compartir información valiosa, hacer preguntas, y conectarse con empresas que ofrecen productos y servicios diseñados para sus necesidades. También promovemos la solidaridad, permitiendo a nuestros miembros intercambiar o regalar suministros que ya no necesitan, creando así una red de apoyo única en su tipo.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
            {/* Services section*/}
            <section className="bg-light" id="services">
                <div className="container px-4">
                    <div className="row gx-4 justify-content-center">
                        <div className="col-lg-8">
                            <h4>Nuestros Valores</h4>
                            <p className="fs-6">
                                Colaboración, generosidad y empatía. Creemos que ser parte de una comunidad que comparte una condición de salud que afecta la vida cotidiana es un gran apoyo. Queremos generar un impacto positivo en la vida de las personas diabéticas en Chile.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact section*/}
            <section id="contact">
                <div className="container px-4">
                    <div className="row gx-4 justify-content-center">
                        <div className="col-lg-8">
                            <h4>Contact us</h4>
                            <p className="fs-6">
                                Queremos saber de ti. Envíanos comentarios y sugerencias para hacer de DiabeticLink un recurso aún más valioso. Puedes ponerte en contacto con nosotros a través de nuestro correo electrónico [tu dirección de correo], o enviándonos un whatsapp a [+569xxxxxxx].
                                ¡Bienvenidos!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
};
export default QuienesSomos;