import React,{useContext,useState, useEffect} from 'react'
import {JuegosContext} from '../context/JuegosContext'
import {DetalleContext} from '../context/DetalleContext'
import {GenerosContext} from '../context/GenerosContext'

const FormularioJuegos = () =>{
    const [busqueda,setBusqueda] = useState({
        nombre:'',
        genero:''
    })

    const {generos} = useContext(GenerosContext)
    const {setBusquedaJuegos,setConsultar} = useContext(JuegosContext)
    const {setDetalle}= useContext(DetalleContext)

    //leer contenidos
    const getDatosJuego = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
        
    }

    const getGeneros =()=>{
        let gens = []
        generos.map((gen)=>{gens.push(<option key={gen.id} value={gen.slug}>{gen.name}</option>)})
        return gens
    }

    const buscaJuego = (e) =>{
        e.preventDefault()
        setBusquedaJuegos(busqueda)
        setConsultar(true)
    }
    
    useEffect(()=>{
        const resetDetalle = ()=>{
            const reset ={
                name:'',
                genres:[],
                description_raw:'',
                platforms:[],
                developers:[],
                publishers:[],
                background_image:''
            }
            setDetalle(reset)
        }
        resetDetalle()
    },[])
    
    return(
        <form className="col-12" onSubmit={buscaJuego}>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input type="text" className="form-control" name='nombre' placeholder='Nombre del videojuego' onChange={getDatosJuego} />
                </div>
                <div className="col-md-4">
                    <select name="genero" id="" className="form-control" onChange={getDatosJuego}>
                        <option value="">Selecciona Genero</option>
                        {getGeneros()}
                    </select>
                </div>
                <div className="col-md-4">
                    <input type="submit" className='btn btn-block btn-primary' value="Buscar Videojuegos"/>
                </div>
            </div>
        </form>
    )
}

export default FormularioJuegos