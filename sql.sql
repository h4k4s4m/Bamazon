DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price numeric(12) NOT NULL,
  stock_quantity INT(99) NOT NULL DEFAULT 100,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price)
VALUES ("Laptop", "Electronics", 1000);
INSERT INTO products (product_name, department_name, price)
VALUES ("Computer", "Electronics", 800);
INSERT INTO products (product_name, department_name, price)
VALUES ("Zune", "Electronics", 20);
INSERT INTO products (product_name, department_name, price)
VALUES ("TV", "Electronics", 400);
INSERT INTO products (product_name, department_name, price)
VALUES ("Protein Powder", "Health", 30);
INSERT INTO products (product_name, department_name, price)
VALUES ("Vitamins", "Health", 10);
INSERT INTO products (product_name, department_name, price)
VALUES ("Toothpaste", "Health", 1000);
INSERT INTO products (product_name, department_name, price)
VALUES ("Harry Potter and the Sorcerer\'s Stone Book'", "Entertainment", 22);
INSERT INTO products (product_name, department_name, price)
VALUES ("Pineapple Express DVD", "Entertainment", 8);
INSERT INTO products (product_name, department_name, price)
VALUES ("Think and Grow Rich Audiobook", "Entertainment", 12)