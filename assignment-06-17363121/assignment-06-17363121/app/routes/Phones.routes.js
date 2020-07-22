module.exports = (app) => {
    const Phones = require('../controllers/Phones.controllers.js');

    // Create a new 
    app.post('/Phones', Phones.create);

    // Retrieve all s
    app.get('/Phones', Phones.findAll);

    // Retrieve a single  specified by Id
    app.get('/Phones/:_id', Phones.findOne);

    // Update a  specified by Id
    app.put('/Phones/:_id', Phones.update);

    // Delete a  specified by Id
    app.delete('/Phones/:_id', Phones.delete);
}