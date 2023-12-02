import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, Routes, Route, useNavigate } from "react-router-dom"


export const SingUp = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (store.newUserRes == "success"){
            navigate('/')
        }

    }, [store.newUserRes.length])


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
            {
                <div>
                    <h1>Sing Up</h1>
                    {msg.length == 0 ? ""
                        : <div class="alert alert-danger" role="alert">{msg}</div>}
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required ></input>
                        <label for="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
                        <label for="floatingPassword">Password</label>
                    </div>

                    <button type="button" className="btn btn-success w-50" onClick={() => sendForm()}>Click me for sing up!!</button>

                    <div>
                        <p>requirements for registration:</p>
                        <p>password must be minimum length of 6</p>
                        <p>we only accept: Gmail</p>
                    </div>
                </div>


            }
        </div>
    );
};
