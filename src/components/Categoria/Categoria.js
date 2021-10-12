import React from 'react'
import './Categoria.css'
import { useHistory } from 'react-router';

export default function Categoria({categoria}) {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/admin/editar-categoria/${categoria.id}`);
    };
    return (
        <div>
            <div onClick={handleClick}>
                    <div className="categoria">
                        <p>{categoria.nome}</p> 
                    </div>
                </div>
        </div>
    )
}
