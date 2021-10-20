import React from 'react'
import { useHistory } from 'react-router';

export default function PerfisEdit({perfil}) {
    const history = useHistory();

    const handleClick = () => {
        history.push(`editar-perfis/${perfil.id}`);
    };
    return (
        <div className="perfis-container-component" onClick={handleClick}>
            <img src={perfil.imagem}/>
            <h1>{perfil.titulo}</h1>
        </div>
    )
}
