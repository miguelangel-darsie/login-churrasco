import React, { useState, useContext, useEffect } from "react";

import SitesContext from '../../context/sitios/sitesContext'; 
import AlertaContext from '../../context/alerta/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';


const Login = (props) => {

    // Definimos el state del usuario y la función que lo afecta
    const [user, saveUser] = useState({
        email: '',
        password: ''
    }); 

    // Desestructuramos la información del usuario
    const { email, password } = user; 

    // Obtenemos la alerta
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    // Autenticación
    const authContext = useContext(AuthContext);
    const { mensaje , autenticado, iniciarSesion } = authContext; 

    // Sitios
    const sitesContext = useContext(SitesContext);
    const { cargarSitios } = sitesContext;


    // Controlamos cambios sobre el estado de autenticado
    useEffect(() => {
      if(autenticado) {
        props.history.push('/sites');
      }

      if(mensaje) {
        mostrarAlerta(mensaje.msg);
      }

    },[mensaje, autenticado, props.history])


    // Detectamos cambios en el formulario
    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    // Validamos y enviamos la información 
    const onSubmit = e => {
        e.preventDefault();

        // Validar
        if(email.trim() === '' || password.trim() === '') {
          mostrarAlerta('Churrascomplete todos los campos por favor')
          return; 
        }

        // Action 
        iniciarSesion({
          email,
          password
        });  
        cargarSitios();

    }




  return (
    <div className="container contenedor-login text-center text-light m-5">
      { alerta ? ( <p className="alert alert-danger">{alerta.msg}</p> ): ( 
      <div className=" primera-fila row d-flex flex-row justify-content-center">
        <div className="col- "></div>

        <div className="col- ">
          <form className="form-signin" onSubmit={onSubmit}>
            <img
              className="thumbnail mb-4"
              src={require("../../LOGO1.png")}
              alt="Logo Churrasco"
              height="90vh"
            />
            <div className="input-group mb-0">
              <div className="input-group-prepend">
                <span className="input-group-text " id="basic-addon1">
                  <i className="material-icons">account_circle</i>
                </span>
              </div>
              <label htmlFor="email"></label>
              <input
                type="email"
                className="form-control"
                placeholder="Username"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                ></input>
            </div>

            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <span className="input-group-text " id="basic-addon1">
                  <i className="material-icons">lock</i>
                </span>
              </div>
              <label htmlFor="password"></label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
              ></input>
            </div>
            <div>
              <div className="ml-2 float-left">
                <input className="mr-2" type="checkbox" value="" />
                <label className="ml-0 text-muted leyenda">remember</label>
              </div>

              <input type="submit" className="btn boton-login float-right font-weight-bold" value="Log in"/>
              
            </div>
          </form>
        </div>

        <div className="col- "></div>
      </div> 
      )} 
      <footer className="segunda-fila row d-flex justify-content-center align-items-end text-center text-muted">
        web services under your control
      </footer>
    </div>
  );
};

export default Login;
