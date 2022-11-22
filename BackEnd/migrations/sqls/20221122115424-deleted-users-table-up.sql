CREATE TABLE deleted_users (
    id integer PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100),
    admin_flag BOOLEAN,
    created_date TIMESTAMP,
    updated_date TIMESTAMP
);