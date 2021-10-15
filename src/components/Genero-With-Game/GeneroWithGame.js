import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api';
import Game from '../Game/Game';
import Menu from '../Menu/Menu'
import './GeneroWithGame.css'

export default function GeneroWithGame(props) {
    const id = props.match.params.id;
    const [categoria, setCategoria] = useState(undefined);

    useEffect(() => {
        const loadCategoria = async () => {
            const response = await Api.buildApiGetRequest(Api.readByIdGeneroWithGamesUrl(id));
            const result = await response.json();
            setCategoria(result);
            console.log(result);
        };
        loadCategoria();
    }, [id]);
    
    if (!categoria) {
        return <div>Carregando...</div>
    }
   
    return (
        <>
        <Menu></Menu>
        <div>
        <div className="cards">
        {categoria.jogos.map((game, jogoIndex) =>
            <Game
                key={jogoIndex}
                game={game}
            ></Game>
        )}
        </div>
        </div>
        </>
    )
}