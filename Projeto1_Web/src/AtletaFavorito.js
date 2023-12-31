import React from 'react';

function AtletaFavorito({ atleta }) {
  return (
    <div className="atleta-favorito">
      <img src={atleta.imagem} alt={atleta.nome} />
      <div className="atleta-info">
        <h2>{atleta.nome}</h2>
        <p>Time: {atleta.time}</p>
      </div>
    </div>
  );
}

export default AtletaFavorito;