import React from 'react';
import styled from 'styled-components/macro';
import theme from '../styles/theme';
import mixins from '../styles/mixins';
import Main from '../styles/Main';
import logo from '../utils/spotify_logo.png';
import stylesheet from '../utils/stylesheet.module.css';
const { colors, fontSizes } = theme;

const LOGIN_URI = 'http://localhost:8888/login';

const Login = styled(Main)`
  flex-direction: column;
  min-height: 60vh;
  h1 {
    font-size: ${fontSizes.xxl};
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

const LoginScreen = () => (
    <>
        <div className={stylesheet.header}>
            <img className={stylesheet.logo} src={logo} alt="BigCo Inc. logo" width="200px" height="60px" align />
        </div>
        <div className={stylesheet.login}>
            <h1>Spotify Profile</h1>
            <LoginButton href={LOGIN_URI}>Login to Spotify</LoginButton>
        </div>

    </>
);

export default LoginScreen;
