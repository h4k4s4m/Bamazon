var mysql = require("mysql");
var inquirer = require("inquirer");
var productSelected = '';
var productQuant = 0;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "notroot",

    // Your password
    password: "blahblahblah",
    database: "bamazon"
});

//check if there are connection errors
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    displayStore();
});


function displayStore() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("ITEMS");
        console.log("_____________________________________________________________________");
        for (var x in res) {
            console.log(res[x].item_id + " : " + res[x].product_name + " : $" + res[x].price + " Quantity : " + res[x].stock_quantity);
            productSelected = res[x].product_name;
            productQuant = res[x].stock_quantity;
        }
        console.log("_____________________________________________________________________\n\n\n");
        buy(res);
    });
}


function buy(res) {
    inquirer
        .prompt([{
                type: "input",
                name: "ID",
                message: "What is the ID of the item you would like to buy?"
            },
            {
                type: "input",
                name: "quant",
                message: "How many you want, punk?"
            }
        ])
        .then((response) => {
            connection.query("SELECT * FROM products WHERE ? ", {
                item_id: response.ID
            }, function (err, res) {
                if (err) throw err;
                if ((productQuant - response.qant) < 0) {
                    console.log("I don't think so, pal");
                } else {
                    connection.query("Update products set stock_quantity=stock_quantity- ? WHERE item_id= ?", [response.quant, response.ID]);
                    console.log("\nSuccessfully purchased " + response.quant + " of " + productSelected + "\n");
                    displayStore();
                }

            });
        });

}