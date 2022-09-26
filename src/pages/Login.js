/*import React, { useState } from 'react';
import { FiMail, FiUnlock } from 'react-icons/fi';
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

                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <h1>
                        <FiMail className="fiIcons" size={24} color="#f3403b" />
                    </h1>
                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        className="inputLogin"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        required
                    />
                    <h1>Senha</h1>
                    <h1>
                        <FiUnlock className="fiIcons" size={24} color="#f3403b" />
                    </h1>
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        className="inputLogin"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        required
                    />

                    <input type="checkbox" name="Register" />
                    <a href="/" >Relembrar cadastro</a>

                    <a href="/" className="ultimo">Esqueci a senha</a>
                    <button className="button" type="submit">Entrar</button>
                </form>

            </section>
        </div >
    )
}

export default Login
*/