const mongoose = require( 'mongoose' );

const Rate = mongoose.model( 'Rate', {
    pair: { type: String, required: [ true, 'Pair is required' ] },
    originalRate: { type: Number, required: [ true, 'Original Rate is required' ] },
    feePercent: { type: Number, default: 0 },
    feeAmount: { type: Number, required: [ true, 'Fee Amount is required' ] },
    rateFeeApplied: { type: Number, required: [ true, 'Rate Fee Applied is required' ] },
});

module.exports = Rate;