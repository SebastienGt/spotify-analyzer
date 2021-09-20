import React from 'react';
import logo from "../utils/spotify_logo.png";
import stylesheet from "../utils/stylesheet.module.css";

const Accueil = () => {
  return (
    <>
      <div className={stylesheet.header}>
                <img
                    className={stylesheet.logo}
                    src={logo}
                    alt='BigCo Inc. logo'
                    width='200px'
                    height='60px'
                    align
                />
      </div>
      <h2 href>Bienvenue dans Spotify Analyzer !</h2>
      <br/>
      <a href>Nous avons créé ce site pour avoir les paroles des musiques Spotify que nous écoutions.</a>
      <br/>
      <a href>Nous espérons que le site vous plaira !</a>
      <br/>
      <br/>
      <a href>Un projet de Sébastien Friedberg et Alexandre Gomez.</a>
    </>
  );
}


export default Accueil;
