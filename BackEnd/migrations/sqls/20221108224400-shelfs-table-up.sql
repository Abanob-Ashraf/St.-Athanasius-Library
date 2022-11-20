CREATE TABLE shelfs (
    id SERIAL PRIMARY KEY,
    shelf_number INT NOT NULL,
    shelf_name VARCHAR(100) UNIQUE,
    block_id integer REFERENCES blocks(id) NOT NULL,
    created_date TIMESTAMP NOT NULL,
    updated_date TIMESTAMP NOT NULL
);