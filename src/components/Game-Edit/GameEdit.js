import React from 'react'
import { useHistory } from "react-router";


export default function Game({game}) {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/admin/editar-jogo/${game.id}`);
    };
    return (
        <div>
            <div className="games"  onClick={handleClick}>
                    <div className="game">
                        <img src={game.capa}></img>
                        <p>{game.nome}</p> 
                    </div>
                </div>
        </div>
    )
}
