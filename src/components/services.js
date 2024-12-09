import React from 'react';
import '../styles/services.css';

const Services = () => {
  return (
    <section className="services">
      <h2 className="h2 section-title" data-aos="fade-up" data-aos-delay="1000">
        NOS SERVICES
      </h2>
      <div className="wrapper">
        <div className="service-items">
          <div className="service-item" data-aos="slide-up">
            <h3 className='font-bold'>Configuration de Compte</h3>
            <div className="underline"></div>
            <p>Nouveau sur OnlyFans ? Nous vous guidons dans la configuration de votre compte et vous aidons à commencer à gagner de l'argent rapidement en vous montrant étape par étape comment développer un nouveau compte.</p>
          </div>
          <div className="service-item" data-aos="slide-up" data-aos-delay="200">
            <h3 className='font-bold'>Audit de Compte</h3>
            <div className="underline"></div>
            <p>Nous effectuerons un examen complet des performances historiques de votre compte et catégoriserons toutes les données pertinentes dans une présentation compréhensible pour identifier les éventuelles faiblesses et comprendre où se trouvent les plus grandes opportunités de croissance.</p>
          </div>
          <div className="service-item" data-aos="slide-up" data-aos-delay="300">
            <h3 className='font-bold'>Croissance du Compte</h3>
            <div className="underline"></div>
            <p>Notre équipe de gestion OnlyFans prend en charge tout pour vous apporter plus d'abonnés payants et de followers, vous permettant de vous concentrer sur la création de contenu de qualité pour gagner plus d'argent.</p>
          </div>

          <div className="service-item" data-aos="slide-up" data-aos-delay="400">
            <h3 className='font-bold'>Marketing 360°</h3>
            <div className="underline"></div>
            <p>Notre équipe de marketing OnlyFans à service complet convertit vos fans en super fans. Nous développons des relations avec vos abonnés les plus rémunérateurs afin que vous puissiez maximiser les pourboires et les revenus.</p>
          </div>
          <div className="service-item" data-aos="slide-up" data-aos-delay="500">
            <h3 className='font-bold'>Acquisition de Clients</h3>
            <div className="underline"></div>
            <p>Notre équipe sociale s'occupe de tout pour augmenter la portée et l'engagement de vos profils organiques, vous apportant ainsi plus d'abonnés payants et de followers. Ensuite, nous vous montrons comment les convertir en clients à forte rémunération.</p>
          </div>

          <div className="service-item" data-aos="slide-up" data-aos-delay="600">
            <h3 className='font-bold'>Stratégie de Marque</h3>
            <div className="underline"></div>
            <p>Nous avons une stratégie de marque et de relations publiques éprouvée qui vous démarquera de la concurrence et vous aidera à développer votre marque personnelle plus rapidement sur toutes les plateformes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
