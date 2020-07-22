module.exports = (app) => {
    const Orders= require('../controllers/Orders.controllers.js');

    // Create a new 
    app.post('/Orders', Orders.create);

    // Retrieve all s
    app.get('/Orders', Orders.findAll);

    // Retrieve a single  specified by Id
    app.get('/Orders/:_id', Orders.findOne);

    // Update a  specified by Id
    app.put('/Orders/:_id', Orders.update);

    // Delete a  specified by Id
    app.delete('/Orders/:_id', Orders.delete);
}
