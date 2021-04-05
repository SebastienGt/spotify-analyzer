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
            <div>
                {   artists ? (
                    <div>
                        <ul>
                        {
                        list.map(item => 
                        <li key={ item.toString() } >
                            <h2> { item + 1} </h2>
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
        </>
    );
}

export default Artist;