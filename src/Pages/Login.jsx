import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {

    const {logIn, googleLogin, githubLogin,passwordReset}=useContext(AuthContext)
    const [show,setShow]=useState(false);
    const [error,setError]=useState('');
    const [success, setSuccess]=useState('');
    const navigate= useNavigate();
    const location= useLocation();
    console.log("login", location)
    const from = location.state ?. from ?. pathname || '/'; 
    const handleLogin=(event)=>{
        event.preventDefault();
        const form= event.target;
        const email= form.email.value;
        const password=form.password.value;
        setError('');
        setSuccess('');
        logIn(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log("loggin",loggedUser)
            setSuccess("Successful Login!!")
            form.reset();
            navigate(from, {replace: true})
            
        })
        .catch(error=>{
            setError(error.message)
        })
       
    }
    // google
    const handleGoogleLogin=()=>{
        googleLogin()
        .then(result=>{
            const loggedUser= result.user;
            console.log("googleUser", loggedUser);
            setSuccess("Login Successful !")
            navigate(from, {replace: true})

        })
        .catch(error=>{
            console.log(error.message);
            setError(error.message)
        })
    }
    // github
    const handleGithubLogin=()=>{
        githubLogin()
        .then(result=>{
            const loggedUser= result.user;
            console.log("githubUser", loggedUser);
            setSuccess("Login Successfully Done!!!")
            navigate(from, {replace: true})

        })
        .catch(error=>{
            console.log(error.message);
            setError(error.message)
        })
    }
    
    return (
        <div className="hero min-h-screen bg-base-200 pt-6">
            <div className="hero-content flex-col ">
                <div className="text-center pb-4">
                    <h1 className="text-5xl font-bold text-orange-400">Please Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body pb-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? "text" : "password" } name='password' placeholder="password" className="input input-bordered" required />
                            {show ? <p onClick={()=>{setShow(!show)}}><small>Hide Password</small></p> : <p onClick={()=>{setShow(!show)}}><small>Show Password</small></p> }
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn border-none bg-orange-400">Login</button>
                        </div>
                    </form>
                    <p className='text-red-700 text-xl px-8 py-4'><small>{error}</small></p>
                    <p className='text-green-700 text-xl px-8'><small >{success}</small></p>
                    
                    <Link className='px-8' to="/register" ><span>New to Chefzzzz Tray?</span><button className=" px-2 btn btn-link">Register</button></Link>
                    <div className='card-body'>
                    <button onClick={handleGoogleLogin} className="btn border-none bg-orange-400"><FaGoogle className='text-white me-4 text-2xl'></FaGoogle>Google Login</button>
                    </div>
                    <div className='card-body'>
                    <button onClick={handleGithubLogin} className=" btn border-none bg-orange-400"><FaGithub className='text-white me-4 text-2xl'></FaGithub>GitHUb Login</button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;