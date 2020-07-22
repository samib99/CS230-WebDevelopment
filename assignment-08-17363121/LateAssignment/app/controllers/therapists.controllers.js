const Therapist = require('../models/therapists.model.js');

// Default message for /
exports.root= (req, res) => {
    console.log("My Therapists App. Use the app to manage your therapists!")
    return res.status(200).send({
        message: "My Therapists App. Use the app to manage your therapists!"
    });
};

// Create a new Therapist and save to the database
exports.create = (req, res) => {
  //  Validate the request
    if(!req.body.FirstName||!req.body.Surname||!req.body.MobileNum||!req.body.HomeNum||!req.body.Email  ||!req.body.Addline1||!req.body.Addline2||!req.body.Town||!req.body.County||!req.body.EIRCODE) {
        return res.status(400).send({
            message: "Therapist content cannot be empty!"
        });
    }

    // Create a new Therapist (using schema)
    const therapist = new Therapist({
        Title:req.body.Title,
        FirstName:req.body.FirstName,
        Surname:req.body.Surname,
        MobileNum:req.body.MobileNum,
        HomeNum:req.body.HomeNum,
        Email:req.body.Email, 
        Addline1:req.body.Addline1,
        Addline2:req.body.Addline2,
        Town:req.body.Town,
        County:req.body.County,
        EIRCODE:req.body.EIRCODE,        
    });

    // Save Therapist in the database
    therapist.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the Therapist."
        });
    });
};

// Return all Therapists in the database
exports.findAll = (req, res) => {
    Therapist.find()
    .then(therapists => {
        res.send(therapists);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Therapists."
        });
    });
};

// Find a single Therapist identified by _id
exports.findOne = (req, res) => {
    Therapist.findById(req.params._id)
    .then(therapist => {
        if(!therapist) {
            return res.status(404).send({
                message: "Therapist not found with id " + req.params._id
            });            
        }
        res.send(therapist);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Therapist not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Therapist with id " + req.params._id
        });
    });
};

// Update a Therapist identified by the _id in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Therapist content cannot be empty"
        });
    }

    // Find the Therapist and update it with the request body
    Therapist.findByIdAndUpdate(req.params._id, {
        Title:req.body.Title,
        FirstName:req.body.FirstName,
        Surname:req.body.Surname,
        MobileNum:req.body.MobileNum,
        HomeNum:req.body.HomeNum,
        Email:req.body.Email, 
        Addline1:req.body.Addline1,
        Addline2:req.body.Addline2,
        Town:req.body.Town,
        County:req.body.County,
        EIRCODE:req.body.EIRCODE,        
    }, 
       { new: true })  // "new: true" return updated object
    .then(therapist => {
        if(!therapist) {
            return res.status(404).send({
                message: "Therapist not found with id " + req.params._id
            });
        }
        res.send(therapist);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Therapist not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error updating Therapist with id " + req.params._id
        });
    });
};

// Update a Therapist identified by the _id in the request
exports.updateTherapist = (req, res) => {
    // Validate Request
    if(!req.body.therapist) {
        return res.status(400).send({
            message: "Therapist content cannot be empty"
        });
    }

    // Find the Therapist and update it with the request body
    Therapist.findByIdAndUpdate(req.params._id, {
        therapist: req.body.therapist
    }, 
       { new: true })  // "new: true" return updated object
    .then(therapist => {
        if(!therapist) {
            return res.status(404).send({
                message: "Therapist not found with id " + req.params._id
            });
        }
        res.send(therapist);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Therapist not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error updating Therapist with id " + req.params._id
        });
    });
};



// Delete a Therapist identified by _id
exports.delete = (req, res) => {
    Therapist.findByIdAndRemove(req.params._id)
    .then(therapist => {
        if(!therapist) {
            return res.status(404).send({
                message: "Therapist not found with id " + req.params._id
            });
        }
        res.send({message: "Therapist deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Therapist not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Could not delete Therapist with id " + req.params._id
        });
    });
};