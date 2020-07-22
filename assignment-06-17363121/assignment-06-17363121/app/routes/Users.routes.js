module.exports = (app) => {
    const Users = require('../controllers/Users.controllers.js');

    // Create a new 
    app.post('/Users', Users.create);

    // Retrieve all s
    app.get('/Users', Users.findAll);

    // Retrieve a single  specified by Id
    app.get('/Users/:_id', Users.findOne);

    // Update a  specified by Id
    app.put('/Users/:_id', Users.update);

    // Delete a  specified by Id
    app.delete('/Users/:_id', Users.delete);
}