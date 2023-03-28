import React from "react";
import '../styles/Conversas.css';
import Navbar from '../components/Navbar'
import MensagemChat from "../components/MensagemChat";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Conversas() {
    return (
        <>
            <Navbar />
            <div className='cabecalhoAg'>
                <h1>Conversas</h1>
            </div>
            <div className="bodyChat">
                <div >
                    <MensagemChat 
                        posicao="top-start" 
                        nome="Cliente" 
                        mensagem="Bom dia"
                        tempo="5 min atrás"
                    />
                    <MensagemChat 
                        posicao="top-end" 
                        nome="Você" 
                        mensagem="Olá. Tudo bem?  Somos Ragna Barber Shop. Eu me chamo BotBruk, seu atendente virtual. Qual seu nome?" 
                        tempo="5 min atrás"
                    />
                    <MensagemChat 
                        posicao="top-start" 
                        nome="Cliente" 
                        mensagem="Me chamo Alice"
                        tempo="4 min atrás"
                    />
                    <MensagemChat 
                        posicao="top-end" 
                        nome="Você" 
                        mensagem="É uma honra servi-lo(a), Alice. Como posso lhe ajudar? [1] - Agendar horário [2] - Serviços Disponíveis [3] - Nossa localização" 
                        tempo="4 min atrás"
                    />
                    <MensagemChat 
                        posicao="top-start" 
                        nome="Cliente" 
                        mensagem="1"
                        tempo="agora"
                    />
                </div>
                <div className="formConversa" >
                    <Form.Control type="text" placeholder="Escreva sua mensagem aqui" />
                    <Button className='btnChat' variant="primary" onClick={''}>Enviar</Button>
                </div>
            </div>
        </>
    )
}

export default Conversas