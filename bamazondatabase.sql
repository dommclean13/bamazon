CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
id INT AUTO_INCREMENT,
   product_name VARCHAR(100),
   department_name VARCHAR(100),
   price DECIMAL (10,2) NULL,
   stock_quantity INTEGER DEFAULT 0,

   PRIMARY KEY(id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Macbook", "Electronics", 200, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sweater", "Clothing", 50, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Orange Suitcase", "Luggage & Travel Gear", 300, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Waffle Maker", "Home & Kitchen", 40, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Space Heater", "Applicances", 30, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Christmas Tree", "Home & Kitchen", 90, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toothpaste", "Beaty & Personal Care", 200, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Office Chair", "Home & Kitchen", 700, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yoga Mat", "Sports & Fitness", 8, 400);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lightening Cable", "Electronics", 30, 100);
