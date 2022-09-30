import React from "react";
import '../styles/Agendamentos.css';


function Agendamentos() {

    // function addToTable() {

    //     //Definindo as variaveis e recebendo os dados
    //     let name = document.getElementById('name').value;
    //     let email = document.getElementById('email').value;
    //     let phone = document.getElementById('phone').value;
    //     let work = document.getElementById('work').value;
    //     let table = document.getElementById("myTable");

    //     let tableSize = table.rows.length; //Calculando o tamanho da Tabela
    //     let row = table.insertRow(tableSize); //Inserindo uma linha abaixo da Tabela
    //     let cell1 = row.insertCell(0); //Inserindo as celulas da linha
    //     let cell2 = row.insertCell(1);
    //     let cell3 = row.insertCell(2);
    //     let cell4 = row.insertCell(3);
    //     let cell5 = row.insertCell(4);
    //     let cell6 = row.insertCell(5);
    //     row.id = tableSize; //Adicionando o id no elemento a ser criado

    //     //Criando o codigo do botão para remover a linha
    //     let btnCode = "";

    //     //Preenchendo as celulas da linha
    //     cell1.innerHTML = tableSize;
    //     cell2.innerHTML = name;
    //     cell3.innerHTML = email;
    //     cell4.innerHTML = phone;
    //     cell5.innerHTML = work;
    //     cell6.innerHTML = btnCode;

    //     //Limpando os campos de inserção de dados
    //     document.getElementById('name').value = "";
    //     document.getElementById('email').value = "";
    //     document.getElementById('phone').value = "";
    //     document.getElementById('work').value = "";

    //     //Retornando 'false' para impedir o reload da pagina
    //     return false;
    // }

    // //Função para remover uma linha
    // function removeToTable(id) {

    //     let row = id.parentNode.parentNode.id; //Pegando o id do avô do botão
    //     row = document.getElementById(row); //Recebendo o elemento da linha pelo ID
    //     row.parentNode.removeChild(row); //Removendo a linha

    //     //Retornando 'false' para impedir o reload da pagina
    //     return false;
    // }

    return (
        <>

            <div className="tabela">
                <body>
                    <div id="navAgend">
                        Agendamentos
                    </div>
                    <section id="table">
                        <form method="POST">
                            <div id="input-data">
                                <input id="name" class="input-text" placeholder="Nome do cliente" type="text" required />
                                <input id="email" class="input-text" placeholder="Email do cliente" type="email" required />
                                <input id="phone" class="input-text" placeholder="Data do atendimento" type="number" required />
                                {/*<button class="input-btn" type="submit" value="Enviar"/>*/}
                            </div>
                        </form>
                        <table id="myTable">
                            <tr id="0">
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Profissão</th>
                                <th>Ação</th>
                            </tr>
                        </table>
                    </section>
                </body>
            </div>
        </>

    )
}

export default Agendamentos