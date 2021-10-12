import React, { useEffect, useState } from 'react'
import './EditarCategorias.css'
import logo from '../../assets/images/logo.png'
import Menu from '../../components/Menu/Menu'
import { Link } from 'react-router-dom'
import { Api } from '../../api/Api'
import { useHistory } from 'react-router';
import Categoria from '../../components/Categoria/Categoria'

export default function EditarCategorias() {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        const loadCategoriasList = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllGeneroUrl());
            const results = await response.json();
            setCategorias(results);
        };
        console.log({categorias})
        loadCategoriasList();
    }, []);
    
    return (
        <>
        <Menu></Menu>
        <div className='adm-jogo-container'>
            <div className='adm-jogo-card'>
                <img src={logo}/>
                <h1>GÊNEROS</h1>
                <div className="categorias">
                {categorias.map((categoria, index) => (
                    <Categoria
                    key={index}
                    categoria={categoria}
                    >
                    </Categoria>
                ))}
                </div>
                <div className='form-buttons'>
                    <Link to='/admin'><button>VOLTAR</button></Link>
                </div>

                
            </div>
        </div>
        </>
    )
}
