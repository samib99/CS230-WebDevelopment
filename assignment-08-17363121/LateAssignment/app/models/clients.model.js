const mongoose = require('mongoose');

//Mongoose Schema for clients
const ClientSchema = mongoose.Schema ({
    Title:{type:String},
    FirstName:{type:String,required:true},
    Surname:{type:String,required:true},
    MobileNum:{type:String,required:true},
    HomeNum:{type:String,required:true},
    Email:{type:String,required:true},  
    Addline1:{type:String,required:true},
    Addline2:{type:String},
    Town:{type:String,required:true},
    County:{type:String,required:true},
    EIRCODE:{type:String},
    DOB:{type:String,required:true},
    ParentGuardian:{type:String,required:true},
    PermisionToText:{type:String},
    DateOfRecord:{type:String, required:true},
    Marital:{type:String, required:true},
    ReferedBy:{type:String}
}, {
    timestamps:true
});
module.exports = mongoose.model('Client',ClientSchema);

