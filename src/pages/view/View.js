import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api';
import { useHistory } from "react-router";
import Menu from '../../components/Menu/Menu';
import './View.css'

export default function View(props) {
    const id = props.match.params.id;

    const [games, setGames] = useState([]);

    useEffect(() => {
        const loadGame = async () => {
            const response = await Api.buildApiGetRequest(Api.readByIdWithGeneroUrl(id),true);
            const results = await response.json();
            setGames(results);
        };
        loadGame();
        console.log(games);
    }, [id]);
    const history = useHistory();

    const handleClickTrailer = () => {
        history.push(`/game/view/trailer/${games.id}`);
    };
    const handleClickGameplay = () => {
        history.push(`/game/view/gameplay/${games.id}`);
    };
    return (
        <>
        <Menu></Menu>
        <div className='view-container-box'>
        <div className='view-container'>
            <div className='view-img-genre'>
                <img src={games.capa}/>
                {/* <h1>{games.generos[0]}</h1> */}
            </div>
            <div className='view-conteudo-container'>
                <div className='view-conteudo'>
                    <h1>{games.nome}</h1>
                    <h3>{games.ano}</h3>
                </div>
                <h2>Nota {games.nota}/10</h2>
                <p>{games.descricao}</p>
                <div className='view-buttons'>
                    <button onClick={handleClickTrailer}>TRAILER</button>
                    <button onClick={handleClickGameplay}>GAMEPLAY</button>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
