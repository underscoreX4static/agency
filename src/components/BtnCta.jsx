import React from 'react';
import PropTypes from 'prop-types';

function BtnCta({ text, bgColor, textColor, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`py-4 px-10 rounded-lg text-3xl font-bold transition-all duration-300 transform hover:scale-105 ${bgColor} ${textColor}`}
    >
      {text} <i style={{ paddingLeft: '5px' }} className="fas fa-arrow-right"></i>
    </button>
  );
}

BtnCta.propTypes = {
  text: PropTypes.string, // Texte du bouton
  bgColor: PropTypes.string, // Classe Tailwind ou couleur CSS pour le fond
  textColor: PropTypes.string, // Classe Tailwind ou couleur CSS pour le texte
  onClick: PropTypes.func, // Fonction pour gérer le clic
};

BtnCta.defaultProps = {
  text: 'Postuler', // Valeur par défaut pour le texte
  bgColor: 'bg-primary-violet', // Classe par défaut pour le fond
  textColor: 'text-white', // Classe par défaut pour le texte
  onClick: () => {}, // Fonction vide par défaut
};

export default BtnCta;