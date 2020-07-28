import React, { useContext, useEffect, Fragment } from "react";

import Header from "../layout/Header";
import ListadoSites from "../layout/ListadoSites";
import AuthContext from "../../context/autenticacion/authContext";
import SitesContext from "../../context/sitios/sitesContext";

const Sites = () => {
  // Extraemos la información de autenticación
  const authContext = useContext(AuthContext);
  const { autenticado, usuarioAutenticado } = authContext;

  // Obtenemos los sitios
  const sitesContext = useContext(SitesContext);
  const { sites, cargarSitios } = sitesContext;

  useEffect(() => {
    
    usuarioAutenticado();
    if(autenticado) cargarSitios();

  }, [autenticado]);


  return (
    <Fragment>
      <div className=" contenedor-sitios container text-center text-light d-flex justifiy-content-center align-items-center">
        <div className="d-flex flex-column">
          <Header />
          <h2 className="d-flex justifiy-content-center align-items-center mb-4">
            {" "}
            Hey! Welcome to Churrasco Travel{" "}
            <i className="material-icons">directions_car</i>
            <i className="material-icons">directions_boat</i>
            <i className="material-icons">flight_takeoff</i>
          </h2>
          <h6 className="d-flex justifiy-content-center align-items-center mb-3">
            {" "}
            These are some of the destinations we can offer FOR FREE!{" "}
          </h6>

          <p className="text-muted d-flex justifiy-content-center align-items-center mb-0">
            DISCLAIMER: We only offer Google Maps based travels{" "}
            <i className="material-icons"> language</i>
          </p>
          <p className="text-muted d-flex justifiy-content-center align-items-center mb-5">
            If you have any issues while travelling... it's Google's fault{" "}
          </p>
          <div className="text-dark d-flex justifiy-content-center align-items-center">
            {sites ? (
              <ListadoSites></ListadoSites>
            ) : (
              null
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sites;
