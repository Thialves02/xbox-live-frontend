import React from 'react'
import './Login.css'
import logo from '../../assets/images/logo.png'
import {Link} from "react-router-dom";
import { Api } from '../../api/Api';
import { JwtHandler } from '../../jwt-handler/Jwt-Handler';

export default function Login(props) {
    const handleSubmit = async event => {
        // Previne o comportamento padrão do submit, que no caso do form é o refresh
        event.preventDefault();

        // Obtém os dados dos inputs
        const email = event.target.email.value;
        const senha = event.target.senha.value;

        // Constrói um payload com esses dados
        const payload = {
            email,
            senha,
        };

        // Faz uma requisição no backend
        const response = await Api.buildApiPostRequest(Api.loginUrl(), payload);

        const body = await response.json();

        if (response.status === 200) {
            // Login successfully

            const accessToken = body.accessToken;

            JwtHandler.setJwt(accessToken);

            console.log({ accessToken });

            props.history.push(`/perfil`);
        } else {
            // Error
            alert("Email ou senha incorretos")
        }
    };
    return (
        <div className='registro-container'>
            <div className='login-card'>
            <img src={logo}></img>
            <form onSubmit={handleSubmit}>
                <h1>ENTRAR</h1>
                <p>EMAIL</p>
                <input type="text" name='email'></input>
                <p>SENHA</p>
                <input type="password" name='senha'></input>
                <div className='login-buttons'>
                    <button type="submit">ENTRAR</button>
                    <Link to='/registro'><button type="submit">CRIAR UMA CONTA</button></Link>
                </div>
            </form>
            </div>
        </div>
    )
}
