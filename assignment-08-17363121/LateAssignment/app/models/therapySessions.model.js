const mongoose = require('mongoose');

//Mongoose Schema for Therapy Sessions
const TherapySessionSchema = mongoose.Schema({
    SessionDate: { type: String, required: true },
    SessionTime: { type: String, required: true },
    ClientsId: { type: String, required: true },
    TherapistId: { type: String, required: true },
    Fee: { type: String, required: true },
    SessionNumber: { type: String, required: true },
    SessionDuration: { type: String, required: true },
    SessionType: { type: String, required: true },
    IssueFlag: { type: String, required: true },
    SessionNotes: { type: String, required: true },
}, {
    timestamps: true
});
module.exports = mongoose.model('TherapySession', TherapySessionSchema);

