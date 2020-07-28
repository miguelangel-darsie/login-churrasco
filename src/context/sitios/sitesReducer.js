import { ACCESO_SITIOS, ACCESO_ERROR } from '../../types' 

export default (state, action) => {
    switch(action.type) {
        case ACCESO_SITIOS: 
            //localStorage.setItem('token', action.payload); 
            return {
                ...state,
                sites: action.payload
            }
        case ACCESO_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }    
        default:
            return state;
    }
}