import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Menu from '../../components/Menu/Menu'
import './AdicionarJogo.css'
import logo from '../../assets/images/logo.png'
import { Api } from '../../api/Api'

export default function AdicionarJogo() {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        const loadCategoriasList = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllGeneroUrl(),true);
            const results = await response.json();
            setCategorias(results);
        };
        console.log({categorias})
        loadCategoriasList();
    }, []);

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

        const response = await Api.buildApiPostRequest(
            Api.createJogoUrl(),
            payload,
            true
        )

        if (response.status === 201) {
            alert("Jogo criado com sucesso")
            
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
                        <input type="text" name='nome' />
                    </div>
                    <div className='form-item'>
                        <h2>CAPA</h2>
                        <input type="text" name='capa'/>
                    </div>
                    <div className='form-item'>
                        <h2>DESCRICAO</h2>
                        <input type="text" name='descricao'/>
                    </div>
                    <div className='form-item'>
                        <h2>ANO</h2>
                        <input type="text" name='ano'/>
                    </div>
                    <div className='form-item'>
                        <h2>NOTA</h2>
                        <input type="text" name='nota'/>
                    </div>
                    <div className='form-item'>
                        <h2>TRAILER</h2>
                        <input type="text" name='link_yt'/>
                    </div>
                    <div className='form-item'>
                        <h2>GAMEPLAY</h2>
                        <input type="text" name='link_gp'/>
                    </div>
                    <div className='form-item'>
                        <h2>GÊNERO</h2>
                        <select id="cars" name="cars">
                        {categorias.map((categoria, index) => (
                            <option value="volvo">{categoria.nome}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className='form-buttons'>
                    <button type="submit">ADICIONAR JOGO</button>
                    <Link to='/admin'><button>VOLTAR</button></Link>
                </div>
                </form>
                
            </div>
        </div>
        </>
    )
}
