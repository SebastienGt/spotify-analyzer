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
import UserInfo from './UserInfo';
import Nav from './Nav';
import theme from '../styles/theme';
import logo from '../utils/spotify_logo.png';
import stylesheet from '../utils/stylesheet.module.css';

const { colors, fontSizes } = theme;


const UserProfile = () => {
    return (
        <>
            <div className={stylesheet.header}>
                <img className={stylesheet.logo} src={logo} alt="BigCo Inc. logo" width="200px" height="60px" align />
            </div>
            <div className={stylesheet.row}>
                <div className={stylesheet.columnLeft}>
                    <Router primary={false}>
                        <UserInfo path="userInfo" />
                    </Router>
                </div>
                <div className={stylesheet.columnRight}>
                    <p>USER PROFILE HERE BORDEL
                        <button onClick={logout}>Logout</button>
                        {token}
                    </p>
                </div>

            </div>

        </>

    );
}

export default UserProfile;