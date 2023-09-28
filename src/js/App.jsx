import React from 'react'
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './pages/Home.jsx'
import Admin from './pages/Admin.jsx'
import AgregarPregunta from './pages/AgregarPregunta.jsx'
import AgregarProducto from './pages/AgregarProducto.jsx'
import CambioRegalo from './pages/CambioRegalo.jsx'
import EliminarProducto from './pages/EliminarProducto.jsx'
import Foro from './pages/Foro.jsx'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'
import Noticias from './pages/Noticias.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'
import Registro from './pages/Registro.jsx'
import RegistroComercio from './pages/RegistroComercio.jsx'
import Profile from './pages/Profile.jsx'
import Comercios from './pages/Comercios.jsx'
import NavBar from './component/NavBar.jsx'
import Footer from './component/Footer.jsx'
import { ForoComent } from './pages/ForoComent.jsx'
import injectContext from '../store/AppContext.jsx'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/agregarpregunta" element={<AgregarPregunta />} />
                    <Route path="/agregarproducto" element={<AgregarProducto />} />
                    <Route path="/cambioregalo" element={<CambioRegalo />} />
                    <Route path="/eliminarproducto" element={<EliminarProducto />} />
                    <Route path="/foro" element={<Foro />} />
                    <Route path="/ForoComent" element={<ForoComent />} />
                    <Route path="/registropersona" element={<Registro />} />
                    <Route path="/registrocomercio" element={<RegistroComercio />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/noticias" element={<Noticias />} />
                    <Route path="/quienessomos" element={<QuienesSomos />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/comercios" element={<Comercios />} />



                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default injectContext(App);
