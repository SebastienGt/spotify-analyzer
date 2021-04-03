import './App.css';
import React, { useState, useEffect } from 'react';
import { token } from '../spotify';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginScreen from './LoginScreen';
import Profile from './Profile';
import styled from 'styled-components/macro';


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



export default App;
