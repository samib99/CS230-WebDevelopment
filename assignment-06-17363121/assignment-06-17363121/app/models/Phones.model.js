const mongoose = require('mongoose');

// create a mongoose schema for a phone
const PhonesSchema = mongoose.Schema({
    _id:mongoose.Types.ObjectId(),
    Manufacturer:String,
    Model:String,
    Price:String
}, {
    timestamps: true
});
// export the model to our app
module.exports = mongoose.model('Phones', PhonesSchema);