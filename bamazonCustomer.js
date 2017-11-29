var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "notroot",

    // Your password
    password: "blahblahblah",
    database: "bamazon"
});

displayStore();

function displayStore() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("ITEMS");
        console.log("_____________________________________________________________________");
        for (var x in res) {
            console.log(res[x].item_id + " : " + res[x].product_name + " : $" + res[x].price);
        }
        console.log("_____________________________________________________________________\n\n\n");
        buy();
    });
}


function buy() {
    inquirer
        .prompt([{
            type: "input",
            name: "ID",
            message: "What is the ID of the item you would like to buy?"
        }])
        .then((response) => {
            connection.query("SELECT * FROM products WHERE ?", {
                item_id: response.ID
            }, function (err, res) {
                if (err) throw err;
                console.log(res);
                connection.end();
            });
        });

}