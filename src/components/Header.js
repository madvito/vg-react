import React,{useContext} from 'react'
import {JuegosContext} from '../context/JuegosContext'

import {Link} from 'react-router-dom'


const Header = ()=>{
    const {setBusquedaJuegos} = useContext(JuegosContext)

    const resetBusqueda=()=>{
        const reset={
            nombre:'',
            genero:''
        }
        setBusquedaJuegos(reset)
    }

    return(
        <header className='bg-alert'>
            <Link to='/' onClick={resetBusqueda}><h1>Buscador de Videojuegos</h1></Link>
            
        </header>
    )
}

export default Header