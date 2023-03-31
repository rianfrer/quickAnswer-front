import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../styles/MinhaConta.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import LoginAcess from '../utils/LoginAcess';
import Cabecalho from '../components/Cabecalho';
import Navbar from '../components/Navbar';

function MinhaConta() {

    const [senha1, setSenha1] = useState('');
    const [senha2, setSenha2] = useState('');

     function handleSubmit(event) {
            event.preventDefault();

            if (senha1 === "" || senha2 === "") {
                alert(`Para alterar a senha, você deve preencher os campos de nova senha`);
            }
            else if (senha1 === senha2) {
                LoginAcess.senha = senha1
                setSenha1("")
                setSenha2("")
                alert(`Senha alterada com sucesso!`);

            } else {
                alert("Alteração cancelada, digite corretamente a nova senha")
            }
        } 

    function settarSenha1(event) {
        setSenha1(event.target.value);
    }

    function settarSenha2(event) {
        setSenha2(event.target.value);
    }

    return (
        <>
            <Navbar />
            <Cabecalho titulo="Minha Conta"/>
            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="tabMinhaConta"
            >
                <Tab eventKey="home" title="Alterar senha" className='tabContent'>
                    <Form className='formMinhaConta'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="password" placeholder="Digite sua nova senha" value={senha1} onChange={settarSenha1} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Digite novamente sua nova senha" value={senha2} onChange={settarSenha2} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>Alterar senha</Button>
                    </Form>
                </Tab>
                <Tab eventKey="profile" title="Meu plano" className='tabContent'>
                    <p>
                        Serviço de chatbot de atendimento e agendamento! Com este plano de assinatura, você tem acesso a uma solução completamente automatizada e prática para gerenciar seu atendimento ao cliente e agendar serviços.
                    </p>
                    <p>
                        Valor da assinatura R$ 1000,00 por mês, nosso chatbot oferece uma experiência fácil e eficiente para seus clientes, garantindo um atendimento ágil e preciso em todos os momentos.
                    </p>
                    <p>
                        Com nosso chatbot, seus clientes poderão agendar serviços com apenas alguns cliques, sem a necessidade de ligar para a empresa ou enviar e-mails. Além disso, a chatbot é capaz de responder perguntas frequentes sobre sua empresa e serviços, tornando o processo de atendimento ainda mais prático.
                    </p>
                    <p>
                        Com a tecnologia de inteligência artificial avançada da IBM, nosso chatbot é capaz de entender a linguagem natural e responder de forma clara e precisa, tornando a experiência do cliente ainda mais satisfatória.
                    </p>
                    <p>
                        Em resumo, nosso plano de assinatura de chatbot de atendimento e agendamento oferece uma solução prática e automatizada para gerenciar seu atendimento ao cliente e agendar serviços. Você terá acesso a uma tecnologia de inteligência artificial avançada que tornará a experiência do cliente mais satisfatória e eficiente. Não perca a oportunidade de otimizar seu atendimento e aumentar a satisfação dos seus clientes.
                    </p>
                </Tab>
            </Tabs>
        </>
    );
}

export default MinhaConta;