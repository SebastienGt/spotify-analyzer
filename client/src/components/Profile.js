import React from 'react';
import styled from 'styled-components/macro';
import mixins from '../styles/mixins';
import Main from '../styles/Main';
import Spotify from 'spotify-web-api-js';
import { te } from '../App';


const spotifyWebApi = new Spotify();

const Loginned = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
  min-height: 100vh;
  h1 {
  }
`;


const getNowPlaying = () => {
    spotifyWebApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: {
            name: response.item.name,
            image: response.item.album.images[0]
          }
        })
      })
  }
const Profile = () => (
    <Loginned>
        <button onClick= {() => getNowPlaying()}>
          Check Now Playing
        </button>
    </Loginned>
);

export default Profile;
