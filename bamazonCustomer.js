var mysql = require("mysql");
var inquirer = require("inquirer");

var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "Super<3Love",
  database: "BamazonDB"
});

con.connect(function(err){
  if(err) throw err;
  console.log("Connection established");
});

con.query('SELECT * FROM products',function(err,res){
  if(err) throw err;
  console.log('Data received from Db:\n');
  //console.log(res);
});

var buy = function() {
  inquirer.prompt({
    name: "buy_id",
    type: "input",
    message: "Enter the id of the item you would like to purchase."    
  }).then(function(answer){
    console.log(answer.buy_id);    
  })
}

buy();

con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});



// {
//     name: "unit",
//     type: "input",
//     message: "How many of the item would you like to purchase?"
    
//   }
//   console.log(answer.unit);