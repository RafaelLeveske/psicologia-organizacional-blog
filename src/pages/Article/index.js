import React from 'react';

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
  return (
    <div className="article-page container">
      <div className="header">
        <h1>Um ponto de virada</h1>
        <h2>
          A minha opinião padrão, até aquele momento, era que política é um
          assunto chato, distante e totalmente inútil.
        </h2>
        <div className="sub-header">
          <div className="profile">
            <img src={profile} alt="Tuanne Sousa" />
            <div className="info">
              <strong>Tuanne Sousa</strong>
              <span>Feb 22, 2019 · 6 min read</span>
            </div>
          </div>
          <div className="social-media">
            <a href="/teste">
              <img src={medium} alt="medium" />
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
      </div>
      <section className="post">
        <p>
          Há alguns meses, venho consumindo muito conteúdo sobre política. São
          livros, artigos, vídeos, podcasts e muitas, muitas notícias. Considero
          que, até meados dos primeiro semestre do ano passado, era praticamente
          um leigo no assunto. Pior, um desinteressado nesses temas. A minha
          opinião padrão, até aquele momento, era que política é um assunto
          chato, distante e totalmente inútil. Afinal, pensava eu, nada vai
          mudar. No entanto, por uma série de contingências que não consigo
          enumerar de forma ordenada, venho me interessando cada vez mais por
          ela, a política. Isso poderia parecer até estranho — o fato de o tema
          me cativar somente agora — tendo em vista que trabalho no serviço
          público estadual há mais de oito anos, desde 2010. Ou seja, estou
          imerso em política diariamente. Mas, infelizmente — ou felizmente — a
          política não havia me alcançado até então. Existe uma piada muito
          engraçada nas redes sociais que diz: “se você me conheceu antes de
          2008, me desculpe”. O ano pode ser alterado, mas a ideia é basicamente
          se desculpar por ter sido tão ignorante, desinteressado, insensível,
          pouco empático, imbecil, seja o que for, até determinado ponto, a
          partir do qual você mesmo considera que deixou de ser tão idiota
          assim. Pode ser uma ilusão pessoal, mas acredito sinceramente que
          existem pontos de virada na vida das pessoas. A minha “transformação”
          particular, ocorreu a partir de 2010, quando ingressei no serviço
          público, comecei a me interessar por morar sozinho e sair da casa dos
          meus pais, “alçar novos vôos” como se diz por aí. Claro, isso não
          acontece da noite para o dia. É um processo, como tudo na minha vida.
          Na minha vida pessoal, passei a considerar que deveria pedir desculpas
          a uma série de pessoas as quais tratei de forma insensível e
          desrespeitosa, ou às quais dei pouco valor à influência e crescimento
          que trouxeram à minha vida. A algumas eu pedi. A outras, não me
          lembro. Mas isso é assunto para outro texto. Em minha vida
          profissional e intelectual — na qual vou inserir o interesse pela
          política — sinto que me livrei, em doses homeopáticas e gradualmente,
          de uma espécie de apatia.
        </p>
      </section>
      <div className="footer">
        <div className="write-by">
          <img src={profile} alt="Tuanne Sousa" />
          <div className="description">
            <span>Escrito por:</span>
            <strong>Tuanne Sousa</strong>
            <p>
              Psicologa, escritora e pesquisadora especializada em psicologia
              organizacional.
            </p>
          </div>
        </div>
        <div className="social-media">
          <a href="/teste">
            <img src={colorMedium} alt="Medium" />
          </a>
          <a href="/teste">
            <img src={colorInstagram} alt="Instagram" />
          </a>
          <a href="/teste">
            <img src={colorLinkedin} alt="Linkedin" />
          </a>
          <a href="/teste">
            <img src={colorMail} alt="Mail" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Article;
