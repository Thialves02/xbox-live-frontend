import React, { useEffect, useState } from 'react'
import './EditarCategoria.css'
import logo from '../../assets/images/logo.png'
import {Link} from "react-router-dom";
import { Api } from '../../api/Api';

export default function EditarCategoria(props) {

    const id = props.match.params.id;
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const loadCategoriasList = async () => {
            const response = await Api.buildApiGetRequest(Api.readByIdGeneroUrl(id));

            const results = await response.json();

            setCategorias(results);
        };

        loadCategoriasList();
    }, [id]);

    const handleSubmit =  async event => {
        event.preventDefault();
        const nome = event.target.nome.value;

        const payload = {
            nome,
        };

        const response = await Api.buildApiPatchRequest(
            Api.updateGeneroUrl(id),
            payload
        )
        console.log(response)
    }
    return (
        <div className='registro-container'>
            <div className='registro-card'>
            <img src={logo}></img>
                <h1>ADICIONAR CATEGORIA</h1>
                <p>NOME</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='nome' defaultValue={categorias.nome}></input>
                    <div className='form-buttons'>
                        <button type="submit">ATUALIZAR</button>
                        <Link to='/admin/editar-categorias'><button type="submit">VOLTAR</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
