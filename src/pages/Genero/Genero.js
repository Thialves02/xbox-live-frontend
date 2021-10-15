import React, { useEffect, useState } from 'react';
import './Genero.css'
import Menu from '../../components/Menu/Menu'
import { Api } from '../../api/Api'
import JogosGenero from '../../components/Jogos-Genero/JogosGenero';
import './Genero.css';

export default function Genero() {
    
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
        <div className='genero-container'>
        <h1>Escolha a categorias dos jogos</h1>
                <div className="categorias-items">
                    {categorias.map((categoria, index) => (
                        <JogosGenero
                        key={index}
                        categoria={categoria}
                        ></JogosGenero>
                    ))}
                </div>
        </div>
        </>
    )
}
