import React from 'react';
import './Header.css';
import pokeballLetter from './assets/pokeball-letter.png'; // Chemin mis à jour
import pokeballLogo from './assets/pokeball-logo.png'; // Chemin mis à jour

function Header() {
  return (
    <header className="header">
      <img src={pokeballLetter} alt="Lettre Pokeball" className="header-letter" />
      <img src={pokeballLogo} alt="Logo Pokeball" className="header-logo" />
    </header>
  );
}

export default Header;
