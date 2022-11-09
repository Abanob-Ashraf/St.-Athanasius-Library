export const createUser =
  'INSERT INTO users (first_name, last_name, email, password, created_date, updated_date, admin_flag) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id, first_name, last_name, email'

export const getAllUsers = 'SELECT id, first_name, last_name, email FROM users'

export const getSingleUserById = 'SELECT id, first_name, last_name, email FROM users WHERE id=($1);'

export const updateUser =
  'UPDATE users SET first_name=($2), last_name=($3), email=($4), password=($5), updated_date=($6), admin_flag=($7)  WHERE id=($1) RETURNING id, first_name, last_name, email'

export const deleteUser = 'DELETE FROM users WHERE id=($1) RETURNING id, first_name, last_name'
