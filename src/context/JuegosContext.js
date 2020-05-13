import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios';

export const JuegosContext = createContext();



const JuegosProvider =(props)=>{
    
    const [juegos,setJuegos] = useState([]);
    const [busquedaJuegos,setBusquedaJuegos] = useState({
        nombre:'',
        genero:''
    });
    const [consultar,setConsultar] = useState(false);

    const headers= {
        "x-rapidapi-host" : "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key" : "8250b51985msh32f0d613a8aaf8dp1cafe8jsn9570a54fe333"
    }
    const {nombre,genero} = busquedaJuegos
    useEffect(()=>{
        if(!nombre && !genero){
            const getJuegos = async()=>{
                let url = 'https://rawg-video-games-database.p.rapidapi.com/games?page_size=12';
                const res = await axios.get(url,{headers});
                setJuegos(res.data.results);
                //console.log(res.data.results);
            }
            getJuegos()
        }
    },[])
    useEffect(()=>{
        if (consultar){
            const getJuegos = async()=>{
                let url = `https://rawg-video-games-database.p.rapidapi.com/games?page_size=12`;
                if (nombre){
                    url+=`&search=${nombre}`
                }
                if (genero){
                    url+=`&genres=${genero}`
                }
                const res = await axios.get(url,{headers});
                setJuegos(res.data.results);
                console.log('juegosContext',res.data.results);
            }
            getJuegos();
        }
    },[busquedaJuegos]);
    return(
        <JuegosContext.Provider value={{setBusquedaJuegos,setConsultar,juegos}}>
            {props.children}
        </JuegosContext.Provider>
    )
}

export default JuegosProvider