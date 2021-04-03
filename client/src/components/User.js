import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Router } from '@reach/router';
import mixins from '../styles/mixins';
import Main from '../styles/Main';
import { token } from '../spotify';
import { logout, getUser, getCurrentPlaying, getUserInfo } from '../spotify';
import Component from 'styled-components';
import CurrentPlaying from './CurrentPlaying';
import Nav from './Nav';


const User = () => {
  return (
    <div>
      <a>{ token } </a>
      <button onClick={ getCurrentPlaying }>Check Now Playing</button>
      <button onClick={ getUser }>Get User</button>
      <button onClick={ logout }>Logout</button>
      <button onClick={ getUserInfo }>Get All User Info</button>
    </div>
  );
}


export default User;
