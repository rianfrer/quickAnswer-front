import React from "react";
import '../styles/Conversas.css';
import Navbar from '../components/Navbar'
import MensagemChat from "../components/MensagemChat";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cabecalho from '../components/Cabecalho';


function Conversas() {
    return (
        <>
        <Cabecalho titulo="Conversas"/>
            <Navbar />
            <div className="bodyConversa">
                <div className="listaConversas">
                    {[
                        'Cliente 1',
                        'Cliente 2',
                        'Cliente 3',
                        'Cliente 4',
                    ].map((variant) => (
                        <Card
                            bg="Secondary"
                            key={variant}
                            text="Secondary"
                            style={{ width: '18rem' }}
                            className="mb-2"
                        >
                            <Card.Header>{variant}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Aqui vai ficar a última mensagem do cliente sendo realizado no chatbot.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
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
            </div>
        </>
    )
}

export default Conversas