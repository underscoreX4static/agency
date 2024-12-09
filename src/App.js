import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Guides from './pages/Guides';  // Importation du composant Guides
import Blog from './pages/Blog';      // Importation du composant Blog
import Header from './components/header'; // Assure-toi d'importer le Header si nécessaire
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ajout de l'importation du CSS d'AOS

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en millisecondes
    });
  }, []);

  return (
    <Router>
      <Header /> {/* Assure-toi que le Header est affiché sur toutes les pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/guides" element={<Guides />} /> {/* Route pour Guides */}
        <Route path="/blog" element={<Blog />} />     {/* Route pour Blog */}
      </Routes>
    </Router>
  );
}

export default App;
