import React,{useContext,useEffect} from 'react'
import InfoDetalle from './InfoDetalle'

import {DetalleContext} from '../context/DetalleContext'

const DetalleJuego = (props) =>{
    //console.log(props.match.params.id);
    const id=props.match.params.id
    const {setId,detalle} = useContext(DetalleContext)
    // useEffect(()=>{
    //     if(!detalle){
    //         setId(id)
    //     }
    // },[])
    const validaId =()=>{
        if(!detalle){
            setId(id)
        }
    }
    validaId()

    return(
        <InfoDetalle />
    )
}

export default DetalleJuego