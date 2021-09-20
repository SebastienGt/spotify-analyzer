import React, { useState, useEffect } from 'react';
import { getTopTracksShort } from '../spotify';
import { catchErrors } from '../utils';

const Stats = () => {
    const [tracks, setTracks] = useState(null);


    useEffect(() => {
    const fetchData = async () => {
        const { data } = await getTopTracksShort();
        setTracks(data);
        console.log(data);
    }
    catchErrors(fetchData());
    }, []);

    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

    return (
        <>
            <h1>Vos titres les plus écoutés : </h1>
            <div>
                {   tracks ? (
                        <div>
                            <table>
                                {
                                list.map(item =>
                                <tr>
                                    <th> { item + 1 } </th>
                                    <th> { tracks.items[item].name } </th>
                                    <th>
                                        <img src={ tracks.items[item].album.images[1].url } width="150px" height="150px" alt = "Tracks" />
                                    </th>
                                </tr>
                                )}
                            </table>
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