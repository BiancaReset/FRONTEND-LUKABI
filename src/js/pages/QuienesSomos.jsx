import NavBar from '../component/NavBar';

const QuienesSomos = () => {
    return (
        <>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>Quiénes Somos</title>
            <NavBar webname={"DabeticLink"} quienes={"Quiénes Somos"} foro={"Foro"} marketplace={"Te lo compro/regalo"} registro={"Registro/Login"} />
            {/* Header - set the background image for the header in the line below*/}
            <header
                className="py-5 bg-image-full"
                style={{
                    backgroundImage: 'url("https://source.unsplash.com/wfh8dDlNFOk/1600x900")'
                }}
            >
                <div className="text-center my-5">
                    <img
                        className="img-fluid rounded-circle mb-4"
                        src="https://dummyimage.com/150x150/6c757d/dee2e6.jpg"
                        alt="..."
                    />
                    <h1 className="text-white fs-3 fw-bolder">Full Width Pics</h1>
                    <p className="text-white-50 mb-0">Landing Page Template</p>
                </div>
            </header>
            {/* Content section*/}
            <section className="py-5">
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h2>Full Width Backgrounds</h2>
                            <p className="lead">
                                A single, lightweight helper class allows you to add engaging, full
                                width background images to sections of your page.
                            </p>
                            <p className="mb-0">
                                The universe is almost 14 billion years old, and, wow! Life had no
                                problem starting here on Earth! I think it would be inexcusably
                                egocentric of us to suggest that we're alone in the universe.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Image element - set the background image for the header in the line below*/}
            <div
                className="py-5 bg-image-full"
                style={{
                    backgroundImage: 'url("https://source.unsplash.com/4ulffa6qoKA/1200x800")'
                }}
            >
                {/* Put anything you want here! The spacer below with inline CSS is just for demo purposes!*/}
                <div style={{ height: "20rem" }} />
            </div>
            {/* Content section*/}
            <section className="py-5">
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h2>Engaging Background Images</h2>
                            <p className="lead">
                                The background images used in this template are sourced from
                                Unsplash and are open source and free to use.
                            </p>
                            <p className="mb-0">
                                I can't tell you how many people say they were turned off from
                                science because of a science teacher that completely sucked out all
                                the inspiration and enthusiasm they had for the course.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer*/}
            <footer className="py-5 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">
                        Copyright © Your Website 2023
                    </p>
                </div>
            </footer>
            {/* Bootstrap core JS*/}
            {/* Core theme JS*/}
        </>
    )
};
export default QuienesSomos;