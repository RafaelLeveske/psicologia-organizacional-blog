import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="side-content">
        <Link to="/">
          <img src={logo} alt="Logo" />
          <strong>Psicologia Organizacional</strong>
        </Link>
      </div>
      <div className="search">
        <input type="text" placeholder="Pesquisar artigo..." />
        <button type="button">Pesquisar</button>
      </div>
    </header>
  );
};

export default Header;
