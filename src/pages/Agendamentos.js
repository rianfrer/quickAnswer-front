import React from "react";
import { useState } from 'react';
import axios from 'axios';
import '../styles/Agendamentos.css';
import Navbar from '../components/Navbar';


function Agendamentos() {

    function addToTable() {

        //Definindo as variaveis e recebendo os dados
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let work = document.getElementById('work').value;
        let table = document.getElementById("myTable");

        let tableSize = table.rows.length; //Calculando o tamanho da Tabela
        let row = table.insertRow(tableSize); //Inserindo uma linha abaixo da Tabela
        let cell1 = row.insertCell(0); //Inserindo as celulas da linha
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        row.id = tableSize; //Adicionando o id no elemento a ser criado

        //  Preenchendo as celulas da linha
        cell1.innerHTML = tableSize;
        cell2.innerHTML = name;
        cell3.innerHTML = email;
        cell4.innerHTML = phone;
        cell5.innerHTML = work;

        //  Limpando os campos de inserção de dados
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('phone').value = "";
        document.getElementById('work').value = "";

        //Retornando 'false' para impedir o reload da pagina
        return false;
    }

    // Função para remover uma linha
    function removeToTable(id) {

        let row = id.parentNode.parentNode.id; //Pegando o id do avô do botão
        row = document.getElementById(row); //Recebendo o elemento da linha pelo ID
        row.parentNode.removeChild(row); //Removendo a linha

        //Retornando 'false' para impedir o reload da pagina
        return false;
    }
    
  const [nome, setNome] = useState("")
  const [dataHora, setDataHora] = useState("")
  const [categoria, setCategoria] = useState("")
  const [status, setStatus] = useState("")
  const [servico, setServico] = useState("")

  function handleSubmit(e){
    e.preventDefault();
        const usuario = {nome, dataHora, categoria, status, servico}
        
        axios.get("http://localhost:3001/usuarios", usuario)
        .then( (res) => {
          console.log(res.data);
        } )     
  }

    return (
        <>
        {/* onSubmit={addToTable()}*/}
            <Navbar />
            <div className="tabela">
                <body>
                    <div id="navAgend">
                        Agendamentos
                    </div>
                    <section id="table">
                        <form onSubmit={(e)=> handleSubmit(e)} method="POST">
                            <div id="input-data">
                                <input id="name" class="input-text" placeholder="Nome do cliente" onChange={(e)=> setNome(e.target.value)} type="text" required />
                                <input id="status" class="input-text" placeholder="Status" onChange={(e)=> setStatus(e.target.value)} type="text" />
                                <input id="data" class="input-text" placeholder="Data do atendimento" onChange={(e)=> setDataHora(e.target.value)} type="data" />
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

export default Agendamentos