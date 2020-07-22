module.exports = (app) => {
    const clients = require('../controllers/clients.controllers.js');

    app.get('/', clients.root);

    //Create New Client
    app.post('/clients',clients.create);

    //Retrieve Client
    app.get('/clients',clients.findAll);

    //Retrieve specific client by ID
    app.get('/clients/:_id',clients.findOne);

    //Update a client
    app.put('/clients/:_id',clients.update);

    //Delete a clients
    app.delete('/clients/:_id',clients.delete);


    // /*  == USER INTERFACE ADDITIONS == */
    // //Search for Quotations matching s
    // app.get('/FirstName/:s', clients.searchFirstName); 
    // /*  == USER INTERFACE ADDITIONS == */
}