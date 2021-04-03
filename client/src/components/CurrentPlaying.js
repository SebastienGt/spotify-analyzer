import './App.css';
import React, { useState, useEffect } from 'react';
import { getCurrentPlaying } from '../spotify';
import { catchErrors } from '../utils';
import currentPlaying from './CurrentPlaying';
import stylesheet from '../utils/stylesheet.module.css';
import getLyr from '../Lyrics/main';


const CurrentPlaying = () => {
    const [Playing, setCurrentPlaying] = useState(null);
    const [Lyrics, setLyrics] = useState('');

    useEffect(() => {
    const fetchData = async () => {
        const { data } = await getCurrentPlaying();
        console.log("yoooooooooooo" + data);
        setCurrentPlaying(data);

        const paroles = getLyr(data.item.artists[0].name, data.item.name);
        setLyrics(paroles);
        console.log("salut " + Lyrics);
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
