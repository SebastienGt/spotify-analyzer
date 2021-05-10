import React from "react";
import styled from "styled-components/macro";
import theme from "../styles/theme";
import logo from "../utils/spotify_logo.png";
import stylesheet from "../utils/stylesheet.module.css";
const { colors } = theme;

//const LOGIN_URI = 'http://localhost:8888/login';
var PROD = true;
const LOGIN_URI = PROD
    ? "https://spotify-dash.herokuapp.com/login"
    : "http://localhost:8888/login";

const LoginButton = styled.a`
    display: inline-block;
    background-color: ${colors.green};
    color: ${colors.white};
    border-radius: 30px;
    margin-top: 20px;
    padding: 17px 35px;
    margin: 20px 0 70px;
    min-width: 160px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    &:hover,
    &:focus {
        background-color: ${colors.offGreen};
        color: ${colors.white};
        text-decoration: none;
    }
`;

const LoginScreen = () => (
    <>
        <div className={stylesheet.header}>
            <img
                className={stylesheet.logo}
                src={logo}
                alt='BigCo Inc. logo'
                width='200px'
                height='60px'
                align
            />
        </div>
        <div className={stylesheet.login}>
            <h1>Spotify Profile</h1>
            <LoginButton href={LOGIN_URI}>Login to Spotify</LoginButton>
        </div>
        <div className={stylesheet.sousTitre}>
            <h5>Vos données ne seront pas sauvegardées.</h5>
            <h5>
                Un projet de{" "}
                <a href='https://github.com/SebastienGt' target='_blank'>
                    Sébastien Friedberg
                </a>{" "}
                et{" "}
                <a href='https://github.com/Alexgoar' target='_blank'>
                    Alexandre Gomez
                </a>
                .
            </h5>
        </div>
    </>
);

export default LoginScreen;
