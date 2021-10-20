import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Api } from '../../api/Api';
import Perfis from '../../components/Perfis/Perfis';
import './Perfil.css'


export default function Perfil(props) {
    const [usuario, setUsuario] = useState([]);
    let alterou = false;
    useEffect(() => {
        const loadUsuarioList = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllUsuarioWithPerfisUrl(),true);
            const results = await response.json();
            if(JSON.stringify(usuario)!=JSON.stringify(results)){
                setUsuario(results.perfis);
                alterou = true;
            }
        };
        loadUsuarioList();
    }, [alterou]);
    console.log(usuario)
    return (
        <>
        <div className="perfil-container">
            <div className="titulo-perfil">
                <h1>PERFIS</h1>
            </div>
            <div className="perfis">
            <div className="perfis-container">
                {usuario.map((perfil, perfilIndex) => (
                    <div>
                        <Perfis
                        perfil={perfil}
                        index={perfilIndex}
                        ></Perfis>
                    </div>
                ))}
                <div className='container-criar-perfil'>
                    <Link to="/criar-perfil"><div className="criar-perfil"></div></Link>
                    <h1>Criar perfil</h1>
                </div>
            </div>
                
            </div>
            <div className='perfil-button'>
                <Link to='/editar-perfil'><button>EDITAR PERFIS</button></Link>
            </div>
        </div>
            
        </>
    )
}
