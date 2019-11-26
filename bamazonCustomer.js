var mysql = require("mysql");

// connection to the database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // setting root to the default username
  user: "root",

  // password is an empty string
  password: "",
  database: "bamazon"  
});

// connecting to the database
connection.connect(err => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});


// prompt the user for the quantity or item they choose
function promptUserPurchase() {
	// telling the user to select and item
	inquirer.prompt([
		{
			type: 'input',
			name: 'id',
			message: 'Enter the Item ID which you would like to purchase.',
			validate: validateInput,
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many would you like?',
			validate: validateInput,
			filter: Number
		}
	]).then(function(input) {

		var item = input.id;
		var quantity = input.quantity;

		var queryStr = 'SELECT * FROM products WHERE ?';

		connection.query(queryStr, {id: item}, function(err, data) {
			if (err) throw err;

			if (data.length === 0) {
				console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
				displayInventory();

			} else {
				var productData = data[0];

				// If the quantity requested by the user is in stock
				if (quantity <= productData.stock) {
					console.log('You got it! Placing order...');

					// Construct the updating query string
					var updateQueryStr = 'UPDATE products SET stock = ' + (productData.stock - quantity) + ' WHERE id = ' + item;
					// console.log('updateQueryStr = ' + updateQueryStr);

					// Update the inventory
					connection.query(updateQueryStr, function(err, data) {
						if (err) throw err;

						console.log('Your total is $' + productData.price * quantity);
						console.log("\n---------------------------------------------------------------------\n");

                        displayInventory();
					})
				} else {
					console.log('Not engough in stock. Try another amount');
					console.log("\n---------------------------------------------------------------------\n");

					displayInventory();
				}
			}
		})
	})
}


