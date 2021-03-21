const mongoose = require( 'mongoose' );

const dbConnection = async () => {

    try {

        mongoose.connect( 'mongodb://localhost:27017', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })

        const db = mongoose.connection;

        db.on( 'error', ( error ) => {
            console.log( error )
        });
        db.once( 'open', () => {
            console.log( 'db open' );
        })

        console.log( 'db online' );

    } catch ( error ) {
        console.log( error );
        throw new Error( error );
    }
}

module.exports = {
    dbConnection
}