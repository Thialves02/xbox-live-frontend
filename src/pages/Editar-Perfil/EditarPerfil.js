import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Api } from '../../api/Api';
import Perfis from '../../components/Perfis/Perfis';
import './EditarPerfil.css'
import { useHistory } from 'react-router';
import PerfisEdit from '../../components/Perfis-Edit/PerfisEdit';

export default function EditarPerfil() {
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
    return (
        <div>
            <div className="perfil-container">
            <div className="titulo-perfil">
                <h1>EDITAR PERFIS</h1>
            </div>
            <div className="perfis">
                <div className="perfis-container">
                    {usuario.map((perfil, perfilIndex) => (
                        <div>
                            <PerfisEdit
                            perfil={perfil}
                            index={perfilIndex}
                            ></PerfisEdit>
                        </div>
                    ))}
                </div>
            </div>
            <div className='perfil-button'>
                <Link to="/perfil"><button>VOLTAR</button></Link>
            </div>
        </div>
        </div>
    )
}
