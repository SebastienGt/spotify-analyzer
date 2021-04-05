import './App.css';
import React, { useState, useEffect } from 'react';
import { token, getCurrentPlaying, getUserInfo} from '../spotify';
import { catchErrors } from '../utils';
import currentPlaying from './CurrentPlaying';
import stylesheet from '../utils/stylesheet.module.css';
import { getUser } from '../spotify';

const UserInfo = () => {
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
        <>
            <div>
                <h3>User : </h3>
            </div>
        </>
    );
}


export default UserInfo;