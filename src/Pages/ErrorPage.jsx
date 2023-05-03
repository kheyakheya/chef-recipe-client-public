import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error,status}=useRouteError();
    
    return (
        <div className='flex justify-center items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div>
                <img src='https://t4.ftcdn.net/jpg/01/69/52/57/240_F_169525776_n4vHCkxZtLzQKDgBgLETl7r39btzJEbx.jpg' alt=""  />
                <h1 className='text-3xl font-bold  text-orange-400'>Oooopzzzz!</h1>
                <h2 className='text-2xl text-orange-400'>{status ? status : "CODE UNKNOWN"}</h2>

                <h2 className='xl'>{error?.message}</h2>
                <h2></h2>
            </div>
            
        </div>
    );
};

export default ErrorPage;