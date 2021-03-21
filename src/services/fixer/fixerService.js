const axios = require( '../axiosInstance' );

const getRates = async () => {

    try {
        const response = await axios.get( '' );
        return response.data;

    } catch ( error ) {

        console.log( error );
        return error;
    }

};

module.exports = {
    getRates
};
