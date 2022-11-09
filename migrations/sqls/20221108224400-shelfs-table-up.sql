CREATE TABLE shelfs (
    id SERIAL PRIMARY KEY,
    shelf_number integer NOT NULL,
    shelf_name VARCHAR(100),
    block_id integer REFERENCES blocks(id) NOT NULL,
    created_date TIMESTAMP NOT NULL,
    updated_date TIMESTAMP NOT NULL
);
