import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import { token } from '../spotify';
import { logout, getUser, getCurrentPlaying, getUserInfo } from '../spotify';
import CurrentPlaying from './CurrentPlaying';
import Nav from './Nav';
import logo from '../utils/spotify_logo.png';
import stylesheet from '../utils/stylesheet.module.css';



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
                    <p>{token}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Profile;
