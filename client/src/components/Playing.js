import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Router } from '@reach/router';
import mixins from '../styles/mixins';
import Main from '../styles/Main';
import { token } from '../spotify';
import { logout, getUser, getCurrentPlaying, getUserInfo } from '../spotify';
import Spotify from 'spotify-web-api-js';
import Component from 'styled-components';
import CurrentPlaying from './CurrentPlaying';
import Nav from './Nav';
import Navbar from '../components/Navbar';
import theme from '../styles/theme';
import logo from '../utils/spotify_logo.png';
import stylesheet from '../utils/stylesheet.module.css';

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

const spotifyWebApi = new Spotify;

const Profile = () => {
    return (
        <>
            <div className={stylesheet.header}>
                <img className={stylesheet.logo} src={logo} alt="BigCo Inc. logo" width="200px" height="60px" align />
            </div>
            <Nav />
            <div className={stylesheet.row}>
                <div className={stylesheet.columnLeft}>
                    <Router primary={false}>
                        <CurrentPlaying path="playing" />
                    </Router>
                </div>

                <div className={stylesheet.columnRight}>
                    <p>LYRICS ICI
                        <button onClick={logout}>Logout</button>
                        {token}
                    </p>

                </div>

            </div>

        </>

    );
}


export default Profile;

    //<Loginned>
    //  <a>{ token } </a>
    //  <button onClick={ getCurrentPlaying }>Check Now Playing</button>
    //  <button onClick={ getUser }>Get User</button>
    //  <button onClick={ logout }>Logout</button>
    //  <button onClick={ getUserInfo }>Get All User Info</button>
    //  <Nav />
    //  <Router primary={false}>
    //    <CurrentPlaying path="playing" />
    //  </Router>
    //</Loginned>


      //<>
      //    <div>
      //        <Navbar/>
      //    </div>
      //    <div className={stylesheet.row}>
      //        <div className={stylesheet.columnLeft}>
      //            <Nav />
      //            <Router primary={false}>
      //                <CurrentPlaying path="playing" />
      //            </Router>
      //        </div>

      //        <div className={stylesheet.columnRight}>
      //            <a>{ token } </a>
      //            <button onClick={ getCurrentPlaying }>Check Now Playing</button>
      //            <button onClick={ getUser }>Get User</button>
      //            <button onClick={ logout }>Logout</button>
      //            <button onClick={getUserInfo}>Get All User Info</button>
      //      </div>

      //    </div>

      //</>