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

var show = function() {
  con.query('SELECT * FROM products', function(err,res){
    if(err) throw err;
    for(var i=0; i<res.length; i++){
      console.log("id: " + res[i].item_id + " || Product: " + res[i].product_name + " || Department: " + res[i].department_name + " || Price: $" + res[i].price + " || Stock Quantity: " + res[i].stock_quantity + "\n");
    }
    buy(res);  
  });
}

show();

var buy = function(res) {
  inquirer.prompt([{
    name: "buy_id",
    type: "input",
    message: "Enter the id of the item you would like to purchase.",
    validate: function(input1){
      if(input1<=res.lenghth){
        return true;
      } else {
        return false;
        console.log("Please enter a valid item id.");
      }
    }
  }]).then(function(answer){
  	var correct = false;
  	for (var i=0; i<res.length; i++) {
  		if (res[i].item_id===answer.buy_id) {
  			correct = true;
  			var id = i;
  			howMany();
  		}  		
  	}
  })
}

var howMany = function(res){
	inquirer.prompt([{
	    name: "unit",
	    type: "input",
	    message: "How many of the item would you like to purchase?",
	    validate: function(input2){
	      if(isNaN(input2)===false){
	                return true;
	              } else {
	                return false;
	              }
	    }
    }]).then(function(answer){
    	if (res[id].stock_quantity>answer.unit) {
    		var instock = res[id].stock_quantity - answer.unit
    		con.query("UPDATE products SET stock_quantity='" + instock + "' WHERE item_id='" + id + "'", function(error, result){
    			console.log("Thank you for buying from us!");
          show();    			
    		})
    	} else {
        console.log("Sorry, We don't have enough items left. Maybe another quantity?");
        buy(res);
      }
    });
}

con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});

