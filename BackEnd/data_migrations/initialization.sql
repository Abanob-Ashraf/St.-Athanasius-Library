/* Populate The Users Table */
insert into
    users (
        first_name,
        last_name,
        email,
        password,
        phone_number,
        job,
        admin_flag,
        user_status,
        created_date,
        updated_date
    )
values
    (
        'Abanob',
        'Ashraf',
        'abanobashraf74@gmail.com',
'$2b$10$NdQMZcrQiipT2Re16Jagl.gNW7iU2fx2MZB1UYPvoYpXlC5EyKm3m',
        '01142601607',
        'owner',
        true,
        'AVILABLE',
        '2022-11-01 00:00:00',
        '2022-11-01 00:00:00'
),
(
    'Kerolos',
    'Reda',
    'elfanan2003@gmail.com',
    '$2b$10$IaE21QJ62BUw/5Z7h0dGae5DHsOxum0TcgdotUt7ldJCmToqlIQV2',
    '01282332039',
    'owner',
    true,
    'AVILABLE',
    '2022-11-01 00:00:00',
    '2022-11-01 00:00:00'
)