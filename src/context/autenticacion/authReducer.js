import { OBTENER_USUARIO, LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION } from '../../types' 

export default (state, action) => {
    switch(action.type) {
        case LOGIN_EXITOSO: 
            localStorage.setItem('token', action.payload); 
            return {
                ...state,
                autenticado: true,
                mensaje: null
            }
        case OBTENER_USUARIO:
            return {
                ...state,
                autenticado: true,    
            }
        case CERRAR_SESION: 
        case LOGIN_ERROR: 
            localStorage.removeItem('token');
            return {
                ...state,
                token: null, 
                autenticado: null,
                mensaje: action.payload
            }
            
        default:
            return state;
    }
}