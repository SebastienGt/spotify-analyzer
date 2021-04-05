import './App.css';
import React, { useState, useEffect } from 'react';
import { token, getCurrentPlaying, getUserInfo } from '../spotify';
import { catchErrors } from '../utils';
import currentPlaying from './CurrentPlaying';
import stylesheet from '../utils/stylesheet.module.css';
import { getUser, logout } from '../spotify';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [followedArtists, setFollowedArtists] = useState(null);
    const [playlists, setPlaylists] = useState(null);
    const [topArtists, setTopArtists] = useState(null);
    const [topTracks, setTopTracks] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { user, followedArtists, playlists, topArtists, topTracks } = await getUserInfo();
            setUser(user);
            setFollowedArtists(followedArtists);
            setPlaylists(playlists);
            setTopArtists(topArtists);
            setTopTracks(topTracks);
        };
        catchErrors(fetchData());
    }, []);

    return (
    <div>
        { user?(
                <>
                <h4> {user.display_name}</h4>
                <h5> {user.email}</h5>
                    <button className="stylesheet.loginButton" onClick={logout}>Logout</button>
                </>
            ) : (
                    <h4> ya rien </h4>
                    )
            }

    </div>
    );
}


export default UserProfile;

//    <h4> {user.display_name}</h4>
//    <h5> {user.email}</h5>
//    <button onClick={logout}>Logout</button>