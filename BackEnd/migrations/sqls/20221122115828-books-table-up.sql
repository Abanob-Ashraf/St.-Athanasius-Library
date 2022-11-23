CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    book_code VARCHAR(100) UNIQUE,
    book_name VARCHAR(100) UNIQUE NOT NULL,
    author VARCHAR(100) NOT NULL,
    -- date_of_printing VARCHAR(100),
    number_of_copies integer NOT NULL,
    number_of_pages integer NOT NULL,
    number_of_parts integer,
    name_of_series VARCHAR(100),
    conclusion text,
    user_id integer REFERENCES users(id),
    old_user integer REFERENCES users(id),
    shelf_id integer REFERENCES shelfs(id) NOT NULL,
    book_number_in_shelf integer NOT NULL,
    created_date TIMESTAMP NOT NULL,
    updated_date TIMESTAMP NOT NULL
);