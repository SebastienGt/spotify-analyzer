import './App.css';
import React, { useState, useEffect } from 'react';
import { getCurrentPlaying, setPause, getTrackInfo} from '../spotify';
import { catchErrors } from '../utils';
import getLyr from '../Lyrics/main';
import stylesheet from '../utils/stylesheet.module.css';
import Chart from 'chart.js';

const CurrentPlaying = () => {

    const [Playing, setCurrentPlaying] = useState(null);
    const [Lyrics, setLyrics] = useState('');
    const [Analysis, setAnalysis] = useState('');
    const [Features, setFeatures] = useState('');
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
    const fetchData = async () => {
        const { data } = await getCurrentPlaying();
        if (Playing == null || data.item.id != Playing.item.id)
        {
            setCurrentPlaying(data);
            if (data)
            {
                setLyrics('');
                getLyr(data.item.artists[0].name, data.item.name, Lyrics).then(data => {
                    console.log(data);
                    console.log(data.lyrics);
                    setLyrics(data.lyrics); 
                });
            }
        }
    };
    catchErrors(fetchData());
    }, [time]);

    useEffect(() => {
    const fetchData = async () => {
        setFeatures('');
        if (Playing) {
        const { audioAnalysis, audioFeatures } = await getTrackInfo(Playing.item.id);
        console.log("Audio Analysis : " + audioAnalysis);
        console.log("Audio features : " + audioFeatures);
        setFeatures(audioFeatures);
        }
    };
    catchErrors(fetchData());
    }, [Playing]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Run every seconds');
            setTime(Date.now())}
            , 1000);
        
        return () => {
            clearInterval(interval);
        };
    }, [time]);

    


    return (
        <>
            <div className={stylesheet.row}>
            <div className={ stylesheet.columnLeft }>
                    <div>
                        {Playing ? (
                            <div>
                                <h4 className={stylesheet.current}> Song currently played :</h4>
                                <img className={ stylesheet.songPlaying } src={ Playing.item.album.images[0].url } alt="Album" />
                                <h3> { Playing.item.name } -  { Playing.item.artists[0].name } </h3>
                            </div>
                        ) : (
                                <h1>No current song playing</h1>
                            )
                        }
                    </div>

                    <div>
                        {
                            Features ? (
                                <div>
                                    {
                                        <>
                                            <h4 className={stylesheet.current}> Song informations :</h4>

                                            <a>Danceability : {Features.danceability} </a>
                                            <br/>
                                            <a>Energy : {Features.energy} </a>
                                            <br/>
                                            <a>Key : {Features.key} </a>
                                            <br/>
                                            <a>Loudness : {Features.loudness} </a>
                                            <br/>
                                            <a>Mode : {Features.mode} </a>
                                            <br/>
                                            <a>Speechiness : {Features.speechiness} </a>
                                            <br/>
                                            <a>acousticness : {Features.acousticness} </a>
                                            <br/>
                                            <a>Instrumentalness : {Features.instrumentalness} </a>
                                            <br/>
                                            <a>Livness : {Features.liveness} </a>
                                            <br/>
                                            <a>Valence : {Features.valence} </a>
                                            <br/>
                                            <a>Tempo : {Features.tempo} </a>
                                        </>
                                    }
                                </div>
                            ) :
                                (
                                    <h5>Aucune information sur le morceau</h5>
                                )
                        }
                    </div>
            </div>
            <div className={ stylesheet.columnRight }>
                {
                        Lyrics ? (
                        <>
                        <h4 className={stylesheet.current}> Lyrics :</h4>
                                <div className={ stylesheet.noScrollDiv }>
                            {
                                Lyrics.split('\n').map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        <br />
                                    </span>
                                ))
                            }
                                </div>
                        </>
                    ) : (
                        <div>
                            <a>Les paroles n'ont pas été trouvées</a>
                        </div>
                    )
                }
                </div>
            </div>
            
        </>
    );
}

export default CurrentPlaying;
