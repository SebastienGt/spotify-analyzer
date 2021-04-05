import './App.css';
import React, { useState, useEffect } from 'react';
import { getCurrentPlaying, setPause, getTrackInfo} from '../spotify';
import { catchErrors } from '../utils';
import getLyr from '../Lyrics/main';
import stylesheet from '../utils/stylesheet.module.css';

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
            <div className={ stylesheet.playing }>
                <h4 className={ stylesheet.current }> Song currently played :</h4>
                <div>
                    {Playing ? (
                        <div>
                            <img className={ stylesheet.songPlaying } src={ Playing.item.album.images[0].url } alt="Album" />
                            <h3> { Playing.item.name } </h3>
                            <h4> { Playing.item.artists[0].name } </h4>
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
            <div>
                {
                    Features ? (
                        <div>
                            {
                                <>
                                <h5>Danceability : { Features.danceability } </h5>
                                <h5>Energy : { Features.energy } </h5>
                                <h5>Key : { Features.key } </h5>
                                <h5>Loudness : { Features.loudness } </h5>
                                <h5>Mode : { Features.mode } </h5>
                                <h5>Speechiness : { Features.speechiness } </h5>
                                <h5>acousticness : { Features.acousticness } </h5>
                                <h5>Instrumentalness : { Features.instrumentalness } </h5>
                                <h5>Livness : { Features.liveness } </h5>
                                <h5>Valence : { Features.valence } </h5>
                                <h5>Temps : { Features.tempo } </h5>
                                <h5>Duration : { Features.duration_ms } </h5>
                                </>
                            }
                        </div>
                    ) : 
                    (
                        <h5>Salut</h5>
                    )
                }
            </div>
        </>
    );
}

export default CurrentPlaying;
