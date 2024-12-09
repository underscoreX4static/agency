import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      title: "Comment pouvez-vous m'aider à augmenter mes revenus sur OnlyFans ?",
      content:
        "Nous élaborons des stratégies personnalisées pour chaque créateur, incluant la gestion des abonnés, la promotion sur les réseaux sociaux, et des conseils sur la création de contenu engageant.",
    },
    {
      title: "Quels services incluez-vous dans votre gestion de compte OnlyFans ?",
      content:
        "Nous prenons en charge la création de contenu, la réponse aux messages, la gestion des abonnements et la mise en place de campagnes marketing pour maximiser vos revenus.",
    },
    {
      title: "Est-ce que je garde le contrôle de mon compte OnlyFans ?",
      content:
        "Oui, vous conservez un accès total et le contrôle de votre compte. Nous travaillons en collaboration avec vous pour atteindre vos objectifs tout en respectant vos préférences.",
    },
    {
      title: "Quels types de créateurs gérez-vous ?",
      content:
        "Nous travaillons avec une variété de créateurs, qu'ils soient débutants ou expérimentés, et nous adaptons nos services à leurs besoins spécifiques pour les aider à atteindre leurs objectifs.",
    },
    {
      title: "Comment puis-je savoir si vos services me conviennent ?",
      content:
        "Nous proposons une consultation gratuite pour discuter de vos besoins et de vos objectifs. Cela nous permet de créer une stratégie adaptée à votre situation.",
    },
    {
      title: "Quels sont vos tarifs pour la gestion de compte OnlyFans ?",
      content:
        "Nos tarifs dépendent des services choisis et de vos objectifs. Contactez-nous pour un devis personnalisé et découvrir nos forfaits adaptés à tous les créateurs.",
    },
    {
      title: "Comment puis-je contacter votre équipe pour plus d'informations ?",
      content:
        "Vous pouvez nous contacter via notre formulaire en ligne, par e-mail, ou sur nos réseaux sociaux. Notre équipe se fera un plaisir de répondre à vos questions rapidement.",
    },
  ];

        //START TOP 33%
      //END +=1650 
      // Pour desktop c'est pas mal , masi sur mmobil , vaut mieux repasser sur les valeurs de bases, 10% 1200

  return (
    <section className="text-white py-12 w-full lg:w-2/3 mx-auto">
      {/* Titre centré */}
      <div className="container mx-auto text-center mb-12">
        <h2 className="h2 section-faq">F.A.Q</h2>
      </div>

      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center relative">
        {/* Colonne gauche */}


        {/* Colonne droite avec accordeons et barre */}
        <div className=" w-full lg:pl-12 flex relative">
          {/* Barre toujours visible */}
          <div className="flex flex-col absolute lg:relative left-0 lg:left-auto top-0 h-full lg:h-auto w-1 lg:w-1 ">
            {faqs.map((_, index) => (
              <div
                key={index}
                className={`flex-1 w-full ${
                  activeIndex === index ? "bg-primary-blue" : "bg-gray-600"
                }`}
              ></div>
            ))}
          </div>

          {/* Accordéons DaisyUI */}
          <div className="space-y-4 w-full ml-4 lg:ml-8 ">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-arrow "
                onClick={() => setActiveIndex(index)}
              > 
                <input
                  type="radio"
                  name="faq-accordion"
                  defaultChecked={index === activeIndex}
                />
                <div
                className="collapse-title text-4xl font-bold"
                style={{ backgroundColor: '#6a58bd' }}
                >
                {faq.title}
                </div>
                <div
  className="collapse-content"
  style={{ backgroundColor: '#6a58bd', color: 'var(--light-gray)' }}
>
  <p>{faq.content}</p>
</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;