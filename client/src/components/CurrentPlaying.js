import './App.css';
import React, { useState, useEffect } from 'react';
import { getCurrentPlaying } from '../spotify';
import { catchErrors } from '../utils';
import getLyr from '../Lyrics/main';
import axios from 'axios';

function NewLineText(props) {
    const text = JSON.stringify(props);
    console.log("ouiiii " + props);
    return text.split('\\n').map(str => <p>{str}</p>);
}


const CurrentPlaying = () => {
    const [Playing, setCurrentPlaying] = useState(null);
    const [Lyrics, setLyrics] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
        const { data } = await getCurrentPlaying();
        setCurrentPlaying(data);

        if (data)
        {
            getLyr(data.item.artists[0].name, data.item.name, Lyrics).then(data => {
                console.log(data);
                console.log(data.lyrics);
                setLyrics(JSON.stringify(data.lyrics));
            });
        }
        
    };
    catchErrors(fetchData());
    }, []);

    return (
        <>
            <h4> Current Playing song</h4>
            <div>
                { Playing ? (
                    <>
                        <h2>{ Playing.item.name }, { Playing.item.artists[0].name } </h2>
                        <img src={Playing.item.album.images[2].url } alt="Album"/>
                    </>
                ) : (
                    <h1>No current song playing</h1>
                )
                }
            </div>
            <div>
                { 
                    
                   Lyrics ? (
                        <div>
                            <NewLineText text= { Lyrics } />
                        </div>
                    ) : (
                        <div>
                            <a>Les paroles n'ont pas été trouvées</a>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default CurrentPlaying;
