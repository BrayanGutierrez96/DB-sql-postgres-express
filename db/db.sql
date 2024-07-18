CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    user_email VARCHAR(50) NOT NULL UNIQUE,
    user_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users
(user_name, user_email)
VALUES
('John Doe', 'john@gmail.com'),
('Jane Doe', 'jane@gmail.com');