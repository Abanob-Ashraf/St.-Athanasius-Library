CREATE TABLE blocks (
    id SERIAL PRIMARY KEY,
    block_number INT NOT NULL,
    block_name VARCHAR(100),
    created_date TIMESTAMP NOT NULL,
    updated_date TIMESTAMP NOT NULL
);

insert into blocks (block_number, block_name, created_date, updated_date) values (1, 'Northridge', '2022-07-29 14:59:55', '2022-10-02 09:34:56');
insert into blocks (block_number, block_name, created_date, updated_date) values (2, 'Westport', '2022-06-16 01:10:49', '2022-02-08 18:54:22');
insert into blocks (block_number, block_name, created_date, updated_date) values (3, 'Sutherland', '2022-05-25 23:04:28', '2022-05-04 18:56:45');
insert into blocks (block_number, block_name, created_date, updated_date) values (4, 'Loeprich', '2021-11-22 03:51:06', '2022-10-28 13:27:14');
insert into blocks (block_number, block_name, created_date, updated_date) values (5, 'Aberg', '2022-04-11 10:55:09', '2022-06-02 14:41:15');
insert into blocks (block_number, block_name, created_date, updated_date) values (6, 'International', '2022-06-25 00:06:20', '2022-04-21 12:06:48');
insert into blocks (block_number, block_name, created_date, updated_date) values (7, 'Valley Edge', '2022-09-11 21:07:03', '2022-10-17 10:38:35');
insert into blocks (block_number, block_name, created_date, updated_date) values (8, 'Elka', '2022-08-19 05:51:22', '2022-01-21 01:59:53');
insert into blocks (block_number, block_name, created_date, updated_date) values (9, 'Tomscot', '2022-06-25 08:27:29', '2022-10-15 08:52:56');
insert into blocks (block_number, block_name, created_date, updated_date) values (10, 'Rockefeller', '2022-11-08 02:30:24', '2022-09-11 18:36:37');
insert into blocks (block_number, block_name, created_date, updated_date) values (11, 'Granby', '2022-02-09 20:18:25', '2022-03-05 03:54:35');
insert into blocks (block_number, block_name, created_date, updated_date) values (12, 'Bellgrove', '2022-07-03 12:30:23', '2022-05-26 01:46:24');
insert into blocks (block_number, block_name, created_date, updated_date) values (13, '1st', '2021-12-07 01:59:23', '2022-09-05 16:00:02');
insert into blocks (block_number, block_name, created_date, updated_date) values (14, 'Oneill', '2022-05-22 10:11:56', '2022-10-12 02:02:48');
insert into blocks (block_number, block_name, created_date, updated_date) values (15, 'New Castle', '2022-05-03 06:47:13', '2022-02-03 10:39:56');