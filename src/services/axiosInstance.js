const axios = require( 'axios' );
const apiKey = 'ffcc344a3f31700c0020d166fd17ea96';

const axiosInstance = axios.create({
    baseURL: `http://data.fixer.io/api/latest?access_key=${apiKey}`
});

module.exports = axiosInstance;