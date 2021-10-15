import React, { useEffect, useState } from 'react'
import Menu from '../../components/Menu/Menu'
import './EditarJogo.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { Api } from '../../api/Api'
import { useHistory } from "react-router";

export default function EditarJogo(props) {
    const id = props.match.params.id;
    const [games, setGames] = useState([]);

    useEffect(() => {
        const loadGameList = async () => {
            const response = await Api.buildApiGetRequest(Api.readByIdUrl(id));

            const results = await response.json();

            setGames(results);
        };

        loadGameList();
    }, [id]);
    
    const handleSubmit =  async event => {
        event.preventDefault();
        const nome = event.target.nome.value;
        const capa = event.target.capa.value;
        const descricao = event.target.descricao.value;
        const ano = +event.target.ano.value;
        const nota = +event.target.nota.value;
        const link_yt = event.target.link_yt.value;
        const link_gp = event.target.link_gp.value;

        const payload = {
            nome,
            capa,
            descricao,
            ano,
            nota,
            link_yt,
            link_gp,
        };

        const response = await Api.buildApiPatchRequest(
            Api.updateJogoUrl(id),
            payload
        )

        if (response.status === 200) {
            alert("Jogo atualizado com sucesso")
            
        } else {
            alert("Aconteceu algum erro!!!")
        }
        console.log({response})
    }
    const history = useHistory();
    const handleDelete =  async event =>{
        event.preventDefault();
        const response = await Api.buildApiDeleteRequest(
            Api.deleteJogoUrl(id),
        )
        history.push(`/admin/editar-jogos`);

        if (response.status === 200) {
            alert("Jogo deletado com sucesso")
            
        } else {
            alert("Aconteceu algum erro!!!")
        }
    }
    return (
        <>
        <Menu></Menu>
        <div className='adm-jogo-container'>
            <div className='adm-jogo-card'>
                <img src={logo}/>
                <h1>ADICIONAR JOGO</h1>
                <form onSubmit={handleSubmit}>
                <div className='form-inputs'>
                    <div className='form-item'>
                        <h2>NOME</h2>
                        <input type="text" name='nome' defaultValue={games.nome}/>
                    </div>
                    <div className='form-item'>
                        <h2>CAPA</h2>
                        <input type="text" name='capa' defaultValue={games.capa}/>
                    </div>
                    <div className='form-item'>
                        <h2>DESCRICAO</h2>
                        <input type="text" name='descricao' defaultValue={games.descricao}/>
                    </div>
                    <div className='form-item'>
                        <h2>ANO</h2>
                        <input type="text" name='ano' defaultValue={games.ano}/>
                    </div>
                    <div className='form-item'>
                        <h2>NOTA</h2>
                        <input type="text" name='nota' defaultValue={games.nota}/>
                    </div>
                    <div className='form-item'>
                        <h2>TRAILER</h2>
                        <input type="text" name='link_yt' defaultValue={games.link_yt}/>
                    </div>
                    <div className='form-item'>
                        <h2>GAMEPLAY</h2>
                        <input type="text" name='link_gp' defaultValue={games.link_gp}/>
                    </div>
                </div>
                <div className='form-buttons'>
                    <button type="submit">ATUALIZAR JOGO</button>
                    <button onClick={handleDelete}>DELETAR JOGO</button>
                    <Link to='/admin/editar-jogos'><button>VOLTAR</button></Link>
                </div>
                </form>
                
            </div>
        </div>
        </>
    )
}

