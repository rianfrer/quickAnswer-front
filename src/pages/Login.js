import React, { useState } from 'react';
import perfilImg from '../../src/LogoQuickAnswer.png';

import LoginAcess from '../utils/LoginAcess';

import '../styles/Login.css';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleSubmit(event) {
        event.preventDefault();

        const data = {
            email,
            password
        }

        if (data.email === LoginAcess.email && data.password === LoginAcess.password) {
            alert(`Access Permitido! Seja bem vindo ` + data.email);
        } else {
            alert("Access Negado, tente novamente ou crie outra conta")
        }

    }

    return (
        <div className="logon-container" >
            <section className="form">

                <img src={perfilImg} alt="perfil" />

                <h1>Login</h1>
                <p>Entre com o seu email e sua senha abaixo</p>

                <form onSubmit={handleSubmit}>
                    <label>EMAIL</label>
                   
                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        className="inputLogin"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        required
                    />
                    <label>SENHA</label>
                   
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        className="inputLogin"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        required
                    />
                    <button className="button" type="submit">Entrar</button>
                    <a href="/" >Não tem uma conta?</a>
                    <a href="/" >Esqueci a senha?</a>
                </form>

            </section>
        </div >
    )
}

export default Login
