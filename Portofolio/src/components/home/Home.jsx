import React from 'react';
import './Home.css';
import Me from '../../assets/home_profile.jpg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <div className="left">
          <img src={Me} alt="Deepika Reddy Profile" className="home__img" />
        </div>
        <div className="right">
          <h1 className="home__name">Deepika Reddy</h1>
          <p className="home__education">
            Enthusiastic Computer Science Student <br />
            Passionate about Software Development & Full-Stack Engineering
          </p>
          <HeaderSocials />
          <a href="#contact" className="btn contact-btn">
            Contact Me
          </a>
        </div>
      </div>

      <ScrollDown />

    </section>
  );
};

export default Home;
