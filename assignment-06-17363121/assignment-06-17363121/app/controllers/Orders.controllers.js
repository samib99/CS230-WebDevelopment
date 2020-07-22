// Create and Save a new Orders
exports.create = (req, res) => {
    // Validate the request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Orders content cannot be empty!"
        });
    }

    // Create a new Orders (using schema)
    const Orders = new Orders({
        _id:require.body._id,
        User_Id:require.body.User_Id,
        Phone_Id:require.body.Phone_Id
    });

    // Save Orders in the database
    Orders.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the Orders."
        });
    });
};
// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Orders.find()
    .then(Orderss => {
        res.send(Orderss);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Orderss."
        });
    });
};
// Find a single note with a noteId
exports.findOne = (req, res) => {
    Orders.findById(req.params._id)
    .then(Orders => {
        if(!Orders) {
            return res.status(404).send({
                message: "Orders not found with id " + req.params._id
            });            
        }
        res.send(Orders);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Orders not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Orders with id " + req.params._id
        });
    });
};
// Update a Orders identified by the _id in the request
exports.updateQuote = (req, res) => {
    // Validate Request
    if(!req.body.Orders) {
        return res.status(400).send({
            message: "Orders content cannot be empty"
        });
    }

    // Find the Orders and update it with the request body
    Orders.findByIdAndUpdate(req.params._id, {
        Orders: req.body.Orders
    },
       { new: true })  // "new: true" return updated object
    .then(Orders => {
        if(!Orders) {
            return res.status(404).send({
                message: "Orders not found with id " + req.params._id
            });
        }
        res.send(Orders);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Orders not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error updating Orders with id " + req.params._id
        });
    });
};
// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Orders.findByIdAndRemove(req.params._id)
    .then(Orders => {
        if(!Orders) {
            return res.status(404).send({
                message: "Orders not found with id " + req.params._id
            });
        }
        res.send({message: "Orders deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Orders not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Could not delete Orders with id " + req.params._id
        });
    });
};