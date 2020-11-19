import React from 'react'
import {useState} from 'react';
import "./Login.css";
import {Link,useHistory} from "react-router-dom";
import { auth } from "../firebase";

function Login() {

    const history =useHistory();
    const [email , setEmail]  = useState("");
    const [password , setPassword]  = useState("");


    const login = (e) =>{
        e.preventDefault();// this stop the refresh
         
       auth
       .signInWithEmailAndPassword(email,password)
       .then ((auth)=>{
               // logged in,redirect to home
               history.push("/");
       }) 
       .catch((e)=>alert(e.message));
    
    };


    const register=(e)=>{
        e.preventDefault();  // this stop the refresh
      
        auth
       .createUserWithEmailAndPassword(email,password)
       .then ((auth)=>{
               // create user
               history.push("/");

       }) 
       .catch((e)=>alert(e.message))
    };





    return (
        <div className="login">

            <Link to="/">
                
                <img className="login_logo" src="https://media-exp1.licdn.com/dms/image/C4E0BAQEIjmPIHl7tuw/company-logo_200_200/0?e=2159024400&v=beta&t=XvV5od0sl7Fad-hbXWLe5Dclrsn-9bMgvdqXmVBW7HM" />
           
            </Link>

<div className="login_container">

<h1>Sign In</h1>
<form>
    <h5>E-mail</h5>
    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
    <h5>Password</h5>
    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />

    <button onClick={login} type="submit" className="button_registor_signIn">Sign In</button>
</form>
    <p>By signing-In you agree to Udayy to condition of use and sale.please see our privacy,Notice,our Cookies Notice and our internet-based Ads Notice.</p>
    <button onClick={register}>Create your Udayy account</button>
</div>
           
        </div>
    )
}

export default Login;

