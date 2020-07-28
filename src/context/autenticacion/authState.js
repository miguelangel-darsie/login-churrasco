import React, { useReducer, useContext } from 'react';

import AuthContext from './authContext';
import AuthReducer from './authReducer'; 
import SitesContext from '../sitios/sitesContext';

import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import { OBTENER_USUARIO, LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION, ACCESO_ERROR } from '../../types' 

const AuthState = props => {


    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);
    
    const sitesContext = useContext(SitesContext);
    const { cargarSitios } = sitesContext; 


    // Funciones 

    const iniciarSesion = async datos => {
        //console.log('datos ', datos);

        try {
            const response = await clienteAxios.post('http://churrasco.uk.to:3005/api/auth', datos)
            //console.log(response);

            dispatch({
                type: LOGIN_EXITOSO,
                payload: response.data
            })

            // Obtenemos el usuario autenticado
            usuarioAutenticado(); 

        } catch(error) {
            console.log(error.response);
            // Revisar!!
            const alerta = {
                msg: error.response.statusText
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta

            })
        }
    }

    // Retornamos el usuario autenticado 

    const usuarioAutenticado = () => {
        
        const token = localStorage.getItem('token'); 
        if(token) {
            tokenAuth(token);
            cargarSitios(); 
            dispatch({
                type: OBTENER_USUARIO
            })} 
            else {
            dispatch({
                type: LOGIN_ERROR
            })
        }
        
    }

    // Cierra la sesión 

    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })

    }

    return(
        <AuthContext.Provider
        value={{
            token: state.token,
            autenticado: state.autenticado,
            mensaje: state.mensaje,
            iniciarSesion,
            usuarioAutenticado,
            cerrarSesion
        }}
        >
            {props.children}
        </AuthContext.Provider>

    );
}; 

export default AuthState; 
