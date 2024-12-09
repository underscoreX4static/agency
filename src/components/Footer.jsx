import React from 'react';
import BtnCta from './BtnCta';
function Footer() {
  return (
<div>
<div className="bg-primary-blue-light text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Texte à gauche */}
        <div className="text-left md:w-2/3">
          <h3 className="text-4xl sm:text-5xl font-bold leading-tight">
            Inscris-toi. Commence. Pars en vacances !
          </h3>
        </div>

        {/* Bouton à droite */}
        <div className="mt-8 md:mt-0 md:w-1/3 flex justify-end">
        <BtnCta
                text="Postuler"
                bgColor='bg-pink-400'
                textColor="text-white"
              />
        </div>
      </div>
    </div>
    <footer className="bg-gray-900 text-white py-12 px-12">
      <div className="mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Colonne 1 : Logo et réseaux sociaux */}
        <div>
          <h3 className="text-6xl font-bold mb-6">Moony</h3>
          <p className=" mb-6">© 2023 Moony. <br/> Tous droits réservés.</p>
          <div className="flex space-x-12">
            <a href="#" className="text-white text-4xl text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white text-4xl text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white text-4xl text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white text-4xl text-gray-400">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Colonne 2 : Informations de contact */}
        <div>
          <h4 className="text-3xl font-bold mb-6">Informations de contact</h4>
          <p className=" mb-3 text-gray-400">52 Square Pedro Flores, Rennes</p>
          <p className=" mb-3 text-gray-400">info@email.com</p>
          <p className="text-gray-400">00 (123) 456 78 90</p>
        </div>

        {/* Colonne 3 : Liens utiles */}
        <div>
          <h4 className="text-3xl font-bold mb-6">En savoir plus</h4>
          <ul className="space-y-3 ">
            <li>
              <a href="#" className="text-gray-400">
                À propos de nous
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400">
                Notre Histoire
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400">
                Nos Guides
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400">
                Conditions d'utilisations
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400">
                Politique de Confidentialité
              </a>
            </li>
          </ul>
        </div>

        {/* Colonne 4 : Newsletter */}
        <div>
          <h4 className="text-3xl font-bold mb-6">Rejoindre la Newsletter</h4>
          <p className=" mb-6 text-gray-400">
            Uniquement des bons conseils et de la bienveillance.
          </p>
          <form className="flex space-x-4">
            <input
              type="email"
              placeholder="Adresse Email"
              className="flex-1 py-3 px-4 rounded-lg bg-white text-black text-lg"
            />
            <button
              type="submit"
              className="py-3 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;