/*
I exprerienced the Insertion error described by Behnam in Teams. I have included my db in a txt file.

[Yesterday 3:41 PM] Behnam Faghih
Important! MongoDB Atlas problem
CS230 Labs 
Dear CS230 student,
If you still have the problem with the online MongoDB atlas for inserting data,
you can insert your data by GUI and then manipulate the data by code. In this case,
we will evaluate your insertion code to check whether or not it is correct,
and all the other functionalities (RUD) will be evaluated by running your codes. In some cases, before inserting new data by GUI,
 ou may need to delete all (or part of) the data from your database, first.
Best.
Behnam
*/

/*
Description of database
3 Collections (Users,Phones,Orders)
Orders Connects Object_Id from Users and Phones so you can clearly see what customer ordered what phone.
Entities can be viewed in assignment-05.txt
*/

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const connect = require("./connect"); // my URL and password in external js folder
const client = new MongoClient(connect.database.url, { useUnifiedTopology: true } );


const dbName = 'Assignment5'; // Name of my db

client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

// insertCustomers(db, function() {         //Insertion error detailed above
//     insertPhone(db,function() {      
//         insertOrder(db,function() {
            findCustomers(db,function() {       //Calls Methods
                findPhone(db,function() {
                  findOrders(db,function() {
                    updateCustomer(db,function() {
                        updatePhone(db,function() {
                            // removeCustomer(db,function() {
                            //     removePhone(db,function() {
                            //         removeOrder(db,function() {

                                        client.close();
                                    });
                                });
                            });
                        });
                    });
                });
    //         });
    //     });
    //   });
//     });
//   });
// });
const insertCustomers = function(db, callback) {                                                        // C Creates Customer
  const collection = db.collection('Users');
  collection.insertOne([
    {FirstName:"Mary",Surname:"McDonald",Mobile:"085321619",Email:"marylou@gmail.com",
    ShipAdd:{AddLine1:"23 Mayo Rd.",AddLine2:"Riverside",Town:"Tipperary town",County:"Tipperary"},
    BillAdd:{AddLine1:"23 Mayo Rd.",AddLine2:"Riverside",Town:"Tipperary town",County:"Tipperary"}}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    assert.equal(1, result.ops.length);
    console.log("Inserted 1 Customer into the collection");
    callback(result);
  });
}
const insertPhone = function(db, callback) {                                                            // C Creates Phone
    const collection = db.collection('Phones');
    collection.insertOne([
        {"Manufacturer":"MU-Phone","Model":"MUPhone20","Price":"499.99"}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      assert.equal(1, result.ops.length);
      console.log("Inserted 1 Phone into the collection");
      callback(result);
    });
  }
  const insertOrder = function(db, callback) {                                                         // C Creates Order
    const collection = db.collection('Orders');
    collection.insertOne([
        {"_id":{"$oid":"5ea5f0d54b3c39db38567bbf"},"User_Id":{"$oid":"5ea5dfaa4b3c39db38567bb2"},"Phone_Id":{"$oid":"5ea5e1894b3c39db38567bb6"}}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      assert.equal(1, result.ops.length);
      console.log("Inserted 1 Order into the collection");
      callback(result);
    });
  }
const findCustomers = function(db, callback) {                                                      // R Retrieves a Customer
    // Get the documents collection
    const collection = db.collection('Users');
    // Find some documents - with a filter
    collection.find({'FirstName': 'Bill'}).toArray(function(err, docs) {
      // using the assert module for testing
      assert.equal(err, null);
      console.log("Found the following records of Users with FirstName:Bill");
      // all good if we get to here
      console.log(docs);
      callback(docs);
    });
}
const findPhone = function(db, callback) {                                                             // R Retrieves a Phone
    // Get the documents collection
    const collection = db.collection('Phones');
    // Find some documents - with a filter
    collection.find({'Manufacturer': 'Apple'}).toArray(function(err, docs) {
      // using the assert module for testing
      assert.equal(err, null);
      console.log("Found the following records of Phones with 'Manufacturer': 'Apple'");
      console.log(docs);
      callback(docs);
    });
}
const findOrders = function(db, callback) {                                                             // R Retrieves all Orders
    // Get the documents collection
    const collection = db.collection('Orders');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      // using the assert module for testing
      assert.equal(err, null);
      // all good if we get to here
      console.log("Found the following records of Orders");
      console.log(docs)
      callback(docs);
    });
}
const updateCustomer = function(db, callback) {                                                        // U Updates Customer
    // Get the documents collection
    const collection = db.collection('Users');
    
    collection.updateOne({"FirstName":"Jack" }
      , { $set: { "Surname":"McMurphy","Mobile":"0891919783","Email":"Mcmurphysmurf@gmail.com",} }, function(err, result) {
      // using the assert module for testing
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      // all good if we get to here
      console.log("Updates the Customer: Jack Murphy");
      callback(result);
    });  
  }
const updatePhone = function(db, callback) {                                                        // U Updates Phone
    // Get the documents collection
    const collection = db.collection('Phones');
    // Update document where email is "alondra.dunne@purplemail.ie", set to "alondra.dunne@redmail.ie"
    collection.updateOne({"Manufacturer":"Google" }
      , { $set: { "Price":"315.00","Model":"Pixel 3a 5g",} }, function(err, result) {
      // using the assert module for testing
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      // all good if we get to here
      console.log("Updated the Phone: Pixel 3a");
      callback(result);
    });  
  }
  const removeCustomer = function(db, callback) {                                                      //D Deletes Customer
    // Get the documents collection
    const collection = db.collection('Users');
    collection.deleteOne({ "name" : "Mary" }, function(err, result) {
      // using the assert module for testing
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      // all good if we get to here      
      console.log("Removed the Customer with firstname : 'Mary'");
      callback(result);
    });    
}
const removePhone = function(db, callback) {                                                      //D Deletes Phone
    // Get the documents collection
    const collection = db.collection('Phones');
    // Delete document where email is "alondra.dunne@redmail.ie"
    collection.deleteOne({ "Manufacturer":"MU-Phone"}, function(err, result) {
      // using the assert module for testing
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      // all good if we get to here      
      console.log("Removed the Phone with Manufacturer:'MU-Phone'");
      callback(result);
    });    
}
const removeOrder = function(db, callback) {                                                      //D Deletes Order
    // Get the documents collection
    const collection = db.collection('Orders');
    // Delete document where email is "alondra.dunne@redmail.ie"
    collection.deleteOne({ "User_Id":"5ea5dd804b3c39db38567bae"}, function(err, result) {
      // using the assert module for testing
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      // all good if we get to here      
      console.log("Removed the Order with User_ID:'5ea5dd804b3c39db38567bae'");
      callback(result);
    });    
}



  


