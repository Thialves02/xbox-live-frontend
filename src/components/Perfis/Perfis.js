
import React, { useEffect, useState } from 'react'
import './Perfis.css'

export default function Perfis({perfil}) {
    return (
        <>
        <div className="perfis-container-component">
            <img src={perfil.imagem}/>
            <h1>{perfil.titulo}</h1>
        </div>
        </>
    )
}
