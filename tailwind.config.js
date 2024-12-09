module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
   

      borderRadius: {
        '3xl': '1.75rem', // Crée une nouvelle taille entre 2xl et full
      },
      colors: {



        // Couleurs principales
        'background-black': 'hsla(0, 0%, 6%, 1)', /* Fond principal */
        'text-white': 'hsla(0, 0%, 100%, 1)', // Texte principal
        'text-white-muted': 'hsla(0, 0%, 100%, 0.7)', // Texte secondaire
        'primary-blue-dark': 'hsl(220, 85%, 40%)', // Plus sombre
        'primary-violet-dark': 'hsl(260, 70%, 45%)', // Plus sombr

        // Couleurs primaires
        'primary-blue': 'hsla(220, 85%, 60%, 1)', // Accent bleu principal
        'primary-blue-light': 'hsla(220, 85%, 70%, 1)', // Bleu clair pour les hover
        'primary-violet': 'hsla(260, 70%, 65%, 1)', // Accent violet principal
        'primary-violet-light': 'rgb(0, 0, 0)', // Violet clair pour les hover

        // Boutons
        'button-bg': 'hsla(220, 85%, 20%, 1)', // Fond des boutons
        'button-hover': 'hsla(220, 85%, 30%, 1)', // Fond des boutons au survol

        // Bordures et overlays
        'border-light': 'hsla(0, 0%, 100%, 0.1)', // Bordures discrètes
        'overlay-dark': 'hsla(0, 0%, 0%, 0.6)', // Overlay sombre

        // Cartes
        'card-bg': 'hsla(220, 20%, 10%, 1)', // Fond des cartes
        'card-hover': 'hsla(220, 20%, 15%, 1)', // Fond des cartes au survol

        // Ombres
        'shadow-blue': 'hsla(220, 85%, 50%, 0.3)', // Ombre bleutée
        'shadow-violet': 'hsla(260, 70%, 50%, 0.3)', // Ombre violette
      },
    },
  },
  plugins: [require("daisyui")], // Ajoute DaisyUI ici
};