CREATE TABLE blocks (
    id uuid primary key default gen_random_uuid(),
    block_number INT NOT NULL,
    block_name VARCHAR(100) UNIQUE,
    library_id uuid REFERENCES librarys(id) NOT NULL,
    created_date TIMESTAMP NOT NULL,
    updated_date TIMESTAMP NOT NULL
);