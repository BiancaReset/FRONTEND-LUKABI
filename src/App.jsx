import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './js/pages/Home'
import Admin from './js/pages/Admin'
import AgregarPregunta from './js/pages/AgregarPregunta'
import AgregarProducto from './js/pages/AgregarProducto'
import CambioRegalo from './js/pages/CambioRegalo'
import EliminarProduto from './js/pages/EliminarProducto'
import Foro from './js/pages/Foro'
import Login from './pages/Login'
import NotFound from './js/pages/NotFound'
import Noticias from './js/pages/Noticias'
import QuienesSomos from './js/pages/QuienesSomos'
import Registro from './js/pages/Registro'
import EliminarProducto from './js/pages/EliminarProducto'





const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Menu />
                <Routes>
                    {/* path: ruta del recurso, element= component que se desea cargar al acceder al path */}
                    {/* 
          <Route path="/users/:id/edit" element={<FormUserEdit />} />
          <Route path="/users" element={<ListUsers />} />
          */}
                    <Route path="/home" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/agregarpregunta" element={<AgregarPregunta />} />
                    <Route path="/agregarproducto" element={<AgregarProducto />} />
                    <Route path="/cambioregalo" element={<CambioRegalo />} />
                    <Route path="/eliminarproducto" element={<EliminarProducto />} />
                    <Route path="/foro" element={<Foro />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/notfound" element={<NotFound />} />
                    <Route path="/noticias" element={<Noticias />} />
                    <Route path="/quienessomos" element={<QuienesSomos />} />
                    <Route path="/registro" element={<Registro />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routes;
