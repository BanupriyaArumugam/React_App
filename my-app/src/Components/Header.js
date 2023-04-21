import React from 'react'
import logo from '../logo.png'
import './Main.css'
import { useState, useEffect } from "react";
function Header(){
    const [count, setCount] = useState(0);
//     useEffect(()=>{
//         console.log("j")
//  alert("Welcome to little lemon restaurant!!!")

//     },[])

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a href="/" className="navbar-brand"><img src={logo} width="10%" alt="noimg"></img></a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <a href="/home" className="nav-item nav-link active" >Home</a>
                </div>
                <div className="navbar-nav ms-auto">
                    <a href="/login" className="nav-item nav-link">Login</a>
                </div>
            </div>
        </div>
    </nav>

    )
}
export default Header;

