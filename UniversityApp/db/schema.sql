CREATE DATABASE IF NOT EXISTS universities_db;
USE universities_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS university;

-- Create the burgers table which will contain     id(int and is the primarykey), burger_name(varchar), devoured(boolean)
CREATE TABLE university (
    id INT NOT NULL auto_increment,
    university_name VARCHAR(100) NOT NULL,
    university_country VARCHAR(100) NOT NULL,
    university_city VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)

    
);
