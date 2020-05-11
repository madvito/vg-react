import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './Header'
import Index from './Index'
import BuscaJuegos from './BuscaJuegos';
import DetalleJuego from './DetalleJuego'
import DetalleDeveloper from './DetalleDeveloper'
import Error from './Error'

import JuegosProvider from '../context/JuegosContext'


import '../App.css';
import DetalleProvider from '../context/DetalleContext';


function App() {
  return (
    <JuegosProvider>
      <Router>
        <Header />
        <Switch>
          <DetalleProvider>
            <Route exact path='/' component={BuscaJuegos} />
            <Route exact path='/game/:id' component={DetalleJuego} />
          </DetalleProvider>
          <Route exact path='/dev/:id' component={DetalleDeveloper} />
          <Route exact path='/de' component={Error} />
        </Switch>
      </Router>
    </JuegosProvider>
  );
}

export default App;
