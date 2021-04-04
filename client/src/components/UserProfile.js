import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import { token } from '../spotify';
import { logout, getUser, getCurrentPlaying, getUserInfo } from '../spotify';
import UserInfo from './UserInfo';
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