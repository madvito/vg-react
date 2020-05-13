import React,{createContext,useState,useEffect} from 'react'
import axios from 'axios'


export const DetalleContext = createContext();

const DetalleProvider = (props) =>{
    const [detalle,setDetalle] = useState({
        name:'',
        genres:[],
        description_raw:'',
        platforms:[],
        developers:[],
        publishers:[],
        background_image:''
    })
    const [id,setId] = useState('')

    const headers= {
        "x-rapidapi-host" : "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key" : "8250b51985msh32f0d613a8aaf8dp1cafe8jsn9570a54fe333"
    }

    useEffect(()=>{
        const buscaDetalle = async()=>{
            if (id){
                const url = `https://rawg-video-games-database.p.rapidapi.com/games/${id}`
                const res = await axios.get(url,{headers})
                setDetalle(res.data)
                console.log('detalleContext',res.data);
            }
            

        }
        buscaDetalle()
    },[id])

    return(
        <DetalleContext.Provider value={{setId,detalle,setDetalle}}>
            {props.children}
        </DetalleContext.Provider>
    )
}
export default DetalleProvider
