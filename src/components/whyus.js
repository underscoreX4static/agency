import React from "react";
import "../styles/whyus.css";

const advantages = [
  {
    id: 1,
    icon: "fa-solid fa-code",
    title: "Boostez votre profil avec nos outils sur mesure",
  },
  {
    id: 2,
    icon: "fa-solid fa-database",
    title: "Analyse approfondie pour maximiser vos gains",
  },
  {
    id: 3,
    icon: "fa-solid fa-handshake-simple",
    title: "Accompagnement dédié pour un succès garanti",
  },
  {
    id: 4,
    icon: "fa-solid fa-arrow-trend-up",
    title: "Stratégies de croissance pour des revenus en hausse",
  },
  {
    id: 5,
    icon: "fa-solid fa-clock",
    title: "Gagnez du temps avec nos solutions automatisées",
  },
  {
    id: 6,
    icon: "fas fa-bolt",
    title: "Accélérez votre réussite avec nos campagnes sur mesure",
  },
];

const WhyUs = () => {
  return (
    <section className="modals">
      <h2 className="h2 section-title" data-aos="fade-up" data-aos-delay="100">
        POURQUOI NOUS ?
      </h2>
      <div className="main-container">
        <div className="cards">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className={`card card-${advantage.id}`}
              data-aos="zoom-in"
              data-aos-delay={advantage.id * 200}
            >
              <div className="card__icon">
                <i className={advantage.icon}></i>
              </div>
              <h3 className="card__title text-3xl font-bold">{advantage.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;