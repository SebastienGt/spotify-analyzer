/// api URL ///

import axios from 'axios';

const apiURL = 'https://api.happi.dev/v1/music?q=';


export async function getLyr(Author, title) {
    var h = apiURL + Author + '%20' + title + '&limit=1&apikey=f1eacaWA3lGHoDepGhXlmkHgjOdtVhwx7yKukP4YHnw4XtPAabIK1VCF&type=:type&lyrics=1';
    var p = await axios.get(h).then(response => response.data);

    if (!p.result[0]) return undefined;
    p = p.result[0];
    if (p['api_lyrics']) {
        p = p.api_lyrics + '?apikey=f1eacaWA3lGHoDepGhXlmkHgjOdtVhwx7yKukP4YHnw4XtPAabIK1VCF&type=:type&lyrics=1';
        return axios.get(p).then(response => response.data)
    }
    return undefined;
}



/*export const getLyr = (Author, title) => {
    var request = require('request');

    var h = apiURL + '/v1/' + Author + '/' + title;

    console.log(h);
    console.log(axios.get(h));
    axios.get(h).then((response) => (response.data));
    
}
*/
export default getLyr