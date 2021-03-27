import logo from './logo.svg';
import './App.css';
import Spotify from 'spotify-web-api-js';
import React, { useState, useEffect } from 'react';
import { token } from './spotify';

import LoginScreen from './components/LoginScreen';
import Profile from './components/Profile';
import styled from 'styled-components/macro';

const spotifyWebApi = new Spotify();
var loggedIn = false;
const params = null;

const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;
`;

const App = () => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    setAccessToken(token);
  }, []);

  return (
    <AppContainer>
      {accessToken ? <Profile /> : <LoginScreen />}
    </AppContainer>
  );
};


/*
class App extends Component{
  constructor() {
    super();
    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ? true: false,
      nowPlaying: {
        name: 'Not Checked',
        image: ''
      }
    }
    if (params.access_token) {
      spotifyWebApi.setAccessToken(params.access_token);
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  render() {
    console.log(loggedIn)
    return (
      <AppContainer>
        { loggedIn ? <Profile/> : <LoginScreen/> } 
      </AppContainer>
    );
  }
}*/

export const te = params;
export default App;
