import React, { useEffect, useState } from 'react'
import './EditarCategoria.css'
import logo from '../../assets/images/logo.png'
import {Link} from "react-router-dom";
import { Api } from '../../api/Api';
import { useHistory } from "react-router";

export default function EditarCategoria(props) {

    const id = props.match.params.id;
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const loadCategoriasList = async () => {
            const response = await Api.buildApiGetRequest(Api.readByIdGeneroUrl(id),true);

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
            true,
            payload
        )

        if (response.status === 200) {
            alert("Gênero atualizado com sucesso")
            
        } else {
            alert("Aconteceu algum erro!!!")
        }
        console.log(response)
    }
    const history = useHistory();
    const handleDelete =  async event =>{
        event.preventDefault();
        const response = await Api.buildApiDeleteRequest(
            Api.deleteGeneroUrl(id),
            true
        )
        history.push(`/admin/editar-categorias`);
        if (response.status === 200) {
            alert("Gênero deletado com sucesso")
            
        } else {
            alert("Aconteceu algum erro!!!")
        }
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
                        <button onClick={handleDelete}>DELETAR JOGO</button>
                        <Link to='/admin/editar-categorias'><button type="submit">VOLTAR</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
