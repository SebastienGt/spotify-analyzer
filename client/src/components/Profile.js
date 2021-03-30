import React from 'react';
import styled from 'styled-components/macro';
import { Router } from '@reach/router';
import mixins from '../styles/mixins';
import Main from '../styles/Main';
import { token } from '../spotify';
import { logout, getUser, getRecentlyPlayed, getUserInfo } from '../spotify';

const Loginned = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
  min-height: 100vh;
  h1 {
  }
`;


const Profile = () => (
  //const { user, topArtists, topTracks } = this.state;

    <Loginned>


      <h4>{ token } </h4>
      <button onClick={ getRecentlyPlayed }>Check Now Playing</button>
      <button onClick={ getUser }>Get User</button>
      <button onClick={ logout }>Logout</button>
      <button onClick={ getUserInfo }>Get All User Info</button>
    

    </Loginned>
);

export default Profile;
