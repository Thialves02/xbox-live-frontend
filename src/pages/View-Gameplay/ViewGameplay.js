import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api';
import './ViewGameplay.css'
import { useHistory } from "react-router";
import Menu from '../../components/Menu/Menu';

export default function ViewGameplay(props) {
    const id = props.match.params.id;

    const [games, setGames] = useState([]);

    useEffect(() => {
        const loadGame = async () => {
            const response = await Api.buildApiGetRequest(Api.readByIdUrl(id));
            const results = await response.json();
            setGames(results);
        };
        loadGame();
    }, [id]);
    const history = useHistory();

    const handleClick = () => {
        history.push(`/game/view/${games.id}`);
    };
    return (
        <>
        <Menu></Menu>
        <div className='view-container-box'>
        <div className='view-container'>
            <div className='view-img-genre'>
                <img src={games.capa}/>
                <h4>Genero</h4>
            </div>
            <div className='view-conteudo-container'>
                <div className='view-conteudo'>
                    <h1>{games.nome}</h1>
                    <h3>{games.ano}</h3>
                </div>
                <h2>Nota {games.nota}/10</h2>
                <iframe width="560" height="350" src={`https://www.youtube.com/embed/${games.link_gp}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                <div className='view-buttons'>
                    <button onClick={handleClick}>VOLTAR</button>
                </div>
            </div>
        </div>
        </div>
        </>
    )}
