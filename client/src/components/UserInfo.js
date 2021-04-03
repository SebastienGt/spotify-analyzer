import './App.css';
import React, { useState, useEffect } from 'react';
import { token, getCurrentPlaying } from '../spotify';
import { catchErrors } from '../utils';
import currentPlaying from './CurrentPlaying';
import stylesheet from '../utils/stylesheet.module.css';

const UserInfo = () => {
    const [Playing, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getUser();
            console.log("yoooooooooooo" + data);
            setUserInfo(data);
        };
        catchErrors(fetchData());
    }, []);

    return (
        <>
            <div className={stylesheet.playing}>
                <h4 className={stylesheet.current}> Song currently played :</h4>
                <div>
                    {Playing ? (
                        <div>
                            <img className={stylesheet.songPlaying} src={Playing.item.album.images[0].url} alt="Album" />
                            <h3> {Playing.item.name} </h3>
                            <h4> {Playing.item.artists[0].name} </h4>
                        </div>
                    ) : (
                            <h1>No current song playing</h1>
                        )
                    }
                </div>
            </div>
        </>
    );
}


export default UserInfo;
