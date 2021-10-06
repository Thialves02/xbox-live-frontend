import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import './EditarPerfis.css'

export default function EditarPerfis() {
    return (
        <div className='registro-container'>
            <div className='registro-card'>
                <img src={logo}></img>
                <h1>EDITAR PERFIL</h1>
                <p>NOME DO PERFIL</p>
                <input type="text"></input>
                <p>IMAGEM</p>
                <input type="text"></input>
                <div className='perfil-buttons'>
                    <button type="submit">EDITAR PERFIL</button>
                    <Link to="/editar-perfil"><button type="submit">VOLTAR</button></Link>
                </div>
            </div>
        </div>
    )
}
