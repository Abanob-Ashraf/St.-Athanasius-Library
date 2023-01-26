CREATE TABLE shelfs (
    id uuid primary key default gen_random_uuid(),
    shelf_number INT NOT NULL,
    shelf_name VARCHAR(100) UNIQUE,
    block_id uuid REFERENCES blocks(id) NOT NULL,
    created_date TIMESTAMP NOT NULL,
    updated_date TIMESTAMP NOT NULL
);