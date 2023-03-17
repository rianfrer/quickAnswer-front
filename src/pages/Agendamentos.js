import '../styles/Agendamentos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

import Navbar from '../components/Navbar';

function Agendamentos() {

    const [data, setData] = useState(['']);

    useEffect(() => {
        axios.get('https://8f28faa5-e080-4c10-aefd-ccff50aa3382-bluemix.cloudantnosqldb.appdomain.cloud/agendamento_barber_assist/_all_docs')
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <>
            <Navbar />
            <Table striped bordered hover>
                <thead>
                    <tr> 
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Data do agendamento</th>
                        <th>Categoria</th>
                        <th>Serviço</th>
                        <th>Hora</th>
                        <th>Confirmado</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item._id}</td>
                            <td>{item.user_name}</td>
                            <td>{item.user_date}</td>
                            <td>{item.user_selecao_categoria}</td>
                            <td>{item.user_selecao_servico2}</td>
                            <td>{item.user_time}</td>
                            <td>{item.user_confirma_agendamento}</td>

                        </tr>
                    ))}
                </tbody>
            </Table>

        </>

    )
}

export default Agendamentos;