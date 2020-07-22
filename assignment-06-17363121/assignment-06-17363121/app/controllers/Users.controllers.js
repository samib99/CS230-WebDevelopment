// Create and Save a new Users
exports.create = (req, res) => {
    // Validate the request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Users content cannot be empty!"
        });
    }

    // Create a new Users (using schema)
    const Users = new Users({
        _id:require.body._id,
        FirstName:require.body.FirstName,
        Surname:require.body.Surname,
        Mobile:require.body.Mobile,
        Email:require.body.Email,
        ShipAdd:require.body.ShipAdd,
        BillAdd:require.body.BillAdd
    });

    // Save Users in the database
    Users.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the Users."
        });
    });
};
// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Users.find()
    .then(Userss => {
        res.send(Userss);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Userss."
        });
    });
};
// Find a single note with a noteId
exports.findOne = (req, res) => {
    Users.findById(req.params._id)
    .then(Users => {
        if(!Users) {
            return res.status(404).send({
                message: "Users not found with id " + req.params._id
            });            
        }
        res.send(Users);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Users not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Users with id " + req.params._id
        });
    });
};
// Update a Users identified by the _id in the request
exports.updateQuote = (req, res) => {
    // Validate Request
    if(!req.body.Users) {
        return res.status(400).send({
            message: "Users content cannot be empty"
        });
    }

    // Find the Users and update it with the request body
    Users.findByIdAndUpdate(req.params._id, {
        Users: req.body.Users
    },
       { new: true })  // "new: true" return updated object
    .then(Users => {
        if(!Users) {
            return res.status(404).send({
                message: "Users not found with id " + req.params._id
            });
        }
        res.send(Users);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Users not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error updating Users with id " + req.params._id
        });
    });
};
// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Users.findByIdAndRemove(req.params._id)
    .then(Users => {
        if(!Users) {
            return res.status(404).send({
                message: "Users not found with id " + req.params._id
            });
        }
        res.send({message: "Users deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Users not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Could not delete Users with id " + req.params._id
        });
    });
};