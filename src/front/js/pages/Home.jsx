import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, Routes, Route, useNavigate } from "react-router-dom"

export const Home = () => {
	
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	useEffect(()=>{
		if ( store.loginRes.includes('success')){
			navigate('/private')
			
			}
	}, [store.loginRes.length])

	
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")

    

    const sendForm = () => {
        let emailInput = email
        emailInput = emailInput.toLocaleLowerCase()
        if (password.length < 6 || !emailInput.includes("@gmail.com") || emailInput.length < 11 ) {
            console.log(password.length)
            setMsg("the password or the email not meets the registration requirements.")
            
        } else {

            let newUser = {
                email: emailInput,
                password: password
            }
           
            actions.createNewUser(newUser)
            setMsg('')
            setEmail('')
            setPassword('')
        }
    }

 




	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			
			<div className="mb-3 row">
				<label for="staticEmail" className="col-sm-2 col-form-label" >Email</label>
				<div className="col-sm-10">
				<input type="text" className="form-control" id="inputEmail" placeholder="Email" onChange={(event) => actions.setEmail(event.target.value)}></input>
				</div>			
			</div>
			

			<div className="mb-3 row">
				<label for="inputPassword" className="col-sm-2 col-form-label">Password</label>

				<div className="col-sm-10">
					<input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={(event) => actions.setPassword(event.target.value)}></input>
				</div>
			</div>
			
			
			<button type="button" className="btn btn-primary px-5" onClick={() => actions.getToken()}>Login</button>
			
		</div>
	);
};
