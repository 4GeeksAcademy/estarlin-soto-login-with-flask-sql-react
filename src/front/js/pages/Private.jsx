import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, Routes, Route, useNavigate } from "react-router-dom"

export const Private = () => {
    const navigate = useNavigate()
   
    useEffect(()=>{
        actions.privateViewRequest()
        
    }, [])

    const logOut = ()=> {
        localStorage.setItem("access_token", "logOut")
        navigate('/')
    }
   
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center mt-5">
            {!store.loginRes.includes(true)  ?  <h1>Acees Denied :(</h1>:
                <div>
                    <h1>Private Home</h1>
                    <ul>
                       
                    </ul>
                    <button type="button" class="btn btn-danger" onClick={()=> logOut()}>Log out</button>
                    
               
                </div>}
        </div>
    );
};
