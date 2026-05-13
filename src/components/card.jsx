import React from 'react'
import './css/card.css'

import { useState } from 'react';


function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

function Card({ title, image }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="card">
      <h4 style={{ transform: 'translateZ(translate(-50%, -50%))' }}>{title}</h4>
      <img className="cardImage" src={image} />
      <button className="cardButton" onClick={handleButtonClick}></button>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h2></h2>
        <p></p>
      </Modal>
    </div>
  );
}




export default Card