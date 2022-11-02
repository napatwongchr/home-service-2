import * as pg from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const { Pool } = pg.default;

const pool = new Pool({
    connectionString : `postgres://zhwxqegc:${process.env.PGPASSWORD}@arjuna.db.elephantsql.com/zhwxqegc`
})

export { pool };