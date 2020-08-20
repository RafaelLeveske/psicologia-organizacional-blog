import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import api from '../../services/api';

import medium from '../../assets/images/medium.svg';
import instagram from '../../assets/images/instagram.svg';
import linkedin from '../../assets/images/linkedin.svg';
import mail from '../../assets/images/mail.svg';
import profile from '../../assets/images/profile.jpeg';

import './styles.css';

function Home() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState(() => {
    const storagePosts = localStorage.getItem('@reactblog:posts');
    if (storagePosts) {
      return JSON.parse(storagePosts);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@reactblog:posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    api.get('users').then(response => {
      setUsers(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('posts').then(response => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="landing-page container">
      {users.map(user => {
        return (
          <div key={user.id} className="bio">
            <div className="info">
              <h1>{user.name}</h1>
              <p>{user.description}</p>
              <div className="social-media">
                <a href={user.firstSocialMediaUrl}>
                  <img src={medium} alt="Medium" />
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
            </div>
            <img src={profile} alt="Profile" />
          </div>
        );
      })}

      <section className="content">
        <div className="description">
          <strong>Últimas postagens:</strong>
          <Link to="/teste">Veja mais...</Link>
        </div>

        <ul className="posts">
          {posts.map(post => {
            return (
              <li key={post.id}>
                <Link to={`/article/${post.id}`}>
                  <strong>{post.title}</strong>
                  <span>{post.description}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Home;
