import React from 'react';
import styled from 'styled-components/macro';
import mixins from '../styles/mixins';
import Main from '../styles/Main';
import Spotify from 'spotify-web-api-js';
import { te } from '../App';
import { token } from '../spotify';

const spotifyWebApi = new Spotify();

const Loginned = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
  min-height: 100vh;
  h1 {
  }
`;

const state = {
  loggedIn: token ? true: false,
  nowPlaying: {
    name: 'Not Checked',
    image: ''
  }
}

const getNowPlaying = () => {
    spotifyWebApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: {
            name: response.item.name,
            image: response.item.album.images[0].url
          }
        })
      })
  }
const Profile = () => (
    <Loginned>
      <div> Now Playing: { state.nowPlaying.name }</div>
      <div>
        <img src={ state.nowPlaying.image } style= {{ width: 100}}/>
      </div>
      <button onClick= {() => getNowPlaying()}>
        Check Now Playing
      </button>
    </Loginned>
);

export default Profile;
