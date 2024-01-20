import pkg from 'pg'
const { Pool } = pkg
import dbConfig from './db-config.js'

const pool = new Pool(dbConfig)

export default {
  query: (text, params) => pool.query(text, params)
}
