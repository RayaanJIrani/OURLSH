CREATE DATABASE IF NOT EXISTS ourlsh;

USE ourlsh;

# LANDLORD TABLE
CREATE TABLE landlord(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        pfp BLOB NOT NULL
);

# TENANT TABLE
CREATE TABLE tenant(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        address VARCHAR(255),
        landlord_id INT REFERENCES landlord(id),
        pfp BLOB NOT NULL
);

# INVOICE TABLE
CREATE TABLE invoice(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        amount FLOAT NOT NULL,
        date VARCHAR(255) NOT NULL,
        payment_type VARCHAR(255) NOT NULL,
        what_for INT NOT NULL,
        land_id INT NOT NULL REFERENCES landlord(id),
        tenant_id INT NOT NULL REFERENCES tenant(id)
);

# WORK ORDER TABLE
CREATE TABLE work_order(
        wo_num INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        description VARCHAR(255) NOT NULL,
        status INT NOT NULL,
        date DATETIME NOT NULL,
        resolved BOOLEAN NOT NULL,
        importance INT NOT NULL,
        tenant_id INT NOT NULL REFERENCES tenant(id),
        invoice_id INT NOT NULL REFERENCES invoice(id),
        land_id INT NOT NULL REFERENCES landlord(id),
);

CREATE TABLE payment(
        payment_num INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        tenant_id INT NOT NULL REFERENCES tenant(id), 
        invoice_id INT NOT NULL REFERENCES invoice(id), 
        amount FLOAT NOT NULL, 
        person_name VARCHAR(255), 
        card_number VARCHAR(255), 
        expiry VARCHAR(255) NOT NULL, 
        security_code VARCHAR(255)
);