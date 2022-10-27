CREATE DATABASE IF NOT EXISTS ourlsh;

USE ourlsh;

# LANDLORD TABLE
CREATE TABLE landlord(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL
);

# PROPERTY TABLE
CREATE TABLE prop(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        date_available DATE NOT NULL,
        status INT NOT NULL,
        landlord_id INT  NOT NULL REFERENCES landlord(id),
        prop_name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        description VARCHAR (255) NOT NULL,
        occupied BOOLEAN NOT NULL
);

# TENANT TABLE
CREATE TABLE tenant(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        prop_id INT REFERENCES prop(id),
        landlord_id INT REFERENCES landlord(id)
);

# INVOICE TABLE
CREATE TABLE invoice(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        amount FLOAT NOT NULL,
        date VARCHAR(255) NOT NULL,
        payment_type VARCHAR(255) NOT NULL,
        what_for INT NOT NULL,
        land_id INT NOT NULL REFERENCES landlord(id),
        prop_id INT NOT NULL REFERENCES prop(id),
        tenant_id INT NOT NULL REFERENCES tenant(id)
);

# WORK ORDER TABLE
CREATE TABLE work_order(
        wo_num INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        description VARCHAR(255) NOT NULL,
        status INT NOT NULL,
        date VARCHAR(255) NOT NULL,
        resolved BOOLEAN NOT NULL,
        importance INT NOT NULL,
        tenant_id INT NOT NULL REFERENCES tenant(id),
        prop_id INT NOT NULL REFERENCES prop(id),
        invoice_id INT NOT NULL REFERENCES invoice(id),
        land_id INT NOT NULL REFERENCES landlord(id)
);



   

    

