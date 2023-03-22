import '../styles/Agendamentos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { Alert, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Navbar from '../components/Navbar';

function Agendamentos() {

    var [id, setId] = useState('');
    const [data, setData] = useState([]);
    const [date, setDate] = useState('');

    function settarData(event) {
        setDate(event.target.value);
      }

    function settarID(event) {
        setId(event.target.value);
    }

//https://8f28faa5-e080-4c10-aefd-ccff50aa3382-bluemix.cloudantnosqldb.appdomain.cloud/agendamento_barber_assist/_all_docs

//https://us-south.functions.appdomain.cloud/api/v1/web/75a6c58b-8400-4fff-aac1-11d1bc743b16/default/crud_prjbarber.json?_id=1

//https://us-south.functions.appdomain.cloud/api/v1/web/75a6c58b-8400-4fff-aac1-11d1bc743b16/default/crud_prjbarber.json?user_date=2023-03-03

//https://us-south.functions.appdomain.cloud/api/v1/web/75a6c58b-8400-4fff-aac1-11d1bc743b16/default/crud_prjbarber.json?rows=total_rows

    function pesquisar(){
        if (id == '') {
            fetch("https://us-south.functions.appdomain.cloud/api/v1/web/75a6c58b-8400-4fff-aac1-11d1bc743b16/default/crud_prjbarber.json?user_date=" + date)
                .then((res) => res.json())
                .then((dadosApi) => setData(dadosApi))
                .catch((erro) => console.log(erro));
            console.log("Pesquisa realizada com sucesso " + id)
        } else if (date == '') {
            fetch("https://8f28faa5-e080-4c10-aefd-ccff50aa3382-bluemix.cloudantnosqldb.appdomain.cloud/agendamento_barber_assist/" + id)
                .then((res) => res.json())
                .then((dadosApi) => setData(dadosApi))
                .catch((erro) => console.log(erro));
            console.log("Pesquisa realizada com sucesso " + id)
        } else{
            fetch("https://us-south.functions.appdomain.cloud/api/v1/web/75a6c58b-8400-4fff-aac1-11d1bc743b16/default/crud_prjbarber.json?rows=total_rows")
                .then((res) => res.json())
                .then((dadosApi) => setData(dadosApi))
                .catch((erro) => console.log(erro));
            console.log("Pesquisa realizada com sucesso " + id)
        }
    }

    return (
        <>
            <Navbar />
            <div className='cabecalhoAg'>
                <h1>Agendamentos</h1>
            </div>
            <Form className='filtroAg'>
                <Row>
                    <Col>
                        <Form.Label>CÓDIGO DO AGENDAMENTO</Form.Label>
                        <Form.Control placeholder="Código do agendamento" value={id} onChange={settarID} />
                    </Col>
                    <Col>
                        <Form.Label>DATA DE AGENDAMENTO</Form.Label>
                        <Form.Control value={date} type="date" onChange={settarData}/>
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={pesquisar}>Pesquisar</Button>
                    </Col>
                </Row>
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr> 
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Data do agendamento</th>
                        <th>Categoria</th>
                        <th>Serviço</th>
                        <th>Hora</th>
                        <th>Origem</th>
                        <th>Canal de prospecção</th>
                        <th>Confirmado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={data.id}>
                            <td>{data._id}</td>
                            <td>{data.user_name}</td>
                            <td>{data.user_date}</td>
                            <td>{data.user_selecao_categoria}</td>
                            <td>{data.user_selecao_servico2}</td>
                            <td>{data.user_time}</td>◘
                            <td>{data.origem}</td>
                            <td>{data.channel}</td>
                            <td>{data.user_confirma_agendamento}</td>
                        </tr>
                </tbody>
            </Table>

        </>

    )
}

export default Agendamentos;




/* const axios = require('axios');

// configura a URL da API e a chave da API
const apiUrl = 'https://exemplo.com/api';
const apiKey = 'sua_chave_de_api';

// configura as opções da requisição
const options = {
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  },
  data: {
    chave1: 'valor1',
    chave2: 'valor2'
  }
};

// faz a requisição HTTP POST para a API
axios.post(apiUrl, options)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  }); */