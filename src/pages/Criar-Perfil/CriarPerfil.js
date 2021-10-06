import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import './CriarPerfil.css'

export default function CriarPerfil() {
    return (
        <div className='registro-container'>
            <div className='registro-card'>
                <img src={logo}></img>
                <h1>CRIAR PERFIL</h1>
                <p>NOME DO PERFIL</p>
                <input type="text"></input>
                <p>IMAGEM</p>
                <input type="text"></input>
                <div className='perfil-buttons'>
                    <button type="submit">CRIAR PERFIL</button>
                    <Link to="/perfil"><button type="submit">VOLTAR</button></Link>
                </div>
            </div>
        </div>
    )
}
