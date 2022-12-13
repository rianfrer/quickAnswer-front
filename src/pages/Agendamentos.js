import React, { Component } from "react";
import dataBase from '../utils/DataBase';
import '../styles/Agendamentos.css';
import Navbar from '../components/Navbar';


class Agendamentos extends Component {

    state = {
        agendamentos: [],
    }

    async componentDidMount() {
        const response = await dataBase.get('');

        console.log(response.data);

        this.setState({ agendamentos: response.data })
    }

    render() {

        const { agendamentos } = this.state;

        return (
            <>
                <Navbar />
                <div className="tabela">
                    <body>
                        <div id="navAgend">
                            Agendamentos
                        </div>
                        <section id="table">
                            <form >
                                <div id="input-data">
                                    <input id="name" class="input-text" placeholder="Nome do cliente" type="text" required />
                                    <input id="status" class="input-text" placeholder="Status" type="text" />
                                    <input id="data" class="input-text" placeholder="Data do atendimento"  type="data" />
                                    <input class="input-btn" type="submit" value="Enviar" />
                                </div>
                            </form>
                            <table id="myTable">
                                <tr id="0">
                                    <th>Id</th>
                                    <th>Nome</th>
                                    <th>Horario</th>
                                    <th>Categoria</th>
                                    <th>Servico</th>
                                    <th>Status</th>
                                </tr>
                            </table>
                        </section>
                    </body>
                </div>
            </>

        )
    }
}

export default Agendamentos