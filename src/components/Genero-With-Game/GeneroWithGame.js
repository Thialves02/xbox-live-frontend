import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api';
import Menu from '../Menu/Menu'

export default function GeneroWithGame(props) {
    const id = props.match.params.id;
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const loadCategoriasList = async () => {
            const response = await Api.buildApiGetRequest(Api.readByIdGeneroWithGamesUrl(id));
            const results = await response.json();
            setCategorias(results);
            console.log(results);
        };
        loadCategoriasList();
    }, [id]);
   
    return (
        <>
        <Menu></Menu>
        <div>
        
        {categorias.jogos.map((jogo, jogoIndex) =>
            <div>
                {jogo.nome}
            </div>
        )}
        
        </div>
        </>
    )
}
