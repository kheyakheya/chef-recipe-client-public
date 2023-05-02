import React, {createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const  AuthContext=createContext(null);
const auth=getAuth(app);
const googleProvider= new GoogleAuthProvider();
const githubProvider= new GithubAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser]=useState({});
    const [loading,setLoading]=useState(true);

    const register=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    const profileUpdate=(name,photo)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, {displayName:name, photoURL: photo});
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, currentUser=>{
            console.log("state change", currentUser)
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{unsubscribe()}
    },[])
    const authInfo={user,register, loading, profileUpdate}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;