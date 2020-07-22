// Create and Save a new Phones
exports.create = (req, res) => {
    // Validate the request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Phones content cannot be empty!"
        });
    }

    // Create a new Phones (using schema)
    const Phones = new Phones({
        _id:require.body._id,
        Manufacturer:require.body.Manufacturer,
        Model:require.body.Model,
        Price:require.body.Price
    });

    // Save Phones in the database
    Phones.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the Phones."
        });
    });
};
// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Phones.find()
    .then(Phoness => {
        res.send(Phoness);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Phoness."
        });
    });
};
// Find a single note with a noteId
exports.findOne = (req, res) => {
    Phones.findById(req.params._id)
    .then(Phones => {
        if(!Phones) {
            return res.status(404).send({
                message: "Phones not found with id " + req.params._id
            });            
        }
        res.send(Phones);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Phones not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Phones with id " + req.params._id
        });
    });
};
// Update a Phones identified by the _id in the request
exports.updateQuote = (req, res) => {
    // Validate Request
    if(!req.body.Phones) {
        return res.status(400).send({
            message: "Phones content cannot be empty"
        });
    }

    // Find the Phones and update it with the request body
    Phones.findByIdAndUpdate(req.params._id, {
        Phones: req.body.Phones
    },
       { new: true })  // "new: true" return updated object
    .then(Phones => {
        if(!Phones) {
            return res.status(404).send({
                message: "Phones not found with id " + req.params._id
            });
        }
        res.send(Phones);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Phones not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error updating Phones with id " + req.params._id
        });
    });
};
// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Phones.findByIdAndRemove(req.params._id)
    .then(Phones => {
        if(!Phones) {
            return res.status(404).send({
                message: "Phones not found with id " + req.params._id
            });
        }
        res.send({message: "Phones deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Phones not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Could not delete Phones with id " + req.params._id
        });
    });
};