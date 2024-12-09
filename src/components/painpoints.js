import React from 'react';
import '../styles/painpoints.css';
import '../App.css';

const painPointsData = [
  {
    id: 1,
    icon: "call-outline",
    title: "Concurrence",
    text: "Il y a plus de 2 millions de créateurs différents sur OnlyFans.",
  },
  {
    id: 2,
    icon: "shield-checkmark-outline",
    title: "Manque de stratégie",
    text: "La majorité des créateurs n'ont pas vraiment de stratégie claire et définie.",
  },
  {
    id: 3,
    icon: "cloud-download-outline",
    title: "Manque de temps",
    text: "Ils n'ont pas le temps de publier et de répondre à tous les messages.",
  },
  {
    id: 4,
    icon: "pie-chart-outline",
    title: "Manque d'idées",
    text: "De nombreux modèles n'ont ni idées ni équipe pour les aider à créer du contenu.",
  },
];

function Painpoints() {
  return (
    <section className="section pain-point" aria-labelledby="pain-point-label" data-aos="fade-up">
      <div className="container">
        {/* Titre centralisé */}
        <h2
          className="h2 section-title text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          OnlyFans, c'est pas facile !
        </h2>

        {/* Liste générée dynamiquement */}
        <ul className="grid-list" data-aos="fade-up" data-aos-delay="200">
          {painPointsData.map((point) => (
            <li key={point.id}>
  <div
    className="pain-point-card"
    data-aos="fade-up"
    data-aos-delay={600 + point.id * 200}
  >
    <div className="card-icon">
      <ion-icon name={point.icon} aria-hidden="true"></ion-icon>
    </div>
    <h3 className="h4 card-title">{point.title}</h3>
    <p className="card-text">{point.text}</p>
  </div>
</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Painpoints;