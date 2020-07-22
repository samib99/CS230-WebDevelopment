/*
References
I used both the L20 Video lectures and L22 Video Lectures combined with my own code for this file

However, I had issues with the findallfunction
*/



const TherapySession = require('../models/therapySessions.model.js');

// Default message for /
exports.root= (req, res) => {
    console.log("My TherapySessions App. Use the app to manage your therapySessions!")
    return res.status(200).send({
        message: "My TherapySessions App. Use the app to manage your therapySessions!"
    });
};

//Create a new TherapySession and save to the database
exports.create = (req, res) => {
  //  Validate the request
    if(!req.body.SessionDate ||!req.body.SessionTime ||!req.body.ClientsId ||!req.body.TherapistId ||!req.body.Fee || !req.body.SessionNumber ||!req.body.SessionDuration ||!req.body.SessionType ||!req.body.IssueFlag ||!req.body.SessionNotes) {
        return res.status(400).send({
            message: "TherapySession content cannot be empty!"
        });
    }

    // Create a new TherapySession (using schema)
    const therapySession = new TherapySession({
        SessionDate:req.body.SessionDate,
        SessionTime:req.body.SessionTime,
        ClientsId:req.body.ClientsId,
        TherapistId:req.body.TherapistId,
        Fee:req.body.Fee,
        SessionNumber:req.body.SessionNumber,
        SessionDuration:req.body.SessionDuration,
        SessionType:req.body.SessionType,
        IssueFlag:req.body.IssueFlag,
        SessionNotes:req.body.SessionNotes,
    });

    // Save TherapySession in the database
    therapySession.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the TherapySession."
        });
    });
};

// Return all TherapySessions in the database
exports.findAll = (req, res) => {
    TherapySession.find()
    .then(therapySessions => {
        res.send(therapySessions);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all TherapySessions."
        });
    });
};

// Find a single TherapySession identified by _id
exports.findOne = (req, res) => {
    TherapySession.findById(req.params._id)
    .then(therapySession => {
        if(!therapySession) {
            return res.status(404).send({
                message: "TherapySession not found with id " + req.params._id
            });            
        }
        res.send(therapySession);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "TherapySession not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving TherapySession with id " + req.params._id
        });
    });
};

// Update a TherapySession identified by the _id in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "TherapySession content cannot be empty"
        });
    }

    // Find the TherapySession and update it with the request body
    TherapySession.findByIdAndUpdate(req.params._id, {
        SessionDate:req.body.SessionDate,
        SessionTime:req.body.SessionTime,
        ClientsId:req.body.ClientsId,
        TherapistId:req.body.TherapistId,
        Fee:req.body.Fee,
        SessionNumber:req.body.SessionNumber,
        SessionDuration:req.body.SessionDuration,
        SessionType:req.body.SessionType,
        IssueFlag:req.body.IssueFlag,
        SessionNotes:req.body.SessionNotes,       
    }, 
       { new: true })  // "new: true" return updated object
    .then(therapySession => {
        if(!therapySession) {
            return res.status(404).send({
                message: "TherapySession not found with id " + req.params._id
            });
        }
        res.send(therapySession);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "TherapySession not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error updating TherapySession with id " + req.params._id
        });
    });
};

// Update a TherapySession identified by the _id in the request
exports.updateTherapySession = (req, res) => {
    // Validate Request
    if(!req.body.therapySession) {
        return res.status(400).send({
            message: "TherapySession content cannot be empty"
        });
    }

    // Find the TherapySession and update it with the request body
    TherapySession.findByIdAndUpdate(req.params._id, {
        therapySession: req.body.therapySession
    }, 
       { new: true })  // "new: true" return updated object
    .then(therapySession => {
        if(!therapySession) {
            return res.status(404).send({
                message: "TherapySession not found with id " + req.params._id
            });
        }
        res.send(therapySession);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "TherapySession not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error updating TherapySession with id " + req.params._id
        });
    });
};



// Delete a TherapySession identified by _id
exports.delete = (req, res) => {
    TherapySession.findByIdAndRemove(req.params._id)
    .then(therapySession => {
        if(!therapySession) {
            return res.status(404).send({
                message: "TherapySession not found with id " + req.params._id
            });
        }
        res.send({message: "TherapySession deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "TherapySession not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Could not delete TherapySession with id " + req.params._id
        });
    });
};