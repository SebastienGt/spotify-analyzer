import './App.css';
import React, { useState, useEffect } from 'react';
import { getCurrentPlaying } from '../spotify';
import { catchErrors } from '../utils';
import getLyr from '../Lyrics/main';



const CurrentPlaying = () => {
    const [Playing, setCurrentPlaying] = useState(null);
    const [Lyrics, setLyrics] = useState('');

    useEffect(() => {
    const fetchData = async () => {
        const { data } = await getCurrentPlaying();
        setCurrentPlaying(data);

        const paroles = getLyr(data.item.artists[0].name, data.item.name);
        setLyrics(paroles);
        console.log("salut " + Lyrics);
    };
    catchErrors(fetchData());
    }, []);

    return (
        <>
            <h4> Current Playing song</h4>
            <div>
                { Playing ? (
                    <div>
                        <a> { Playing.item.name } </a>
                        <img src={Playing.item.album.images[2].url } alt="Album"/>
                        <a> { Playing.item.id } </a>
                        <a> { Lyrics } </a>
                    </div>
                ) : (
                    <h1>No current song playing</h1>
                )
                }
            </div>
            <div>
                { 
                   Lyrics ? (
                        <div>
                            <a>Les paroles sont : </a>
                            
                            <a> { Lyrics } </a>
                        </div>
                    ) : (
                        <div>
                            <a>Les paroles n'ont pas été trouvées</a>
                            <a>test { Lyrics } </a>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default CurrentPlaying;
