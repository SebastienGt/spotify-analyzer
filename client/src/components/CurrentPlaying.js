import './App.css';
import React, { useState, useEffect } from 'react';
import { getCurrentPlaying, setPause } from '../spotify';
import { catchErrors } from '../utils';
import getLyr from '../Lyrics/main';
import stylesheet from '../utils/stylesheet.module.css';

const CurrentPlaying = () => {
    const [Playing, setCurrentPlaying] = useState(null);
    const [Lyrics, setLyrics] = useState('');

    useEffect(() => {
    const fetchData = async () => {
        const { data } = await getCurrentPlaying();
        setCurrentPlaying(data);

        if (data)
        {
            getLyr(data.item.artists[0].name, data.item.name, Lyrics).then(data => {
                console.log(data);
                console.log(data.lyrics);
                setLyrics(data.lyrics);
                
            });
        }
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
            {
                console.log("sasls" + Lyrics)
            }
            <div>
                {
                Lyrics ? (
                        <div>
                            {
                                Lyrics.split('\n').map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        <br />
                                    </span>
                                ))
                            }
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
