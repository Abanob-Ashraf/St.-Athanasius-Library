export const CREATEBOOK =
  'INSERT INTO books (book_code, book_name, author, publisher, topic, number_of_copies, number_of_pages, number_of_parts, name_of_series, conclusion, currrent_user, old_user, shelf_id, book_number_in_shelf, who_edited, entry_date, publish_date, created_date, updated_date) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)'

export const GETMANYBOOKS = 'SELECT * FROM books'

export const GETLATESTBOOKS = `SELECT books.id,
librarys.library_name, shelfs.shelf_number, blocks.block_number, books.book_code, books.book_name, books.author, books.publisher, 
books.topic, books.number_of_copies, books.number_of_pages, books.number_of_parts, books.name_of_series, books.conclusion, 
books.currrent_user, books.old_user, books.shelf_id, books.book_number_in_shelf, books.who_edited, books.created_date, books.updated_date 
FROM books
INNER JOIN shelfs 
ON shelfs.id = books.shelf_id 
INNER JOIN blocks 
ON blocks.id = shelfs.block_id
INNER JOIN librarys
ON librarys.id = blocks.library_id
ORDER BY created_date DESC LIMIT 10`

export const GETONEBOOKBYID = `SELECT books.id,
librarys.library_name, shelfs.shelf_number, blocks.block_number, books.book_code, books.book_name, books.author, books.publisher, 
books.topic, books.number_of_copies, books.number_of_pages, books.number_of_parts, books.name_of_series, books.conclusion, 
books.currrent_user, books.old_user, books.shelf_id, books.book_number_in_shelf, books.who_edited, books.created_date, books.updated_date 
FROM books
INNER JOIN shelfs 
ON shelfs.id = books.shelf_id 
INNER JOIN blocks 
ON blocks.id = shelfs.block_id
INNER JOIN librarys
ON librarys.id = blocks.library_id WHERE books.id=($1)`

// export const SEARCHFORBOOK =
//   'SELECT * FROM books WHERE book_name=($1) OR author=($2) OR publisher=($3) OR topic=($4) ORDER BY created_date DESC'

export const UPDATEBOOK = `UPDATE books SET 
book_code=($2), 
book_name=($3), 
author=($4), 
publisher=($5), 
topic=($6), 
number_of_copies=($7), 
number_of_pages=($8), 
number_of_parts=($9), 
name_of_series=($10), 
conclusion=($11), 
currrent_user=($12), 
old_user=($13),
shelf_id=($14), 
book_number_in_shelf=($15), 
who_edited=($16),
entry_date=($17), 
publish_date=($18), 
updated_date=($19) 
WHERE id=($1)`

// export const DELETEBOOK = 'DELETE FROM books WHERE id=($1)'

export const CHECKIFBOOKINTHISSHELF =
  'SELECT books.id FROM books WHERE books.shelf_id=($1) AND books.book_number_in_shelf=($2)'

export const GETMYBOOKS = `
SELECT books.id, books.book_name, books.book_number_in_shelf, shelfs.shelf_number, blocks.block_number, librarys.library_name ,books.updated_date 
FROM books 
INNER JOIN shelfs 
ON shelfs.id = books.shelf_id 
INNER JOIN blocks 
ON blocks.id = shelfs.block_id
INNER JOIN librarys
ON librarys.id = blocks.library_id
WHERE currrent_user = ($1) 
ORDER BY books.updated_date DESC`
