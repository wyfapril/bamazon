CREATE database BamazonDB;

USE BamazonDB;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(6) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES 
(1, "Libratone Q ADAPT Wireless On-Ear Headphones", "Electronics", 249.00, 17),
(2, "SunFounder Project Super Starter Kit", "Electronics", 25.99, 46),
(3, "Shiseido Anessa Perfect UV Sunscreen", "Beauty & Personal Care", 22.99, 100),
(4, "Everlane The Modern Commuter Backpack", "Accessories", 68.00, 78),
(5, "Full Bleed Cartoon Series Mouse Pad WIFI Giraffe", "Office", 7.99, 30),
(6, "Kao Curel Medicated Facial Lotion III", "Beauty & Personal Care", 19.61, 18),
(7, "KAZBRELLA Curved - Deep Blue / Deep Blue", "Outdoors", 58.23, 80);


SELECT * FROM products;