import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, forgotPassword } from "../firebase";
import "../Styles/Reset.css";

function Reset(){
    const [email, setEmail] = useState("");
    const [currUser, loading, error] = useAuthState(auth);
    const nav = useNavigate();
    useEffect(()=>{
        if(loading){
            //Future implementation for loading screen
            return;
        }
        if(currUser){
            nav("/");
        }
    }, [currUser, loading]);
    return(
        <div className="holder">
        <div className="welcome-panel">
            <div className='welcomes'>
                <div className="title">
                    <b>Password Reset</b>
                </div>
                <input 
                    value ={email} 
                    placeholder = "E-mail" 
                    type="email"
                    className = "email" 
                    onChange={(e) => setEmail(e.target.value)}/>
                <button 
                    className='send' 
                    onClick={()=> forgotPassword( email)}>
                    Send Link</button>
            </div>
            <div className='no-account'>
                <h1>Don't' have an account? <Link to="/register" className='sign-up-button'>
                        <span>Sign up</span>
                    </Link>
                </h1>
            </div>
        </div>
    </div>
    );
}

export default Reset;