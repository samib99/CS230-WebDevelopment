const mongoose = require('mongoose');

// create a mongoose schema for a Order
const OrdersSchema = mongoose.Schema({
    _id:mongoose.Types.ObjectId(),
    User_Id:mongoose.Types.ObjectId(),
    Phone_Id:mongoose.Types.ObjectId()
}, {
    timestamps: true
});
// export the model to our app
module.exports = mongoose.model('Orders', OrdersSchema);