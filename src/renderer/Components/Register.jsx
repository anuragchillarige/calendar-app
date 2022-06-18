import React, {useState, useEffect} from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import {auth, register} from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import '../Styles/Register.css'

function Register(){
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const [currUser, loading, err] = useAuthState(auth);
    const nav = useNavigate();
    useEffect(() =>{
        if(loading){
            //future implementation of loading screen
            return;
        }
        if(currUser) nav("/");
    }, [currUser, loading]);

    return(
        <div className="holder">
            <div className="welcome-panel">
                <div className='welcome'>
                    <div className="title">
                        <b>Sign up</b>
                    </div>
                    <input 
                        placeholder = "Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        value ={email} 
                        placeholder = "E-mail" 
                        type="email"
                        className = "email" 
                        onChange={(e) => setEmail(e.target.value)}/>
                    <input 
                        value={pass} 
                        onChange={(e) => setPass(e.target.value)} placeholder = "Password"type="password" 
                        className = "password"/>
                    <button 
                        className='register' 
                        onClick={()=> register(name, email, pass)}>
                        Register</button>
                </div>
                <div className='have-account'>
                    <h1>Already have an account? <Link to="/" className='sign-in-button'>
                            <span>Sign in</span>
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Register;