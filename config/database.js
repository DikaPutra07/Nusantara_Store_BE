require('dotenv').config()

const db_name = process.env.DB_NAME
const db_user = process.env.DB_USER
const db_pass = process.env.DB_PASSWORD
const db_host = process.env.DB_HOST
const db_port = process.env.DB_PORT

module.exports = {
  "development": {
    "username": db_user,
    "password": db_pass,
    "database": db_name,
    "host": db_host,
    "dialect": "mysql",
    "port": db_port
  },
  "test": {
    "username": db_user,
    "password": db_pass,
    "database": db_name,
    "host": db_host,
    "dialect": "mysql",
    "port": db_port
  },
  "production": {
    "username": db_user,
    "password": db_pass,
    "database": db_name,
    "host": db_host,
    "dialect": "mysql",
    "port": db_port
  }
}
