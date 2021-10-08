import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api';
import Game from '../../components/Game/Game';
import Menu from '../../components/Menu/Menu';
import './View.css'

export default function View(props) {
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
    return (
        <>
        <Menu></Menu>
        <div>
            <h1>{games.nome}</h1>
        </div>
        </>
    )
}
