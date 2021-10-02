import React from 'react'
import './Registro.css'
import logo from '../../assets/images/logo.png'

export default function Registro() {
    return (
        <div className='registro-container'>
            <div className='registro-card'>
                <img src={logo}></img>
                <h1>REGISTRAR</h1>
                <p>NOME</p>
                <input type="text"></input>
                <p>SOBRENOME</p>
                <input type="text"></input>
                <p>EMAIL</p>
                <input type="text"></input>
                <p>CPF</p>
                <input type="text"></input>
                <p>SENHA</p>
                <input type="text"></input>
                <div className='registro-buttons'>
                    <button type="submit">REGISTRAR</button>
                </div>
            </div>
        </div>
    )
}
