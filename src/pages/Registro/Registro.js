import React from 'react'
import './Registro.css'
import logo from '../../assets/images/logo.png'
import { Api } from '../../api/Api';

export default function Registro() {
    const handleSubmit =  async event => {
        event.preventDefault();
        const nome = event.target.nome.value;
        const sobrenome = event.target.sobrenome.value;
        const email = event.target.email.value;
        const cpf = +event.target.cpf.value;
        const senha = event.target.senha.value;

        const payload = {
            nome,
            sobrenome,
            email,
            cpf,
            senha
        };

        const response = await Api.buildApiPostRequest(
            Api.createUsuarioUrl(),
            payload
        )
        console.log({response})
    }
    return (
        <div className='registro-container'>
            <div className='registro-card'>
                <img src={logo}></img>
                <form onSubmit={handleSubmit}>
                    <h1>REGISTRAR</h1>
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
                    <div className='registro-buttons'>
                        <button type="submit">REGISTRAR</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
