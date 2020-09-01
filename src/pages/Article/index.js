import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import medium from '../../assets/images/medium.svg';
import instagram from '../../assets/images/instagram.svg';
import linkedin from '../../assets/images/linkedin.svg';
import mail from '../../assets/images/mail.svg';
import profile from '../../assets/images/profile.jpeg';

import colorMedium from '../../assets/images/color-medium.svg';
import colorInstagram from '../../assets/images/color-instagram.svg';
import colorLinkedin from '../../assets/images/color-linkedin.svg';
import colorMail from '../../assets/images/color-mail.svg';

import './styles.css';

function Article() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState(null);

  const { params } = useRouteMatch();

  useEffect(() => {
    api.get('users').then(response => {
      setUsers(response.data);
    });
  }, []);

  useEffect(() => {
    api.get(`posts/${params.id}`).then(response => {
      setPosts(response.data);
    });
  }, [params.id]);

  return (
    <div className="article-page container">
      <div className="header">
        {posts && (
          <>
            <h1>{posts.title}</h1>
            <h2>{posts.description}</h2>
          </>
        )}
        <div className="sub-header">
          <div className="profile">
            <img src={profile} alt="Tuanne Sousa" />
            <div className="info">
              {users.map(user => {
                return <strong key={user.id}>{user.name}</strong>;
              })}

              {posts && (
                <span>
                  {posts.date} · {posts.readTime} min read
                </span>
              )}
            </div>
          </div>
          {users.map(user => {
            return (
              <div key={user.id} className="social-media">
                <a href={user.firstSocialMediaUrl}>
                  <img src={medium} alt="medium" />
                </a>
                <a href={user.secondSocialMediaUrl}>
                  <img src={instagram} alt="Instagram" />
                </a>
                <a href={user.thirdSocialMediaUrl}>
                  <img src={linkedin} alt="Linkedin" />
                </a>
                <a href={user.mail}>
                  <img src={mail} alt="Mail" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <section className="post">{posts && <p>{posts.article}</p>}</section>
      {users.map(user => {
        return (
          <div key={user.id} className="footer">
            <div className="write-by">
              <img src={profile} alt="Tuanne Sousa" />
              <div className="description">
                <span>Escrito por:</span>
                <strong>Tuanne Sousa</strong>
                <p>
                  Psicologa, escritora e pesquisadora especializada em
                  psicologia organizacional.
                </p>
              </div>
            </div>
            <div key={user.id} className="social-media">
              <a href={user.firstSocialMediaUrl}>
                <img src={colorMedium} alt="medium" />
              </a>
              <a href={user.secondSocialMediaUrl}>
                <img src={colorInstagram} alt="Instagram" />
              </a>
              <a href={user.thirdSocialMediaUrl}>
                <img src={colorLinkedin} alt="Linkedin" />
              </a>
              <a href={user.mail}>
                <img src={colorMail} alt="Mail" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Article;
