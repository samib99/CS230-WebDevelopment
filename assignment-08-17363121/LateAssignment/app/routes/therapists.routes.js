module.exports = (app) => {
    const therapists = require('../controllers/therapists.controllers.js');

    app.get('/', therapists.root);

    //Create New therapist
    app.post('/therapists',therapists.create);

    //Retrieve therapist
    app.get('/therapists',therapists.findAll);

    //Retrieve specific therapist by ID
    app.get('/therapists/:_id',therapists.findOne);

    //Update a therapist
    app.put('/therapists/:_id',therapists.update);

    //Delete a therapists
    app.delete('/therapists/:_id',therapists.delete);

    // /*  == USER INTERFACE ADDITIONS == */
    // // Search for FirstName matching 
    // app.get('/therapists/:s', therapists.searchFirstName); 
    // app.get('/author/:s', therapists.searchFirstName); 
    // /*  == USER INTERFACE ADDITIONS == */
}