import './App.css';
import React, { useState, useEffect } from 'react';
import { token } from '../spotify';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import LoginScreen from './LoginScreen';
import App from './App';
import styled from 'styled-components/macro';

const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;
`;



const Start = () => {
    const [accessToken, setAccessToken] = useState('');
  
    useEffect(() => {
      setAccessToken(token);
    }, []);
  
    return (
      <AppContainer>
        {accessToken ? <App /> : <LoginScreen />}
      </AppContainer>
    );
  };
  


  export default Start;
