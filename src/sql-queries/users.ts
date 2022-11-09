export const createUser =
  'INSERT INTO users (first_name, last_name, email, password, admin_flag, created_date, updated_date) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *'

export const getAllUsers =
  'SELECT id, first_name, last_name, email, created_date, updated_date FROM users'

export const getSingleUserById =
  'SELECT id, first_name, last_name, email, created_date, updated_date FROM users WHERE id=($1);'

export const updateUser =
  'UPDATE users SET first_name=($2), last_name=($3), email=($4), password=($5), admin_flag=($6), updated_date=($7) WHERE id=($1) RETURNING id, first_name, last_name, email, updated_date'

export const deleteUser = 'DELETE FROM users WHERE id=($1) RETURNING id, first_name, last_name'
