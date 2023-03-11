export const CREATEBLOCK =
  'INSERT INTO blocks (block_number, block_name, library_id, created_date, updated_date) VALUES($1, $2, $3, $4, $5)'

export const GETMANYBLOCKS = 'SELECT * FROM blocks ORDER BY block_number ASC'

export const GETMANYBLOCKS_LIBRARYID =
  'SELECT blocks.id, block_number, block_name FROM blocks WHERE library_id =($1) ORDER BY block_number ASC'

export const GETONEBLOCK = 'SELECT * FROM blocks WHERE id=($1)'

export const UPDATEBLOCK =
  'UPDATE blocks SET block_number=($2), block_name=($3), library_id=($4), updated_date=($5) WHERE id=($1)'

// export const DELETEBLOCK = 'DELETE FROM blocks WHERE id=($1)'

export const CHECKIFBLOCKINTHISLIBRARY =
  'SELECT blocks.id FROM blocks WHERE block_number=($1) AND library_id=($2)'
