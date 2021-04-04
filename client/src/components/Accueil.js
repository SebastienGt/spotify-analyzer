import React from 'react';
import { token } from '../spotify';
import { logout, getUser, getCurrentPlaying, getUserInfo } from '../spotify'




const Accueil = () => {
  return (
    <div>
      <h2>Bienvenue dans Spotify Analyzer !</h2>
      <br/>
      <a>Nous avons créé ce site pour avoir les paroles des musiques Spotify que nous écoutions.</a>
      <br/>
      <a>Nous espérons que le site vous plaira !</a>
      <br/>
      <br/>
      <a>Un projet de Sébastien Friedberg et Alexandre Gomez.</a>
    </div>
  );
}


export default Accueil;
