import React,{useContext,useState} from 'react'
import {JuegosContext} from '../context/JuegosContext'

const FormularioJuegos = () =>{
    const [busqueda,setBusqueda] = useState({
        nombre:''
    })

    const {setBusquedaJuegos,setConsultar} = useContext(JuegosContext)
    
    //leer contenidos
    const getDatosJuego = e =>{
        // setBusqueda({
        //     ...busqueda,
        //     nombre : e.target.value
        // })
        setBusqueda(
            e.target.value
        )
    }

    const buscaJuego = (e) =>{
        e.preventDefault()
        setBusquedaJuegos(busqueda)
        setConsultar(true)
    }
    return(
        <form className="col-12" onSubmit={buscaJuego}>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input type="text" className="form-control" name='nombre' placeholder='Nombre del videojuego' onChange={getDatosJuego} />
                </div>
                <div className="col-md-4">
                    <input type="submit" className='btn btn-block btn-primary' value="Buscar Videojuegos"/>
                </div>
            </div>
        </form>
    )
}

export default FormularioJuegos