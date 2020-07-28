import React, { useContext, Fragment } from 'react';

import SitesContext from '../../context/sitios/sitesContext';
import Site from '../sites/Site';




const ListadoSites = () => {

    const sitesContext = useContext(SitesContext);
    const { sites } = sitesContext;

    return (
        <Fragment>
            { sites ? 

                <div className=" listado-sitios row mt-5">
                    {sites.map( site => (
                        <Site 
                        key={site.nombre}
                        site={site}
                        />
                        ))} 
                </div> : null
            }

        </Fragment>
    );
};

export default ListadoSites;