import React, { useState } from 'react';

const Popup = () => {
  const [isConfirmado, setIsConfirmado] = useState(false);

  const deletarClick = () => {
    setIsConfirmado(true);
  };

  const confirmarClick = () => {
    // Aqui você pode adicionar a lógica para deletar o agendamento
    // Por exemplo, você pode fazer uma requisição para um servidor ou atualizar o estado do componente

    // Após deletar o agendamento, você pode fazer algo como:
    // setisConfirmado(false);
    // Ou atualizar o estado do componente para refletir a exclusão
  };

  const cancelarClick = () => {
    setIsConfirmado(false);
  };

  return (
    <div>
      <button onClick={deletarClick}>Deletar Agendamento</button>

      {isConfirmado && (
        <div className="popup">
          <p>Tem certeza que deseja deletar o agendamento?</p>
          <button onClick={confirmarClick}>Sim</button>
          <button onClick={cancelarClick}>Cancelar</button>
        </div>
      )}

      {/* Resto do conteúdo do componente */}
    </div>
  );
};

export default Popup;
