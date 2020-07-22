const mongoose = require('mongoose');

//Mongoose Schema for Therapists
const TherapistSchema = mongoose.Schema({
    Title: { type: String },
    FirstName: { type: String, required: true },
    Surname: { type: String, required: true },
    MobileNum: { type: String, required: true },
    HomeNum: { type: String, required: true },
    Email: { type: String, required: true },
    Addline1: { type: String, required: true },
    Addline2: { type: String },
    Town: { type: String, required: true },
    County: { type: String, required: true },
    EIRCODE: { type: String },
}, {
    timestamps: true
});
module.exports = mongoose.model('Therapist', TherapistSchema);

