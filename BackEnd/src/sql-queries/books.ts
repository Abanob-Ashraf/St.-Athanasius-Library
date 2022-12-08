export const CREATEBOOK =
  'INSERT INTO books (book_code, book_name, author, number_of_copies, number_of_pages, number_of_parts, name_of_series, conclusion, currrent_user, old_user, shelf_id, book_number_in_shelf, who_edited, created_date, updated_date) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *'

export const GETMANYBOOKS = 'SELECT * FROM books'

export const GETONEBOOKBYID = 'SELECT * FROM books WHERE id=($1);'

export const GETONEBOOKBYNAME = 'SELECT * FROM books WHERE book_name=($1);'

export const UPDATEBOOK =
  'UPDATE books SET book_code=($2), book_name=($3), author=($4), number_of_copies=($5), number_of_pages=($6), number_of_parts=($7), name_of_series=($8), conclusion=($9), currrent_user=($10), old_user=($11) ,shelf_id=($12), book_number_in_shelf=($13), who_edited=($14), updated_date=($15) WHERE id=($1) RETURNING *'

export const DELETEBOOK = 'DELETE FROM books WHERE id=($1) RETURNING *'

export const CHECKIFBOOKINTHISSHELF =
  'SELECT books.id FROM books WHERE books.shelf_id=($1) AND books.book_number_in_shelf=($2)'

export const GETMYBOOKS =
  'SELECT books.id, books.book_name, books.book_number_in_shelf, shelfs.shelf_number, blocks.block_number FROM books INNER JOIN shelfs ON shelfs.id = books.shelf_id INNER JOIN blocks ON blocks.id = shelfs.block_id WHERE currrent_user = ($1)'
