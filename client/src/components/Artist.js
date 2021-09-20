import React, { useState, useEffect } from 'react';
import { getTopArtistsShort } from '../spotify';
import { catchErrors } from '../utils';

const Artist = () => {
    const [artists, setArtists] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
        const { data } = await getTopArtistsShort();
        setArtists(data);
    };
    catchErrors(fetchData());
    }, []);

    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

    return (
        <>
            <h1>Vos artistes les plus écoutés : </h1>
            <>
                {   artists ? (
                    <div>
                        <table>
                        {
                        list.map(item =>
                            <tr>
                                <th> { item + 1} </th>
                                <th>{ artists.items[item].name}</th>
                                <th>
                                    <img src={ artists.items[item].images[2].url } alt={artists.items[item].name} />
                                </th>
                            </tr>
                        )}
                        </table>
                    </div>
                ) : (
                    <h1>No current stats on artists</h1>
                )
                }
            </>
        </>
    );
}

export default Artist;