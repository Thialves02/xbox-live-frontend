import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api';
import Game from '../../components/Game/Game';
import JogosFavoritos from '../../components/Jogos-Favoritos/JogosFavoritos';
import Menu from '../../components/Menu/Menu'

export default function Favoritos() {
    const [perfil, setPerfil] = useState([]);
    let alterou = false;
    useEffect(() => {
        const loadPerfilList = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllPerfilWithJogosUrl(),true);
            const results = await response.json();
            if(JSON.stringify(perfil)!=JSON.stringify(results)){
                setPerfil(results.jogos);
                alterou = true;
            }
        };
        loadPerfilList();
    }, [alterou]);
    console.log(perfil)
    return (
        <>
            <Menu></Menu>
            <div className="cards">
            {perfil.map((game, jogosIndex) => (
                <Game
                    game={game}
                    key={jogosIndex}
                >
                </Game>
            ))}
            </div>
        </>
            
    )
}
