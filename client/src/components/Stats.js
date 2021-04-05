import React, { useState, useEffect } from 'react';
import { getTopArtistsShort, getTopTracksShort, getTopTracksMedium } from '../spotify';
import { catchErrors } from '../utils';

const Stats = () => {
    const [artists, setArtists] = useState(null);
    const [tracks, setTracks] = useState(null);


    useEffect(() => {
    const fetchData = async () => {
        const { data } = await getTopArtistsShort();
        setArtists(data);
    };
    catchErrors(fetchData());
    const feData = async () => {
        const { data } = await getTopTracksShort();
        setTracks(data);
        console.log(data);
    }
    catchErrors(feData());
    }, []);

    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

    return (
        <>
            <h1>Vos stats :</h1>
            <h1>Vos artistes les plus écoutes : </h1>
            <div>
                {   artists ? (
                    <div>
                        <ul>
                        {
                        list.map(item => 
                        <li key={ item.toString() } >
                            <h2>{ artists.items[item].name}</h2>
                            <img src={ artists.items[item].images[2].url } alt="Album" />
                        </li>
                        )}
                        </ul>
                    </div>
                ) : (
                    <h1>No current stats on artists</h1>
                )
                }
            </div>

            <h1>Vos titres les plus écoutés : </h1>
            <div>
                {   tracks ? (
                        <div>
                            <ul>
                                {
                                list.map(item =>
                                <li key={ item.toString() } >
                                    <h2>{ tracks.items[item].name } </h2>
                                    <img src={ tracks.items[item].album.images[1].url } alt = "Tracks" />
                                </li>
                                )}
                            </ul>
                        </div>
                    ) : (
                        <h1>No current stats on tracks</h1>
                    )
                }
            </div>
        </>
    );
}


export default Stats;