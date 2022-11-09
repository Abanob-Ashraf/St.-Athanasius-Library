CREATE TABLE blocks (
    id SERIAL PRIMARY KEY,
    block_number INT NOT NULL,
    block_name VARCHAR(100),
    created_date TIMESTAMP NOT NULL,
    updated_date TIMESTAMP NOT NULL
);