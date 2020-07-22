const Client = require('../models/clients.model.js');
/*
References
I used both the L20 Video lectures and L22 Video Lectures combined with my own code for this file
*/



/*  == USER INTERFACE ADDITIONS == */
// Default message for / (get)
exports.root = (req, res) => {
    FirstName.find()
    .then(clients => {
        res.render('clients_view',{
            results: clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all FirstNames."
        });
    });
};

// search for clients, matching string on quote field
exports.searchClient = (req, res) => {
    var search = req.params.s;
    console.log("Searching FirstNames: "+search)
    FirstName.find({ client: new RegExp(search,"ig")})
    .then(clients => {
        res.render('clients_view',{
            results: clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all FirstNames."
        });
    });
};

// search for clients, matching string on author field
exports.searchAuthor = (req, res) => {
    var search = req.params.s;
    console.log("Searching Authors: "+search)
    FirstName.find({ author: new RegExp(search,"ig")})
    .then(clients => {
        res.render('clients_view',{
            results: clients
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all FirstNames."
        });
    });
};
/*  == USER INTERFACE ADDITIONS == */

// Create a new Client and save to the database
exports.create = (req, res) => {
  //  Validate the request
    if(!req.body.FirstName||!req.body.Surname||!req.body.MobileNum||!req.body.HomeNum||!req.body.Email  ||!req.body.Addline1||!req.body.Addline2||!req.body.Town||!req.body.County||!req.body.EIRCODE||!req.body.DOB||!req.body.ParentGuardian||!req.body.PermisionToText||!req.body.DateOfRecord||!req.body.Marital||!req.body.ReferredBy) {
        return res.status(400).send({
            message: "Client content cannot be empty!"
        });
    }

    // Create a new Client (using schema)
    const client = new Client({
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
        DOB:req.body.DOB,
        ParentGuardian:req.body.ParentGuardian,
        PermisionToText:req.body.PermisionToText,
        DateOfRecord:req.body.DateOfRecord,
        Marital:req.body.Marital,
        ReferredBy:req.body.ReferredBy
    });

    // Save Client in the database
    client.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the Client."
        });
    });
};

// Return all Clients in the database
exports.findAll = (req, res) => {
    Client.find()
    .then(clients => {
        res.send(clients);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Clients."
        });
    });
};

// Find a single Client identified by _id
exports.findOne = (req, res) => {
    Client.findById(req.params._id)
    .then(client => {
        if(!client) {
            return res.status(404).send({
                message: "Client not found with id " + req.params._id
            });            
        }
        res.send(client);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Client not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Client with id " + req.params._id
        });
    });
};

// Update a Client identified by the _id in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Client content cannot be empty"
        });
    }

    // Find the Client and update it with the request body
    Client.findByIdAndUpdate(req.params._id, {
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
        DOB:req.body.DOB,
        ParentGuardian:req.body.ParentGuardian,
        PermisionToText:req.body.PermisionToText,
        DateOfRecord:req.body.DateOfRecord,
        Marital:req.body.Marital,
        ReferredBy:req.body.ReferredBy,
    }, 
       { new: true })  // "new: true" return updated object
    .then(client => {
        if(!client) {
            return res.status(404).send({
                message: "Client not found with id " + req.params._id
            });
        }
        res.send(client);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Client not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error updating Client with id " + req.params._id
        });
    });
};

// Update a Client identified by the _id in the request
exports.updateClient = (req, res) => {
    // Validate Request
    if(!req.body.client) {
        return res.status(400).send({
            message: "Client content cannot be empty"
        });
    }

    // Find the Client and update it with the request body
    Client.findByIdAndUpdate(req.params._id, {
        client: req.body.client
    }, 
       { new: true })  // "new: true" return updated object
    .then(client => {
        if(!client) {
            return res.status(404).send({
                message: "Client not found with id " + req.params._id
            });
        }
        res.send(client);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Client not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error updating Client with id " + req.params._id
        });
    });
};



// Delete a Client identified by _id
exports.delete = (req, res) => {
    Client.findByIdAndRemove(req.params._id)
    .then(client => {
        if(!client) {
            return res.status(404).send({
                message: "Client not found with id " + req.params._id
            });
        }
        res.send({message: "Client deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Client not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Could not delete Client with id " + req.params._id
        });
    });
};