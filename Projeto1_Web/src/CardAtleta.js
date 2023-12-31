import React, { useState } from 'react';

function CardAtleta({
  jogador,
  listaJ,
  setListaJ,
  setInput,
  setMostrarCard,
}) {
  const [mensagem, setMensagem] = useState('');

  const favJ = () => {
    const novoAtleta = {
      nome: jogador.nome,
      idade: jogador.idade,
      time: jogador.time,
      numeroC: jogador.camisa,
      imagem: jogador.imagem,
    };
    setListaJ([...listaJ, novoAtleta]);
    setInput('');
    setMensagem('Jogador salvo nos favoritos!');
    setTimeout(() => {
      setMensagem('');
    }, 2000);
  };

  return (
    <div className="main">
      <img src={jogador.imagem} alt={jogador.nome} />
      <h2>Nome: {jogador.nome}</h2>
      <span>Idade: {jogador.idade}</span>
      <span>Camisa: {jogador.camisa}</span>
      <span>Time: {jogador.time}</span>
      <div>
        <button className="buttonCard" id="favoritar" onClick={favJ}>
          Favoritar Jogador
        </button>
      </div>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default CardAtleta;