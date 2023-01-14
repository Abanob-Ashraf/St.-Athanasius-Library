//create user
export const CREATEUSER =
  'INSERT INTO users (first_name, last_name, email, password, phone_number, job, admin_flag, user_status, created_date, updated_date) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'

//getAll Users
export const GETMANYUSERS =
  'SELECT id, first_name, last_name, email, phone_number, job, admin_flag, user_status, created_date, updated_date FROM users'

//getOne User
export const GETONEUSER =
  'SELECT id, first_name, last_name, email, phone_number, job, admin_flag, user_status, created_date, updated_date FROM users WHERE id=($1)'

//search for User
export const SEARCHFORUSER =
  'SELECT id, first_name, last_name, email, phone_number, job, admin_flag, user_status, created_date, updated_date FROM users WHERE first_name=($1) AND last_name=($2) OR first_name=($3) OR email=($4) OR job=($5)'

//Update User
export const UPDATEUSER =
  'UPDATE users SET first_name=($2), last_name=($3), email=($4), phone_number=($5), job=($6), admin_flag=($7), user_status=($8), updated_date=($9) WHERE id=($1)'

//Change Password
export const GETPASSWORD = 'SELECT password FROM users WHERE id=($1)'

export const CHANGEPASSWORD = 'UPDATE users SET password=($2), updated_date=($3) WHERE id=($1)'

//Reset Password
export const GETUSERWITHEMAIL = 'SELECT * FROM users WHERE email=($1)'

export const RESETPASSWORD = 'UPDATE users SET password=($2), updated_date=($3) WHERE email=($1)'

//Delete User
export const SELECTSTATUS = 'SELECT user_status FROM users WHERE id=($1)'

export const DELETEUSER = 'UPDATE users SET user_status=($2), updated_date=($3) WHERE id=($1)'

export const UPDATEBOOKAFTERDELETEUSER =
  'UPDATE books SET currrent_user=($2), old_user=($1) WHERE currrent_user=($1)'

//Sign in
export const AUTHANTICATE = 'SELECT password FROM users WHERE email=($1)'

export const AUTHANTICATE2 =
  'SELECT id, first_name, last_name, email, phone_number, job, admin_flag, user_status FROM users WHERE email=($1)'

//getAll Deleted Users
export const GETALLUNAVILABLEUSERS = `SELECT * FROM users WHERE user_status = 'NOT AVILABLE'`
