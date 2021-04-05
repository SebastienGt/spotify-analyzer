# Spotify Analyzer

This project have been designed and developped by `Sébastien FRIEDBERG` and `Alexandre GOMEZ` 

# Summary
1. [Global description](#Global)
2. [Prerequisite](#Prerequisite)
3. [How to launch the app](#How-to-launch-the-app)
4. [License](#LICENSE)

# Global description

Spotify Analyser is a react application that retrieve data from the spotify's API. It will displays the lyrics of the current song playing, the statistics of the song and statistics about your profile like your most listened music or artist.

For the data about your Spotify account, the application uses the [Spotify's API](https://developer.spotify.com/documentation/web-api/). For the lyrics, we uses the [LyricsOVH API](https://lyricsovh.docs.apiary.io/).


# Prerequisite

Make sure you have installed all of the following prerequisites on your development machine:
* [Node.js](https://nodejs.org/en/) (platform that runs Javascript code outside the browser)
* Optionnal : [Git](https://git-scm.com/downloads) (you can also download the project directly without git instead of cloning it)


# How to launch the app

Once you have installed Node.js and have the project in your development machine, you will need to start two `node command prompt`. One for the server, the other for the client. For both, go to the `spotify-analyzer` repository. Once you are inside it run these commands :
* For the first command prompt (Server) : 
`cd auth-server`
`node authorization_code/app.js`
* Then for the second command prompt (Client) : 
`cd client`
`npm install`
`npm start`

Then the application should open a window in your web browser.

# License
This project is licensed under the MIT License - see the LICENSE.md file for details
