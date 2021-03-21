const rateController = require( './rate/rateController' );

const createRoutes = ( server ) => {

    server.route( rateController );
};

module.exports = createRoutes;

