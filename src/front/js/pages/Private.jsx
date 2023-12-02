import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, Routes, Route, useNavigate } from "react-router-dom"

export const Private = () => {
   
    useEffect(()=>{
        actions.privateViewRequest()
        
    }, [])
   
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center mt-5">
            {!store.loginRes.includes(true)  ?  <h1>Acees Denied :(</h1>:
                <div>
                    <h1>Private Home</h1>
                    <img src="https://www.lpl.com/content/dam/lpl-www/images/newsroom/read/insider/insider-blog-meme-stocks-what-do-they-mean_article-hero-450x450.png" alt="" />
                </div>}
        </div>
    );
};
