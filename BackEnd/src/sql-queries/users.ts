//create user
export const createUser =
  'INSERT INTO users (first_name, last_name, email, password, admin_flag, created_date, updated_date) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id, first_name, last_name, email, admin_flag, updated_date, created_date'

//getAll Users
export const getAllUsers =
  'SELECT id, first_name, last_name, email, admin_flag, created_date, updated_date FROM users'

//getOne User
export const getSingleUserById =
  'SELECT id, first_name, last_name, email, admin_flag, created_date, updated_date FROM users WHERE id=($1)'

//Update User
export const updateUser =
  'UPDATE users SET first_name=($2), last_name=($3), email=($4), password=($5), admin_flag=($6), updated_date=($7) WHERE id=($1) RETURNING id, first_name, last_name, email, admin_flag, updated_date, created_date'

//Delete User
export const insertuserDataToDeletedUser =
  'INSERT INTO deleted_users SELECT * FROM users WHERE id=($1)'

export const dropFkey = 'ALTER TABLE Books DROP CONSTRAINT books_user_id_fkey'

export const deleteUser =
  'DELETE FROM users WHERE id=($1) RETURNING id, first_name, last_name, email, created_date'

export const updateBookAfterDeleteUser =
  'UPDATE books SET user_id=NULL, old_user_id=($1) WHERE user_id=($1)'

export const addFkeyCurrentUser =
  'ALTER TABLE Books ADD CONSTRAINT books_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id)'

//Sign in
export const authenticateQ = 'SELECT password FROM users WHERE email=($1)'

export const authenticateQ2 =
  'SELECT id, first_name, last_name, email, admin_flag FROM users WHERE email=($1)'
