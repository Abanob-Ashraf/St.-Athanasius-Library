//create user
export const CREATEUSER =
  'INSERT INTO users (first_name, last_name, email, password, admin_flag, user_status, created_date, updated_date) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id, first_name, last_name, email, admin_flag, user_status, updated_date, created_date'

//getAll Users
export const GETMANYUSERS =
  'SELECT id, first_name, last_name, email, admin_flag, user_status, created_date, updated_date FROM users'

//getOne User
export const GETONEUSER =
  'SELECT id, first_name, last_name, email, admin_flag, user_status, created_date, updated_date FROM users WHERE id=($1)'

//Update User
export const UPDATEUSER =
  'UPDATE users SET first_name=($2), last_name=($3), email=($4), password=($5), admin_flag=($6), user_status=($7), updated_date=($8) WHERE id=($1) RETURNING id, first_name, last_name, email, admin_flag, updated_date, created_date'

//Delete User
export const SELECTSTATUS = 'SELECT user_status FROM users WHERE id=($1)'

export const DROPFKEY = 'ALTER TABLE Books DROP CONSTRAINT books_user_id_fkey'

export const DELETEUSER =
  'UPDATE users SET user_status=($2), updated_date=($3) WHERE id=($1) RETURNING *'

export const UPDATEBOOKAFTERDELETEUSER =
  'UPDATE books SET user_id=NULL, old_user=($1) WHERE user_id=($1)'

export const ADDFKEYCURRENTUSER =
  'ALTER TABLE Books ADD CONSTRAINT books_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id)'

//Sign in
export const AUTHANTICATE = 'SELECT password FROM users WHERE email=($1)'

export const AUTHANTICATE2 =
  'SELECT id, first_name, last_name, email, admin_flag FROM users WHERE email=($1)'

//getAll Deleted Users
export const GETALLDELETEDUSERS = `SELECT * FROM users WHERE user_status = 'NOT AVILABLE'`
