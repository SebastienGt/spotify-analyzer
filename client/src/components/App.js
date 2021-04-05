import React from 'react';
import { Router } from '@reach/router';
import User from './User.js';
import CurrentPlaying from './CurrentPlaying';
import Nav from './Nav';
import logo from '../utils/spotify_logo.png';
import stylesheet from '../utils/stylesheet.module.css';
import UserInfo from './UserInfo.js';
import Playlist from './Playlist';
import Artist from './Artist';

import Accueil from './Accueil';
import Stats from './Stats';

const App = () => {
    return (
    <>
      <div className={stylesheet.header}>
        <img className={stylesheet.logo} src={logo} alt="BigCo Inc. logo" width="200px" height="60px" align />
      </div>
      <Nav />
      <div className={stylesheet.content}>
        <Router primary={false}>
          <UserInfo path="UserInfo" />
          <Accueil path="/" />
          <CurrentPlaying path="playing" />
          <Artist path="artists" />
          <Playlist path="playlist" />
          <User path="profil" />
          <Stats path="stats" />
        </Router>
      </div>
    </>
  );
}

export default App;
