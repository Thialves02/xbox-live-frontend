import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api';
import Menu from '../../components/Menu/Menu';
import './Home.css'
import Game from '../../components/Game/Game';

export default function Home() {
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
                <Game
                key={index}
                game={game}
                ></Game>
            ))}
        </div>
        </>
    )
}
