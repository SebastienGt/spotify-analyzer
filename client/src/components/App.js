import React from 'react';
import styled from 'styled-components/macro';
import { Router } from '@reach/router';
import mixins from '../styles/mixins';
import Main from '../styles/Main';
import { token } from '../spotify';
import { logout, getUser, getCurrentPlaying, getUserInfo } from '../spotify';
import User from './User.js';
import CurrentPlaying from './CurrentPlaying';
import Nav from './Nav';
import logo from '../utils/spotify_logo.png';
import stylesheet from '../utils/stylesheet.module.css';
import UserInfo from './UserInfo.js';

import Accueil from './Accueil';
const App = () => {
    return (
      <>
          <div className={stylesheet.header}>
              <img className={stylesheet.logo} src={logo} alt="BigCo Inc. logo" width="200px" height="60px" align />
          </div>
            <Nav/>
          <div className={stylesheet.row}>
              <div className={stylesheet.columnLeft}>
                    <Router primary={false}>
                      <Accueil path="/" />
                      <CurrentPlaying path="playing" />
                      <User path="profil" />
                      <UserInfo path="UserInfo" />
                  </Router>
              </div>
              
          </div>
      </>
  );
}

/*
<div className={stylesheet.columnRight}>
                    <p>{token}</p>
              </div>
*/
export default App;