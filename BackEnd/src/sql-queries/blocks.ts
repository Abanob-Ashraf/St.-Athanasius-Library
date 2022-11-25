export const CREATEBLOCK =
  'INSERT INTO blocks (block_number, block_name, created_date, updated_date) VALUES($1, $2, $3, $4) RETURNING *'

export const GETMANYBLOCKS = 'SELECT * FROM blocks'

export const GETONEBLOCK = 'SELECT * FROM blocks WHERE id=($1);'

export const UPDATEBLOCK =
  'UPDATE blocks SET block_number=($2), block_name=($3), updated_date=($4) WHERE id=($1) RETURNING *'

export const DELETEBLOCK = 'DELETE FROM blocks WHERE id=($1) RETURNING *'
