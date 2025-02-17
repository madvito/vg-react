import React,{useContext} from 'react'
import {JuegosContext} from '../context/JuegosContext'
import Juego from './Juego'

const ListaJuegos = () =>{
    const {juegos} = useContext(JuegosContext)

    return(
        <div className="m-2 row mt-5">
            {juegos.map(juego=>{
                return <Juego key={juego.id} id={juego.id} name={juego.name} img={juego.short_screenshots[0].image} />
            })}
        </div>
    )
}

export default ListaJuegos