import '../styles/Login.css';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import perfilImg from '../../src/LogoQuickAnswer.png';
import LoginAcess from '../utils/LoginAcess';

function Login() {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        const data = {
            login,
            senha
        }
        if (data.login === LoginAcess.login && data.senha === LoginAcess.senha) {
            alert(`Access Permitido! Seja bem vindo ` + LoginAcess.nome);
            window.location.href = '/inicio';
        } else {
            alert("Access Negado, tente novamente ou crie outra conta")
        }
    }

    function settarLogin(event) {
        setLogin(event.target.value);
      }

    function settarSenha(event) {
        setSenha(event.target.value);
    }

    return (
        <div className='bodyLogin'>
            <section className="sectionLogin">

                <img className='logoLogin' src={perfilImg} alt="perfil" />
                <div className='cabecalhoLogin'>
                    <h1>Faça seu login</h1>
                    <p>Entre com o seu login e sua senha abaixo</p>
                </div>
                <Form className='formLogin'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Login" value={login} onChange={settarLogin}/>
                    
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Senha" value={senha} onChange={settarSenha}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>Entrar</Button>
                </Form>

            </section>
        </div >
    )
}

export default Login
