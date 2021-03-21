const Rate = require( '../../models/rate' );
const fixerService = require( '../fixer/fixerService' );
const createRate = async ( { pair, originalRate, feePercent, feeAmount, rateFeeApplied } ) => {

    try {
        
        const rate = new Rate( { pair, originalRate, feePercent, feeAmount, rateFeeApplied } );
        const response = await rate.save();
        return response;
    } catch ( error ) {

        console.log( error );
        return error.errors;
    }
}

const getSavedRates = async () => {

    try {
        
        const rates = await Rate.find();
        return rates;
    } catch ( error ) {

        console.log( error );
        return error.errors;
    }
}

const getRates = () => {

    return fixerService.getRates();
}

const deleteRate = ( id ) => {

    try {
        
        const rate = Rate.findByIdAndDelete( id );
        return rate;
    } catch ( error ) {

        console.log( error );
        return error.errors;
    }
}

module.exports = {
    createRate,
    getSavedRates,
    getRates,
    deleteRate
};