CREATE TABLE shelfs (
    id SERIAL PRIMARY KEY,
    shelf_number integer,
    shelf_name VARCHAR(100) NOT NULL,
    block_id integer REFERENCES blocks(id) NOT NULL
);
