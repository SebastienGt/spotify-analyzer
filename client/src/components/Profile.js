import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Router } from '@reach/router';
import mixins from '../styles/mixins';
import Main from '../styles/Main';
import { token } from '../spotify';
import { logout, getCurrentPlaying, getUserInfo } from '../spotify';
import Component from 'styled-components';
import User from './User.js';
import CurrentPlaying from './CurrentPlaying';
import Nav from './Nav';
import theme from '../styles/theme';
import logo from '../utils/spotify_logo.png';
import stylesheet from '../utils/stylesheet.module.css';
import UserInfo from './UserInfo.js';

const { colors, fontSizes } = theme;


const Loginned = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
  min-height: 100vh;
  h1 {
  }
`;


const LoginButton = styled.a`
  display: inline-block;
  background-color: ${colors.green};
  color: ${colors.white};
  border-radius: 30px;
  padding: 17px 35px;
  margin: 20px 0 70px;
  min-width: 160px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  &:hover,
  &:focus {
    background-color: ${colors.offGreen};
  }
`;


const Profile = () => {
    return (
      <>
          <div className={stylesheet.header}>
              <img className={stylesheet.logo} src={logo} alt="BigCo Inc. logo" width="200px" height="60px" align />
          </div>
            <Nav/>
          <div className={stylesheet.row}>
              <div className={stylesheet.columnLeft}>
                    <Router primary={false}>
                      <User path="/" />
                        <CurrentPlaying path="playing" />
                        <UserInfo path="UserInfo" />
                  </Router>
              </div>

          </div>

      </>

  );
}


export default Profile;
