import axios from 'axios';


const fetchData = (endpoint, callback) => {
    axios
        .get(endpoint)
        .then((response) => {
            callback(response.data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            callback(null, error);
        });
}

export default fetchData;