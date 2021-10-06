import React from 'react'
import './Login.css'
import logo from '../../assets/images/logo.png'
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <div className='registro-container'>
            <div className='registro-card'>
            <img src={logo}></img>
                <h1>ENTRAR</h1>
                <p>EMAIL</p>
                <input type="text"></input>
                <p>SENHA</p>
                <input type="text"></input>
                <div className='login-buttons'>
                    <button type="submit">ENTRAR</button>
                    <Link to='/registro'><button type="submit">CRIAR UMA CONTA</button></Link>
                </div>
            </div>
        </div>
    )
}
