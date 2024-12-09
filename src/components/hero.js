import React, { useEffect, useState } from 'react';
import heropink from '../images/hero-pink.png';
import heroviolet from '../images/hero-violet.png';
import bg from '../images/hero-bg.jpg';
import heroimg from '../images/hero-transparent.png';
import Header from '../components/header';

import '../styles/hero.css';

const Hero = () => {
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  useEffect(() => {
    const texts = ['OnlyFans', 'MYM', 'Fanvue', 'Fansly', 'Patreon'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    const type = () => {
      if (count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      document.querySelector('.typing').textContent = letter;
      if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(() => {
          document.querySelector('.typing').textContent = '';
          setTimeout(type, 600); // Initial delay before typing the next word
        }, 800); // Delay before starting to type the next word
      } else {
        setTimeout(type, 180); // Speed of typing
      }
    };

    setTimeout(() => {
      setIsCursorVisible(true); // Afficher le curseur après le délai initial
      type();
    }, 1500); // Initial delay before typing starts
  }, []);

  return (
    <div>
    <section
      className="section hero has-bg-image"
      aria-label="home"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="hero-content">
          <p className="hello" data-aos="fade-left" data-aos-delay="100">
            🇫🇷 Salut à toi jeune entrepreneuse !
          </p>
          <h1 className="h1 hero-title" data-aos="fade-left" data-aos-delay="700">
            Agence <br />
            <strong style={{ color: '#fbb0c8' }}>
              <span className="typing"></span>
              <span className={`cursor ${isCursorVisible ? 'visible' : 'hidden'}`}>|</span>
            </strong>
          </h1>
          <p className="hero-text">
            Nous proposons des solutions de management et de marketing 360° 🚀<br />
            Notre objectif est d'augmenter les revenus de nos modèles tout en leur faisant gagner du temps.
          </p>
          <div className="btn-wrapper" data-aos="fade-up" data-aos-delay="1000">
            <a href="#" className="btn btn-outline">Commencer</a>
          </div>
        </div>
        <div className="hero-image">
          <figure className="img-holder">
            <img
              src={heroimg} 
              width="500"
              height="500"
              alt="hero banner"
              className="img-cover"
            />
          </figure>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Hero;
