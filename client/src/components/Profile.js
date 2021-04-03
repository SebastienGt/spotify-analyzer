import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Router } from '@reach/router';
import mixins from '../styles/mixins';
import Main from '../styles/Main';
import { token } from '../spotify';
import { logout, getUser, getCurrentPlaying, getUserInfo } from '../spotify';
import Component from 'styled-components';
import User from './User.js';
import CurrentPlaying from './CurrentPlaying';
import Nav from './Nav';

const Loginned = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
  min-height: 100vh;
  h1 {
  }
`;

const Profile = () => {
  return (
    <Loginned>
      <Nav />
      <Router primary={false}>
        <User path="/" />
        <CurrentPlaying path="playing" />
      </Router>
    </Loginned>
  );
}


export default Profile;
