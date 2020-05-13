import React from 'react'
import casket from '../casket.png'

const Error = () =>{
    return(
        <div className='container h-100 mt-5'>
            <div className="row h-100">
                <div className="col-sm-12 h-100">
                 <h1>ERROR 404</h1>
                 <div className='text-center'>
                 <img src={casket} alt="404"/>
                 </div>
                </div>
            </div>
            
            
      
            
            
        </div>
    )
}
export default Error