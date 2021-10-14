import React, { useEffect, useState } from 'react'
import { Api } from '../../api/Api';
import Menu from '../Menu/Menu'

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
        
        {categoria.jogos.map((jogo, jogoIndex) =>
            <div>
                {jogo.nome}
            </div>
        )}
        
        </div>
        </>
    )
}