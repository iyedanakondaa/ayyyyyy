CREATE DATABASE swdtechnology;

USE swdtechnology;

CREATE TABLE users (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
