import React from "react";
import blog1 from "../images/blog-1.jpg";
import blog2 from "../images/blog-2.jpg";
import blog3 from "../images/blog-3.jpg";

const Blog = () => {
  // Données dynamiques uniquement dans le tableau
  const guides = [
    {
      id: 1,
      image: blog1,
      date: "Jan 10, 2023",
      title: "10 astuces pour maximiser vos abonnements mensuels",
      description:
        "Découvrez les stratégies clés pour attirer et fidéliser vos abonnés, et augmenter vos revenus récurrents.",
    },
    {
      id: 2,
      image: blog2,
      date: "Feb 15, 2023",
      title: "Créer du contenu engageant pour vos abonnés",
      description:
        "Apprenez à produire du contenu de qualité qui captivera votre audience et la fera revenir chaque mois.",
    },
    {
      id: 3,
      image: blog3,
      date: "Mar 20, 2023",
      title: "Comment promouvoir votre profil sur les réseaux sociaux",
      description:
        "Une stratégie complète pour utiliser Instagram, Twitter et TikTok afin de générer plus d'abonnés.",
    },
  ];

  return (
    <section className="py-24 mb-24">
      <div className="mx-auto w-full px-20 sm:px-6 lg:px-8 mb-10">
        <h2 className="h2 section-blog w-full sm:w-6/12 mx-auto mb-12 text-center">
          NOS GUIDES POUR ENFIN FAIRE DÉCOLLER VOS REVENUS !
        </h2>
        <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl"
            >
              <div className="flex items-center">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="rounded-t-2xl w-full object-cover"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl bg-white">
                <span className="text-indigo-600 font-medium mb-3 block">
                  {guide.date}
                </span>
                <h4 className="text-2xl text-gray-900 font-bold leading-8 mb-5">
                  {guide.title}
                </h4>
                <p className="text-gray-500 leading-6 mb-10">
                  {guide.description}
                </p>
                <a
                  href="javascript:;"
                  className="cursor-pointer text-2xl text-indigo-600 font-bold mr-8 hover:underline"                >
                  En savoir plus
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;