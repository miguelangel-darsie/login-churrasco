import React, { useReducer } from 'react';

import SitesContext from './sitesContext';
import SitesReducer from './sitesReducer'; 

import clienteAxios from '../../config/axios';

import { ACCESO_SITIOS, ACCESO_ERROR } from '../../types' 

const SitesState = (props) => {

    const initialState = {
        sites: null,
    }

    const [state, dispatch] = useReducer(SitesReducer, initialState);

    const cargarSitios = async () => {
        try {

            const response = await clienteAxios.get('http://churrasco.uk.to:3005/api/sites')
    
            dispatch({
                type: ACCESO_SITIOS,
                payload: response.data.sites
            })

        } catch (error) { 
            
            console.log(error);
            const alerta = {
                msg: error.response
            } 

            dispatch({
                type: ACCESO_ERROR,
                payload: alerta
            }) 
            console.log(error); 
        } 
    }




    return (
        <SitesContext.Provider
            value={{
                sites: state.sites,
                cargarSitios
            }}
        >
            {props.children}
        </SitesContext.Provider>
    );
};

export default SitesState;