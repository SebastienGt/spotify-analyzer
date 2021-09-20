import React, { useEffect } from 'react';
import { Router } from "@reach/router";
import User from "./User.js";
import CurrentPlaying from "./CurrentPlaying";
import Nav from "./Nav";
import stylesheet from "../utils/stylesheet.module.css";
import UserInfo from "./UserInfo.js";
import Playlist from "./Playlist";
import { getUserInfo, logout} from '../spotify';
import Artist from "./Artist";
import { catchErrors } from '../utils';

import Accueil from "./Accueil";
import Stats from "./Stats";




const App = () => {
    useEffect(() => {
        const fetchData = async () => {
            const { user } = await getUserInfo();
            console.log("jfeifjei");
            console.log(user);
            if (user === null)
                logout();
        };
        catchErrors(fetchData());
    }, []);

    return (
        <>
            <Nav />
            <div className={stylesheet.content}>
                <Router primary={false}>
                    <UserInfo path='UserInfo' />
                    <Accueil path='/' />
                    <CurrentPlaying path='playing' />
                    <Artist path='artists' />
                    <Playlist path='playlist' />
                    <User path='profil' />
                    <Stats path='stats' />
                </Router>
            </div>
        </>
    );
};

export default App;
