var mysql = require('mysql');

var con = mysql.createConnection({
    host: "remotemysql.com",
    user: "JATXAGOaLD",
    password: "6WxXVQklkC",
    database: "JATXAGOaLD"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    //CRUD = Create, Read, Update, Delete

    //                      CREATE
    //Creates a table named stock with 2 columns
    // var sql = "CREATE TABLE stock (Product_Name VARCHAR(255), number_In_Stock int(255))";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table Stock created");
    // });
    //Insertion statements 
    var sql = "INSERT INTO User_Info (Title,First_Name,Surname,Mobile,Email) VALUES ('Mrs','Michael','Higgins','0871234567','mhiggins@gmail.com') ";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record Inserted into User_Info");
    });
    var sql = "INSERT INTO `Address_db`(`Line1`, `Line2`, `Town`, `County`, `Eircode`) VALUES ('Áras an Uachtaráin','Phoenix Park','Dublin','Dublin','00000000')";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record Inserted into Address_db");
    });
    // var sql = "INSERT INTO `User_Address`(`User_fk`, `Address_fk`, `Is_Shipping`, `Is_Billing`) VALUES (3,4,1,1)";
    // con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("1 record Inserted into User_Address");
    // });
    
    
    //Reads
    if (err) throw err;
    con.query("SELECT * FROM User_Info WHERE First_Name = 'Michael'", function (err, result, fields) {
      if (err) throw err;
          console.log(result);
    });



    //Update
    if (err) throw err;
    var sql = "UPDATE Address_db SET Line2 = 'Dáil Éireann' WHERE Line2 = 'Phoenix Park'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
    //D
     //D Deletes Table 
    // var sql = "DROP TABLE stock";
    // con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("Table Stock Deleted");
    // });
     


   // Deletes ID 3 from all 3 tables and restores to database before code was executed
    var sql = "DELETE FROM User_Address WHERE User_fk > 2";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("User Deleted FROM User_Address");
    });
    var sql = "Delete FROM Address_db WHERE Address_ID > 3";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("User Deleted FROM Address_db");
    });
    var sql = "Delete FROM User_Info WHERE ID > 2";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("User Deleted FROM User_Info");
    });




});




