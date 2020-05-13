import React,{createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const GenerosContext = createContext()

const GenerosProvider = (props) =>{
    const [generos,setGeneros] = useState([])

    const headers= {
        "x-rapidapi-host" : "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key" : "8250b51985msh32f0d613a8aaf8dp1cafe8jsn9570a54fe333"
    }

    useEffect(()=>{
        const getGeneros = async() =>{
            const url ='https://rawg-video-games-database.p.rapidapi.com/genres'
            const res = await axios.get(url,{headers})
            setGeneros(res.data.results)
            //console.log(res.data.results);
        }
        getGeneros()
    },[])

    return(
        <GenerosContext.Provider value={{generos}}>
            {props.children}
        </GenerosContext.Provider>
    )


}
export default GenerosProvider