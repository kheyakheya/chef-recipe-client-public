import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRout = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    console.log(location);
    if(loading){ 
        return (<div className='flex justify-center items-center h-[calc(100vh-68px)]'><button className="btn bg-orange-400 border-none btn-square loading"></button></div>)
    }
    if(user){
        return children;
    }
    return  <Navigate to="/login" state={{from:location}} replace></Navigate>
    
};

export default PrivateRout;