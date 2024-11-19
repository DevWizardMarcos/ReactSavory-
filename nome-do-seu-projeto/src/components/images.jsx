import React, { useState, useEffect } from 'react';

const imagens = [
  '../css/teste1.jpg',
  '../css/teste.jpg',
  '../css/teste3.jpg',
  // adicione mais imagens aqui
];

const Carrossel = () => {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((indice + 1) % imagens.length);
    }, 3000);
    return () => clearInterval(intervalo);
  }, [indice]);

  return (
    <div className="carrossel">
      {imagens.map((imagem, index) => (
        <div
          key={index}
          className={`carrossel-item ${indice === index ? 'ativo' : ''}`}
          style={{ backgroundImage: `url(${imagem})` }}
        />
      ))}
    </div>
  );
};

export default Carrossel;