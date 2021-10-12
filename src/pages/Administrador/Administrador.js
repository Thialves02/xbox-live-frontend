import React from 'react'
import Menu from '../../components/Menu/Menu'
import './Administrador.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

export default function Administrador() {
    return (
        <>
        <Menu></Menu>
        <div className='admin-container'>
            <div className='admin-card'>
                <img src={logo}/>
                <h1>ADMINISTRADOR</h1>
                <Link to='/admin/adicionar-jogo'><button>ADICIONAR JOGO</button></Link>
                <Link to='/admin/editar-jogos'><button>EDITAR JOGO</button></Link>
                <Link to='/admin/adicionar-categoria'><button>ADICIONAR CATEGORIA</button></Link>
                <Link to='/admin/editar-categorias'><button>EDITAR CATEGORIA</button></Link>
            </div>
        </div>
        </>
    )
}
