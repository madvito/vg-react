import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {DetalleContext} from '../context/DetalleContext'

//const Juego = ({name,pplatforms,genres})=>{
const Juego = ({id,name,img})=>{

    const {setId}= useContext(DetalleContext)
    const url=`/game/${id}`
    return(
        <div className='col-md-3 mb-3'>
            <div className='bg-light'>
            <h3>{name}</h3>
            </div>
            
            <img className='img-fluid' src={img} alt="imagen"/>
            <Link to={url} className='btn btn-block btn-primary' onClick={()=>{setId(id)}}>DETALLE</Link>
        </div>
        
    )
}

export default Juego