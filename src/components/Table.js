import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = (props) => {
  const { data } = props;
  
  return (
    <table className="table">
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
    </table>
  );
}

export default Table;
