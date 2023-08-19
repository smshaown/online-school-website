import React from 'react';
import { Link, useRouteError } from 'react-router-dom';  
import notFound from '../../assets/images/notFound/notFound.jpg';  

const NotFound = () => {
    const {error, status} = useRouteError();
    return (
        <div className='myContainer mt-10 grid justify-center items-center'>
            <img src={notFound}  style={{width: "350px", height: "300px" }} alt="" className='mt-5' />
            <h3 className='font-bold'> {error.message}</h3>
               
            <h3 className='text- 2xl font-semibold text-orange-800'>Not Found This Page</h3>

            <button className="text-white bg-black px-4 py-4 rounded-xl mt-4"><Link className="text-white" to="/">Back to Hmepage</Link></button>  
          
        </div> 
    );
};

export default NotFound;