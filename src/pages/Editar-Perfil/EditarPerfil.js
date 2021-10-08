import React from 'react'
import { Link } from 'react-router-dom'
import './EditarPerfil.css'

export default function EditarPerfil() {
    return (
        <div>
            <div className="perfil-container">
            <div className="titulo-perfil">
                <h1>EDITAR PERFIS</h1>
            </div>
            <div className="perfis">
            <div className="perfis-container">
                <div className="nome-perfil">
                    <Link to="/editar-perfis"><div className="perfil"></div></Link>
                    <h1>Thiago</h1>
                </div>
                <div className="nome-perfil">
                    <div className="perfil"></div>
                    <h1>Thiago</h1>
                </div>
                <div className="nome-perfil">
                    <div className="perfil"></div>
                    <h1>Thiago</h1>
                </div>
            </div>
            </div>
            <div className='perfil-button'>
                <Link to="/perfil"><button>VOLTAR</button></Link>
            </div>
        </div>
        </div>
    )
}
