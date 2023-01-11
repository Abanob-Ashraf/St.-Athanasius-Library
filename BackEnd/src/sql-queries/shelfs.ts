export const CREATESHELF =
  'INSERT INTO shelfs (shelf_number, shelf_name, block_id, created_date, updated_date) VALUES($1, $2, $3, $4, $5)'

export const GETMANYSHELFS = 'SELECT * FROM shelfs'

export const GETMANYSHELFS_BLOCKSID =
  'SELECT shelfs.id, shelf_number, shelf_name FROM shelfs WHERE block_id =($1)'

export const GETONESHELF = 'SELECT * FROM shelfs WHERE id=($1)'

export const UPDATESHELF =
  'UPDATE shelfs SET shelf_number=($2), shelf_name=($3), block_id=($4), updated_date=($5) WHERE id=($1)'

// export const DELETESHELF = 'DELETE FROM shelfs WHERE id=($1)'

export const CHECKIFSHELFINTHISBLOCK =
  'SELECT shelfs.id FROM shelfs WHERE shelf_number=($1) AND block_id=($2)'
