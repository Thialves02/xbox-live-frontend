import React from 'react'
import './Genero.css'
import Menu from '../../components/Menu/Menu'
import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api'

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
        <div>
            <form>
                <select id="cars" name="cars">
                    {categorias.map((categoria, index) => (
                        <option value="volvo">{categoria.nome}</option>
                    ))}
                </select>
                <button type='submit'>Enviar</button>
            </form>
        </div>
        </>
    )
}
