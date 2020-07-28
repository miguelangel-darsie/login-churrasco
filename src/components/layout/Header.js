import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/autenticacion/authContext'
import SitesContext from '../../context/sitios/sitesContext'


const Header = () => {

    // Extraemos la información de autenticación
    const authContext = useContext(AuthContext);
    const { autenticado, usuarioAutenticado, cerrarSesion } = authContext;  

    const sitesContext = useContext(SitesContext);
    const { cargarSitios } = sitesContext;


    useEffect(() => {
        usuarioAutenticado();
        if(autenticado) cargarSitios(); 
    }, [])

    return (

        <header className=" encabezado navbar fixed-top d-flex justify-content-end ">
            
            
            <a className=" m-2 badge font-weight-lighter text-light" href="#!">Sites</a>
            <button className=" boton-logout badge font-weight-lighter text-light" onClick={() => cerrarSesion()}>Logout</button>
            
        </header>
        
    )
}

export default Header

