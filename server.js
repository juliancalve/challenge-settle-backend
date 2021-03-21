const Hapi = require( '@hapi/hapi' );
const PORT = 3100;
const database = require( './src/database/config' );
const Inert = require( '@hapi/inert' );
const Vision = require( '@hapi/vision' );
const HapiSwagger = require( 'hapi-swagger' );
const Pack = require( './package' );
require( "@hapi/joi" )
const createRoutes = require( './src/controllers/routeCombiner' );

const init = async () => {

    const server = new Hapi.Server({
        port: PORT,
        routes: { cors: { origin: ['*'] } }
    // this also worked
    });

    const swaggerOptions = {
        info: {
                title: 'Test API Documentation',
                version: Pack.version,
            },
        };

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    server.realm.modifiers.route.prefix = '/api'

    createRoutes( server );

    server.route( {
        path: '/',
        method: 'GET',
        handler: ( request, h ) => {
            return 'node running';
        }
    })
    

    await server.start();
    console.log( `Server running on: `, PORT );

};

database.dbConnection();


init();