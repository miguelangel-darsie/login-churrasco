import React from "react";

const Site = ({ site }) => {
  

  return (
            <div className="col-md-4 mb-3">
            <div className="card text-left">
                <img
                className="card-img-top"
                src={site.url_imagen}
                alt={`Imagen de ${site.nombre}`}
                />
                <h6 className="card-header font-weight-bolder">{site.nombre}</h6>
                <div className="card-body">
                <p className="text-truncate text-muted">{site.descripcion}</p>
                <a
                    type="button"
                    href={"#!"}
                    className="btn btn-block boton-login"
                    onClick={()=> window.open(`https://www.google.com/maps/place/${site.ubicacion._lat}+${site.ubicacion._long}`, "_blank")}
                >
                    Ver en Maps
                </a>
                </div>
            </div>
            </div>
  );
};

export default Site;
