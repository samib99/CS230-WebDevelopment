/*
References
I used both the L20 Video lectures and L22 Video Lectures combined with my own code for this file


For my Database I used a relational mongodb database with 3 collections (clients,therapists and therapySessions)
I encountered problems with using the find functions with the embedded addresses so my addresses are not objects just strings


If I had more time I could have better implemented a front end and finished my find clients by name functions

OS: Windows 10
Browser USED:Firefox
*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/*  == USER INTERFACE ADDITIONS == */
const hbs = require('hbs');                 // use hbs view engine
const path = require('path');               // use the path module (for views)
/*  == USER INTERFACE ADDITIONS == */


app.use(bodyParser.json())                          //  application/json
app.use(bodyParser.urlencoded({ extended: true }))  // pplication/x-www-form-urlencoded



require('./app/routes/clients.routes.js')(app);
require('./app/routes/therapists.routes.js')(app);
require('./app/routes/therapySessions.routes.js')(app);

/*  == USER INTERFACE ADDITIONS == */
app.set('views',path.join(__dirname,'views'));              // set the views directory
app.set('view engine', 'hbs');                              // set the view engine to hbs
app.use('/assets',express.static(__dirname + '/public'));   // set public folder as "static" for static files
/*  == USER INTERFACE ADDITIONS == */



//const dbConnect = require('.\config\connect.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Sami:1234@cluster0-3rfvk.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Successfully connected to the MongoDB database");
}).catch(err => {
    console.log('Unable to connect to the MongoDB database', err);
    process.exit();
});

app.listen(3000, () => {
    console.log("Server listening")
});
