-- Create the database
CREATE DATABASE swd_technology;

-- Use the database
USE swd_technology;

-- Create the users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,      -- Unique ID for each user
    username VARCHAR(50) NOT NULL UNIQUE,   -- Unique username
    email VARCHAR(100) NOT NULL UNIQUE,     -- Unique email
    password VARCHAR(255) NOT NULL,         -- Password (hashed)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Timestamp for account creation
);
INSERT INTO users (username, email, password) 
VALUES 
('DemoAdmin', 'admin@swdtech.com', '$2y$10$XjXueR23.Ozt9MkDZzF1.Oz3EAp5qOqLvNIRtyJgjTPoaVBaHKNJe');
