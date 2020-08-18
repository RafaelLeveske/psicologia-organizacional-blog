import React from 'react';

import logo from '../../assets/images/logo.svg';

import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="side-content">
        <img src={logo} alt="Logo" />
        <strong>Psicologia Organizacional</strong>
      </div>
      <div className="search">
        <input type="text" placeholder="Pesquisar artigo..." />
        <button type="button">Pesquisar</button>
      </div>
    </header>
  );
};

export default Header;
