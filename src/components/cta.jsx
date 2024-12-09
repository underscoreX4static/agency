import React from 'react';
import bgCta from '../images/bg-cta.png';
import BtnCta from './BtnCta';

function Cta() {
  return (
    <section
      className="w-full flex justify-center items-center my-36"
      data-aos="zoom-in"
    >
      <div
        className="w-11/12 bg-cover bg-center text-center py-10 px-12 rounded-lg border-2 border-white transform transition-transform duration-300 hover:scale-105"
        style={{ backgroundImage: `url(${bgCta})` }}
      >
        <h3 className="text-white text-5xl sm:text-6xl font-bold mb-8">
          Prenez rendez-vous
        </h3>
        <h4 className="text-white text-3xl sm:text-4xl font-medium mb-8">
          Nous vous conseillerons sur la manière de réussir en quelques jours seulement !
        </h4>
        <p className="text-white text-2lg sm:text-xl  mb-10">
          Contactez-nous et nous nous assurerons que vous n'ayez plus jamais à travailler.
        </p>
        <div className="flex justify-center">
        <BtnCta
                text="Postuler"
                bgColor='bg-pink-400'
                textColor="text-white"
              />
        </div>
      </div>
    </section>
  );
}

export default Cta;