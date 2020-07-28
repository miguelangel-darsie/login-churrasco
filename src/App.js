import React from "react";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Sites from './components/sites/Sites'; 

import AlertaState from './context/alerta/alertaState';
import AuthState from './context/autenticacion/authState';
import SitesState from './context/sitios/sitesState';
import tokenAuth from './config/token';
import RutaPrivada from './components/rutas/RutaPrivada';

// Revisamos si tenemos un token 
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token); 
}

function App() {
  return (

      <SitesState>
        <AuthState>
          <AlertaState>
                <Router>
                  <Switch>
                    <Route exact path="/" component={Login} />
                    <RutaPrivada exact path="/sites" component={Sites} />
                  </Switch>
                </Router>
          </AlertaState>
        </AuthState>
      </SitesState>
  );
}

export default App;
