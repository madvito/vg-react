import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './Header'

import BuscaJuegos from './BuscaJuegos';

import InfoDetalle from './InfoDetalle'
import Error from './Error'

import JuegosProvider from '../context/JuegosContext'
import GenerosProvider from '../context/GenerosContext'


import '../App.css';
import DetalleProvider from '../context/DetalleContext';


function App() {
  return (
    <GenerosProvider>
      <JuegosProvider>
        <Router>
          <DetalleProvider>
            <Header />
            <Switch>
              
              <Route exact path='/' component={BuscaJuegos} />
              {/* <Route exact path='/game/:id' component={DetalleJuego} /> */}
              <Route exact path='/game/:id' component={InfoDetalle} />
              
              
              <Route exact component={Error} />
            </Switch>
          </DetalleProvider>
        </Router>
      </JuegosProvider>
    </GenerosProvider>
  );
}

export default App;
