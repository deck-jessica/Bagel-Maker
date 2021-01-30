ALTER USER ‘root’@‘localhost’ IDENTIFIED WITH mysql_native_password BY '';

CREATE DATABASE bagels_db;
USE bagels_db;

CREATE TABLE bagels (
    id INT(10) AUTO_INCREMENT NOT NULL,
    bagel_name VARCHAR(40) NOT NULL, 
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);