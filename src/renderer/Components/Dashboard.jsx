import React, { useState, useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import '../Styles/Dashboard.css';

function Dashboard(){
    const [userName, setName] = useState("");
    const [currUser, loading, error] = useAuthState(auth);
    const nav = useNavigate();
    const fetchUserName = async() => {
        try{
            const q = query(collection(db, "users"), where("uid", "==", currUser?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch(err){
            alert("An error had occurred while fetching the user data");
        }
    };
    
    useEffect(() => {
        if(loading){
            // future implementation of loading screen
            return;
        }
        if(!currUser) return nav("/");
        fetchUserName();
    }, [currUser, loading]);
    return(
        <div >
            <div className='menubar-holder'>
                <div className='menubar'>
                    <div className='name'>
                         Welcome, <span>{userName}</span>
                    </div>
                    <div className='page'>
                        Dashboard
                    </div>
                    <button className='logout-button' onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;