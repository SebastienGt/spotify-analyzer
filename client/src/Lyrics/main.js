/// api URL ///

import axios from 'axios';

const apiURL = 'https://api.lyrics.ovh';


export function getLyr(Author, title) {
    var h = apiURL + '/v1/' + Author + '/' + title;
    return axios.get(h).then(response => response.data)
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