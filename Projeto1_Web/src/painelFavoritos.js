import React from 'react';
import './PainelFavoritos.css'; // Importe o arquivo CSS separado

function PainelFavoritos({ listaJ, onVoltar }) {

  return (
    <div className="container" id="painelFav">
      {
        listaJ.length < 1 ?
          <p>Nenhum jogador Favoritado</p>
          :
          <div className="favoritos-grid">
            {listaJ.map((el, index) => (
              <div key={index} className="favorito-quadrado">
                <img src={el.imagem} alt={el.nome} />
                <p>Nome: {el.nome}</p>
                <p>Time: {el.time}</p>
                <p>Numero: {el.numeroC}</p>
                <p>Idade: {el.idade}</p>
              </div>
            ))}
          </div>
      }
      <div>
        <button className="buttonCard" id="voltar" onClick={onVoltar}>Voltar</button>
      </div>
    </div>
  );
}

export default PainelFavoritos;