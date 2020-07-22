/*
References
I used both the L20 Video lectures and L22 Video Lectures combined with my own code for this file
*/
module.exports = (app) => {
    const therapySessions = require('../controllers/therapySessions.controllers.js');

    app.get('/', therapySessions.root);

    //Create New therapySession
    app.post('/therapySessions', therapySessions.create);

    //Retrieve therapySession
    app.get('/therapySessions', therapySessions.findAll);

    //Retrieve specific therapySession by ID
    app.get('/therapySessions/:_id', therapySessions.findOne);

    //Update a therapySession
    app.put('/therapySessions/:_id', therapySessions.update);

    //Delete a therapySessions
    app.delete('/therapySessions/:_id', therapySessions.delete);
}