CREATE TABLE shelfs (
    id SERIAL PRIMARY KEY,
    shelf_number integer NOT NULL,
    shelf_name VARCHAR(100),
    block_id integer REFERENCES blocks(id) NOT NULL,
    created_date TIMESTAMP NOT NULL,
    updated_date TIMESTAMP NOT NULL
);


insert into shelfs (shelf_number, shelf_name, block_id, created_date, updated_date) values (4, 'anti diarrheal', 11, '2022-10-19 19:15:27', '2022-03-23 14:05:15');
insert into shelfs (shelf_number, shelf_name, block_id, created_date, updated_date) values (6, 'Gerbil Epithelium', 6, '2021-11-19 07:12:43', '2022-01-19 08:50:49');
insert into shelfs (shelf_number, shelf_name, block_id, created_date, updated_date) values (4, 'Pleo Nota-Quent', 5, '2022-09-18 07:19:08', '2022-08-24 11:36:10');
insert into shelfs (shelf_number, shelf_name, block_id, created_date, updated_date) values (5, 'TRICARE PRENATAL DHA ONE', 4, '2022-03-05 13:48:05', '2022-04-26 10:53:58');
insert into shelfs (shelf_number, shelf_name, block_id, created_date, updated_date) values (1, 'Metformin Hydrochloride', 1, '2021-12-07 03:40:14', '2022-11-01 17:31:57');
insert into shelfs (shelf_number, shelf_name, block_id, created_date, updated_date) values (2, 'Global EASY PREP alcohol prep pads', 6, '2022-01-12 04:35:10', '2022-04-28 23:05:05');
insert into shelfs (shelf_number, shelf_name, block_id, created_date, updated_date) values (5, 'Fludarabine Phosphate', 12, '2022-03-10 21:08:58', '2022-07-15 04:39:06');
insert into shelfs (shelf_number, shelf_name, block_id, created_date, updated_date) values (4, 'Rat Epithelium', 14, '2021-12-29 14:36:43', '2022-10-11 06:44:01');
insert into shelfs (shelf_number, shelf_name, block_id, created_date, updated_date) values (5, 'Xodol', 4, '2022-06-06 07:50:28', '2022-06-26 00:43:23');
insert into shelfs (shelf_number, shelf_name, block_id, created_date, updated_date) values (4, 'Nifedipine', 7, '2022-03-03 17:18:20', '2022-10-28 05:13:01');
insert into shelfs (shelf_number, shelf_name, block_id, created_date, updated_date) values (6, 'Toviaz', 7, '2022-07-01 10:31:31', '2021-12-05 21:37:24');
insert into shelfs (shelf_number, shelf_name, block_id, created_date, updated_date) values (5, 'DYAZIDE', 10, '2022-04-20 08:02:02', '2022-08-04 17:25:09');
insert into shelfs (shelf_number, shelf_name, block_id, created_date, updated_date) values (2, 'Chlorpheniramine Maleate', 15, '2022-06-16 18:57:18', '2021-11-29 22:03:42');
insert into shelfs (shelf_number, shelf_name, block_id, created_date, updated_date) values (5, 'Sunmark Pain Reliever', 1, '2022-03-09 21:59:23', '2022-02-20 11:00:16');
insert into shelfs (shelf_number, shelf_name, block_id, created_date, updated_date) values (5, 'Rugby Nicotine Polacrilex Gum, Coated Mint Flavor', 14, '2022-07-16 09:33:45', '2022-10-04 18:49:27');