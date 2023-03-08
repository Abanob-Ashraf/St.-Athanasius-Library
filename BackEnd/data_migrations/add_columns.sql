-- add to books

-- ALTER TABLE books
-- ADD entry_date date;
-- ALTER TABLE books
-- ADD publish_date date;

-- add to blocks

ALTER TABLE blocks
ADD library_id uuid REFERENCES librarys(id);


