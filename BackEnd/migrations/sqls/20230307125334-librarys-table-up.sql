CREATE TABLE librarys (
    id uuid primary key default gen_random_uuid(),
    library_name VARCHAR(100) UNIQUE NOT NULL,
    created_date TIMESTAMP NOT NULL,
    updated_date TIMESTAMP NOT NULL
);