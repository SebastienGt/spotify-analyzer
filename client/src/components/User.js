import './App.css';
import React, { useState, useEffect } from 'react';
import { getUserInfo} from '../spotify';
import { catchErrors } from '../utils';



const User = () => {
  const [user, setUser] = useState(null);
  /*const [followedArtists, setFollowedArtists] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  const [topTracks, setTopTracks] = useState(null);*/

    useEffect(() => {
        const fetchData = async () => {
            const { user/*, followedArtists, playlists, topArtists, topTracks*/ } = await getUserInfo();
            setUser(user);
            /*setFollowedArtists(followedArtists);
            console.log(playlists);
            setPlaylists(playlists);
            setTopArtists(topArtists);
            setTopTracks(topTracks);
            */
        };
        catchErrors(fetchData());
    }, []);

    return (
        <>
        {
            user ? (
                <>
                <img src={ user.images[0].url } alt = "Profil" width="400" height="400" />
                <h4> {user.display_name}</h4>
                <h5> {user.email}</h5>
                <h5> Followers : { user.followers.total } </h5>
                {/*
                  playlists ? (
                    <>
                  <h5> 
                    { 
                      playlists.items[0].name 
                    } 
                  </h5> 
                  <img src={ playlists.items[1].images[0].url } alt="Playlist" />
                  </>
                  ) : (<h5>Pas de playlists</h5>) 
                  */
                }
                </>
            ) : (
                    <h4>Reconnectez-vous</h4>
                )
        }
        </>
    );
}


export default User;
