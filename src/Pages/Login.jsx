import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passError, setPassError] = useState("")
    const [success, setSuccess] = useState('');
        const handleEmail=(e)=>{
            setEmail(e.target.value)
        }
        const handlePassword = (e) => {
        const passwordInput = e.target.value;
        setPassword(passwordInput);
        if (passwordInput.length < 6) {
            setPassError("Password must be at least 6 characters long");
        } 
        
        else {
            setPassError("");
        }
    }
    const handleLogin= (e) => {
        e.preventDefault();
        const name= e.target.name.value;
        const photo= e.target.photo.value;
    
      if (passError) {
          e.target.password.focus();
          return;
        }
        console.log(name,password,email,photo)
        // login
    
      };
    
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center pb-4">
                    <h1 className="text-5xl font-bold text-orange-400">Please Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body pb-2">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered"  />
                    </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={handleEmail} value={email} type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={handlePassword} value={password}
                                type={show ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                            {show ? <p onClick={() => { setShow(!show) }}><small>Hide Password</small></p> : <p onClick={() => { setShow(!show) }}><small>Show Password</small></p>}
                            {password && passError && <span className='text-red-400'>{passError}</span>}

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered"  />
                    </div>
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    
                    <p className='text-green-700'><small >{success}</small></p>

                    <Link className='px-8 pb-8' to="/register" ><span>New to Chefzzzz Tray?</span><button className=" px-2 pb-8 btn btn-link">Register</button></Link>
                    
                </div>
            </div>
        </div>

    );
};

export default Login;