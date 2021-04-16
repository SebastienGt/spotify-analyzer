import './App.css';
import React, { useState, useEffect } from 'react';
import { getUserInfo } from '../spotify';
import { catchErrors } from '../utils';
import stylesheet from '../utils/stylesheet.module.css';
import { logout } from '../spotify';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    /*const [followedArtists, setFollowedArtists] = useState(null);
    const [playlists, setPlaylists] = useState(null);
    const [topArtists, setTopArtists] = useState(null);
    const [topTracks, setTopTracks] = useState(null);*/

    useEffect(() => {
        const fetchData = async () => {
            const { user /*, followedArtists, playlists, topArtists, topTracks*/ } = await getUserInfo();
            setUser(user);
            /*setFollowedArtists(followedArtists);
            setPlaylists(playlists);
            setTopArtists(topArtists);
            setTopTracks(topTracks);*/
        };
        catchErrors(fetchData());
    }, []);

    return (
    <div>
        { user ? (
                <>
                    <h4> {user.display_name}</h4>
                    <h5> {user.email}</h5>
                    <button className={ stylesheet.loginButton } onClick={ logout }>
                        <a href>Logout</a>
                    </button>
                </>
            ) : (
                <>
                    <h4>Reconnectez-vous</h4>
                    <button className={ stylesheet.loginButton } onClick={ logout }>Logout</button>
                </>
                )
            }
    </div>
    );
}

export default UserProfile;
