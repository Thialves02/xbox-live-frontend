import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import './EditarPerfis.css'
import { Api } from '../../api/Api';
import { useHistory } from "react-router";

export default function EditarPerfis(props) {
    const id = props.match.params.id;
    const [perfil, setPerfil] = useState([]);

    useEffect(() => {
        const loadPefilList = async () => {
            const response = await Api.buildApiGetRequest(Api.readPerfilByIdUrl(id),true);

            const results = await response.json();

            setPerfil(results);
        };

        loadPefilList();
    }, [id]);

    const handleSubmit =  async event => {
        event.preventDefault();
        const titulo = event.target.titulo.value;
        const imagem = event.target.imagem.value;

        const payload = {
            titulo,
            imagem,
        };

        const response = await Api.buildApiPatchRequest(
            Api.updatePerfilUrl(id),
            payload,
            true
        )

        if (response.status === 200) {
            alert("Perfil atualizado com sucesso")
            
        } else {
            alert("Aconteceu algum erro!!!")
        }
    }
    const history = useHistory();
    const handleDelete =  async event =>{
        event.preventDefault();
        const response = await Api.buildApiDeleteRequest(
            Api.deletePerfilUrl(id),
            true
        )
        history.push(`/editar-perfil`);

        if (response.status === 200) {
            alert("Jogo deletado com sucesso")
            
        } else {
            alert("Aconteceu algum erro!!!")
        }
    }
    return (
        <div className='registro-container'>
            <div className='registro-card'>
                <img src={logo}></img>
                <h1>EDITAR PERFIL</h1>
                <p>NOME DO PERFIL</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='titulo' defaultValue={perfil.titulo}></input>
                    <p>IMAGEM</p>
                    <input type="text" name='imagem' defaultValue={perfil.imagem}></input>
                    <div className='perfil-buttons'>
                        <button type="submit" >ATUALIZAR PERFIL</button>
                        <button type="submit" onClick={handleDelete}>DELETAR</button>
                        <Link to="/editar-perfil"><button type="submit">VOLTAR</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
