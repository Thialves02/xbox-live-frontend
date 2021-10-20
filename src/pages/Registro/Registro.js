import React from 'react'
import './Registro.css'
import logo from '../../assets/images/logo.png'
import { Api } from '../../api/Api';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";

export default function Registro() {
    const history = useHistory();
    const handleSubmit =  async event => {
        event.preventDefault();
        const nome = event.target.nome.value;
        const sobrenome = event.target.sobrenome.value;
        const email = event.target.email.value;
        const cpf = +event.target.cpf.value;
        const senha = event.target.senha.value;
        const titulo = event.target.titulo.value;
        const imagem = event.target.imagem.value;

        const payload = {
            nome,
            sobrenome,
            email,
            cpf,
            senha,
            perfis:[
                {
                    titulo:titulo,
                    imagem:imagem
                }
            ]
        };

        const response = await Api.buildApiPostRequest(
            Api.createUsuarioUrl(),
            true,
            payload
        )
        if (response.status === 201) {
            alert("Usuario criado com sucesso")
            history.push(`/`);
        } else {
            alert("Aconteceu algum erro!!!")
        }
        console.log({response})
    }
    return (
        <div className='registro-container'>
            <div className='registro-card'>
                <img src={logo}></img>
                <form onSubmit={handleSubmit}>
                    <h1>REGISTRAR</h1>
                    <div className='registro-infos'>
                        <div className='registro-infos-usuario'>
                            <h2>USUARIO</h2>
                            <p>NOME</p>
                            <input type="text" name="nome"></input>
                            <p>SOBRENOME</p>
                            <input type="text" name="sobrenome"></input>
                            <p>EMAIL</p>
                            <input type="text" name="email"></input>
                            <p>CPF</p>
                            <input type="text" name="cpf"></input>
                            <p>SENHA</p>
                            <input type="text" name="senha"></input>
                        </div>
                        <div className='registro-infos-perfil'>
                            <h2>PERFIL INICIAL</h2>
                            <p>TITULO</p>
                            <input type="text" name="titulo"></input>
                            <p>IMAGEM</p>
                            <input type="text" name="imagem"></input>
                        </div> 
                    </div>
                    <div className='registro-buttons'>
                        <button type="submit">REGISTRAR</button>
                        <Link to='/'><button>VOLTAR</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
