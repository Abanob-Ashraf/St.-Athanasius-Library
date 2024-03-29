CREATE TABLE books (
    id uuid primary key default gen_random_uuid(),
    book_code VARCHAR(100) NOT NULL,
    book_name VARCHAR(100) NOT NULL,
    author VARCHAR(100),
    publisher VARCHAR(100),
    topic VARCHAR(100) NOT NULL,
    number_of_copies integer NOT NULL,
    number_of_pages integer NOT NULL,
    number_of_parts integer,
    name_of_series text,
    conclusion text,
    currrent_user uuid REFERENCES users(id) NOT NULL,
    old_user uuid REFERENCES users(id),
    shelf_id uuid REFERENCES shelfs(id) NOT NULL,
    book_number_in_shelf integer NOT NULL,
    who_edited uuid REFERENCES users(id),
    entry_date date,
    publish_date date,
    created_date TIMESTAMP NOT NULL,
    updated_date TIMESTAMP NOT NULL
);
