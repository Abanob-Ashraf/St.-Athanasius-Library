/* Populate The Users Table */
insert into users (
        first_name,
        last_name,
        full_name,
        email,
        password,
        phone_number,
        job,
        admin_flag,
        user_status,
        created_date,
        updated_date
    )
values (
        'Abanob',
        'Ashraf',
        'Abanob Ashraf',
        'abanobashraf74@gmail.com',
        '$2b$10$Tf7IBGEZcCKUrbQR3kwLQeCG8MtktNYaSB2RNQSIO0UexyRIwj.FS',
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
        'Kerolos Reda',
        'elfanan2003@gmail.com',
        '$2b$10$IaE21QJ62BUw/5Z7h0dGae5DHsOxum0TcgdotUt7ldJCmToqlIQV2',
        '01282332039',
        'owner',
        true,
        'AVILABLE',
        '2022-11-01 00:00:00',
        '2022-11-01 00:00:00'
    ),
    (
        'Abanob',
        'Hanna',
        'Abanob Hanna',
        'abanobashra74@gmail.com',
        '$2b$10$Tf7IBGEZcCKUrbQR3kwLQeCG8MtktNYaSB2RNQSIO0UexyRIwj.FS',
        '01119936520',
        'owner',
        true,
        'AVILABLE',
        '2022-11-01 00:00:00',
        '2022-11-01 00:00:00'
    );