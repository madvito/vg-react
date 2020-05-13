import React,{useContext,useEffect} from 'react'
import {DetalleContext} from '../context/DetalleContext'

const InfoDetalle = ({id})=>{
    const {detalle,setId} = useContext(DetalleContext)
    const {name,genres,description_raw,platforms,developers,publishers,background_image} = detalle
    
    // useEffect(()=>{
    //     const validaId =()=>{
    //         if(!detalle){
    //             setId(id)
    //         }
    //     }
    //     validaId()
    // },[id])
    
   
    const mostrarGenero=(genres)=>{
        let genre=[]
        genres.map((gen,index)=>{genre.push(<li key={index}>{gen.name}</li>)})
        console.log('genres='+genre)
        return genre
    }
    const mostrarPlataforma=(platforms)=>{
        let plat=[]
        platforms.map((pla,index)=>{plat.push(<li key={index}>{pla.platform.name}</li>)})
        console.log('plat='+plat)
        return plat
    }
    const mostrarDevs=(developers)=>{
        let devs=[]
        developers.map((dev,index)=>{devs.push(<li key={index}>{dev.name}</li>)})
        console.log('devs='+devs)
        return devs
    }
    const mostrarPubs=(publishers)=>{
        let pub=[]
        publishers.map((pu,index)=>{pub.push(<li key={index}>{pu.name}</li>)})
        console.log('pub='+pub)
        return pub
    }
    

    return(
        <div className="container h-100 p-0" style={{backgroundImage:`url(${background_image})`,backgroundRepeat:'no-repeat'}}>
            <div className="container h-100 p-0 bg-alpha">
                <div className='d-flex justify-content-center mt-4'>
                    <h1>{name}</h1>
                </div>
                
                <div className="row h-100 p-5">
                    <div className="col-4 h-100">
                        <h3>Desarrollado por</h3>
                        <ul>
                            {mostrarDevs(developers)}
                        </ul>
                        <h3>Publicado por</h3>
                        <ul>
                            {mostrarPubs(publishers)}
                        </ul>
                        <h3>Genero</h3>
                        <ul>
                            {mostrarGenero(genres)}
                        </ul>
                        <h3>Plataforma</h3>
                        <ul>
                            {mostrarPlataforma(platforms)}
                        </ul>
                    </div>
                    <div className="col-8 h-100 mh-100">
                        <h3>Descripción</h3>
                        <p><strong>{description_raw}</strong></p>
                    </div>
                </div>
            </div>
            
            


        </div>
    )
}
export default InfoDetalle