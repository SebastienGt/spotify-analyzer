/// api URL ///

import axios from 'axios';

const apiURL = 'https://api.lyrics.ovh';


export const getLyr = (Author, title) => {
    var request = require('request');

    var h = apiURL + '/v1/' + Author + '/' + title;

    console.log(h);
    request(h, function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
    return body;
    });
    
}

export default getLyr