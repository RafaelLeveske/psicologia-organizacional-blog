import React from 'react';

import { Link } from 'react-router-dom';

import twitter from '../../assets/images/twitter.svg';
import instagram from '../../assets/images/instagram.svg';
import linkedin from '../../assets/images/linkedin.svg';
import mail from '../../assets/images/mail.svg';
import profile from '../../assets/images/profile.jpeg';

import './styles.css';

function Home() {
  return (
    <div className="landing-page container">
      <div className="bio">
        <div className="info">
          <h1>Tuanne Sousa</h1>
          <p>
            CTO na Rocketseat, apaixonado por Javascript e pelo ecossistema por
            volta das tecnologias NodeJS, ReactJS e React native.
          </p>
          <div className="social-media">
            <a href="/teste">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="/teste">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="/teste">
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="/teste">
              <img src={mail} alt="Mail" />
            </a>
          </div>
        </div>
        <img src={profile} alt="Profile" />
      </div>

      <section className="content">
        <div className="description">
          <strong>Ultimos posts:</strong>
          <Link to="/teste">Veja mais</Link>
        </div>

        <ul className="posts">
          <li>
            <strong>Primeiros passos da Psicologia</strong>
            <span>Tuanne Sousa</span>
          </li>
          <li>
            <strong>Primeiros passos da Psicologia</strong>
            <span>Tuanne Sousa</span>
          </li>
          <li>
            <strong>Primeiros passos da Psicologia</strong>
            <span>Tuanne Sousa</span>
          </li>
          <li>
            <strong>Primeiros passos da Psicologia</strong>
            <span>Tuanne Sousa</span>
          </li>
          <li>
            <strong>Primeiros passos da Psicologia</strong>
            <span>Tuanne Sousa</span>
          </li>
          <li>
            <strong>Primeiros passos da Psicologia</strong>
            <span>Tuanne Sousa</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
