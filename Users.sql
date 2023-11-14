CREATE DATABASE reactserver

USE reactserver

DROP TABLE users

CREATE TABLE users(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(256) UNIQUE NOT NULL,
username VARCHAR(256) UNIQUE NOT NULL,
mail VARCHAR(256),
age INT
)

INSERT INTO users(name, username, mail, age)
VALUES
("Jørgen", "jørgen2122", "jørgen@mail.com", "22"),
("Peter", "pete11", "pete@mail.com", "35"),
("Søren", "sørenersej", "sejesøren@mail.com", "67"),
("Kirsten", "frøkenkirsten12", "frkKirsten@mail.com", "82")
