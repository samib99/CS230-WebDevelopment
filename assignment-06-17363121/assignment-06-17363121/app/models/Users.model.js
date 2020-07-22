const mongoose = require('mongoose');

// create a mongoose schema for a Order
const UsersSchema = mongoose.Schema({
    _id:mongoose.Types.ObjectId(),
    FirstName:String,
    Surname:String,
    Mobile:String,
    Email:String,
    ShipAdd:Object,
    BillAdd:Object
}, {
    timestamps: true
});
// export the model to our app
module.exports = mongoose.model('Users', UsersSchema);