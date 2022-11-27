// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const path = require('path')
const BASE_PATH = path.join(__dirname, 'src', 'databaseHelpers')
require('dotenv').config()
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://postgres:WoCircleis360!@localhost:5432/peopledatabase',
    migrations: { directory: path.join(BASE_PATH, 'migrations') }

  }

}

// {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: "WoCircleis360!",
//   database: process.env.DB_NAME,
// }
