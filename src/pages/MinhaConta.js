import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../styles/MinhaConta.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import LoginAcess from '../utils/LoginAcess';



import Navbar from '../components/Navbar';

function MinhaConta() {

    const [senha1, setSenha1] = useState('');
    const [senha2, setSenha2] = useState('');


/*     function handleSubmit(event) {
        event.preventDefault();
        const data = {
            senha1,
            senha2
        }
        if (data.login === LoginAcess.login && data.senha === LoginAcess.senha) {
            alert(`Access Permitido! Seja bem vindo ` + LoginAcess.nome);
            window.location.href = '/inicio';
        } else {
            alert("Access Negado, tente novamente ou crie outra conta")
        }
    } */

    function settarSenha1(event) {
        setSenha1(event.target.value);
      }

    function settarSenha2(event) {
        setSenha2(event.target.value);
    }

    return (
        <>
            <Navbar />
            <div className='cabecalhoAg'>
                <h1>Minha conta</h1>
            </div>
            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="tabMinhaConta"
            >
                <Tab eventKey="home" title="Alterar senha" className='tabContent'>
                    <Form className='formLogin'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="password" placeholder="Digite sua nova senha" value={senha1} onChange={settarSenha1} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Repita sua nova senha" value={senha2} onChange={settarSenha2} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={''}>Alterar senha</Button>
                    </Form>
                </Tab>
                <Tab eventKey="profile" title="Meu plano" className='tabContent'>
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                </Tab>
            </Tabs>
        </>
    );
}

export default MinhaConta;