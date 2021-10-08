import React from 'react'
import { Link } from 'react-router-dom'
import './Perfil.css'

export default function Perfil() {
    return (
        <>
        <div className="perfil-container">
            <div className="titulo-perfil">
                <h1>PERFIS</h1>
            </div>
            <div className="perfis">
            <div className="perfis-container">
                <div className="nome-perfil">
                    <div className="perfil"></div>
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
                <div className="nome-perfil">
                    <Link to="/criar-perfil"><div className="criar-perfil"></div></Link>
                    <h1>Criar perfil</h1>
                </div>
            </div>
            </div>
            <div className='perfil-button'>
                <Link to='/editar-perfil'><button>EDITAR PERFIS</button></Link>
            </div>
        </div>
            
        </>
    )
}
