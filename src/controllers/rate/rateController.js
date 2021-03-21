const rateService = require( '../../services/rates/ratesService' );
const HTTP_METHODS = require( '../constants/httpMethods' );

const baseRateURL = '/rate';

const PATHS = {
    getRates: `${ baseRateURL }/get-rates`,
    getSavedRates: `${ baseRateURL }/get-saved-rates`,
    createRate: `${baseRateURL}/create-rate`,
    deleteRate: `${baseRateURL}/delete-rate/{id}`
};

const generateRateController = [

    {
        method: HTTP_METHODS.GET,
        path: PATHS.getSavedRates,
        options: {
            description: 'Get all rates saved',
            notes: 'Returns an array of rates',
            tags: ['api'],

            handler: ( request, h ) => {
                    
                return rateService.getSavedRates();
            }

        }
    },

    {
        method: HTTP_METHODS.GET,
        path: PATHS.getRates,
        options: {
            description: 'Get all rates from fixer.io',
            notes: 'Returns an object with rates and base fx',
            tags: ['api'],
            
            handler: ( request, h ) => {
    
                const response = rateService.getRates();
                return response;
            }
        }
    },
    {

        method: HTTP_METHODS.POST,
        path: PATHS.createRate,
        options: {
            description: 'Create rate',
            notes: 'Create rate with all fields',
            tags: ['api'],
            handler: ( request, h ) => {

                const response = rateService.createRate( request.payload );
                return response;

            }

        }
    },
    {
        method: HTTP_METHODS.DELETE,
        path: PATHS.deleteRate,
        handler: ( request, h ) => {

            const response = rateService.deleteRate( request.params.id );
            return response ;
        }
    }
];


module.exports = generateRateController;