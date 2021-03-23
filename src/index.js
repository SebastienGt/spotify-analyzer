import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import SpotifyLogin from 'react-spotify-login';
import { clientId, redirectUri } from './settings';
 
const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);


ReactDOM.render(
  <React.StrictMode>
    
    <SpotifyLogin clientId={clientId}
        redirectUri={redirectUri}
        onSuccess={onSuccess}
        onFailure={onFailure}/>,
      document.getElementById('example'),
      <App />
  </React.StrictMode>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
