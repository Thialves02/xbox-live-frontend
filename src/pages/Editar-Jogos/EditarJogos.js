import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api';
import Menu from '../../components/Menu/Menu';
import GameEdit from '../../components/Game-Edit/GameEdit';

export default function EditarJogos() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const loadGameList = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllUrl());
            const results = await response.json();
            setGames(results);
        };

        loadGameList();
    }, []);
    
    return (
        <>
        <Menu/>
        <div className="cards">
            {games.map((game, index) => (
                <GameEdit
                key={index}
                game={game}
                ></GameEdit>
            ))}
        </div>
        </>
    )
}
