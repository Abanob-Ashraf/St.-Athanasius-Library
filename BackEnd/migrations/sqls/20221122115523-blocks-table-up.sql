CREATE TABLE blocks (
    id uuid primary key default gen_random_uuid(),
    block_number INT UNIQUE NOT NULL,
    block_name VARCHAR(100) UNIQUE,
    created_date TIMESTAMP NOT NULL,
    updated_date TIMESTAMP NOT NULL
);