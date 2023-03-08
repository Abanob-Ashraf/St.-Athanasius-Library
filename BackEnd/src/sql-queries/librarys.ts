export const CREATELIBRARY =
  'INSERT INTO librarys (library_name, created_date, updated_date) VALUES($1, $2, $3)'

export const GETMANYLIBRARYS = 'SELECT * FROM librarys'

export const GETONELIBRARY = 'SELECT * FROM librarys WHERE id=($1)'

export const UPDATELIBRARY =
  'UPDATE librarys SET library_name=($2), updated_date=($3) WHERE id=($1)'

// export const DELETELIBRARY = 'DELETE FROM librarys WHERE id=($1)'
