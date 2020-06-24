import knex from 'knex'

const connection = knex({
  client: 'pg',
  connection: {
    host: '192.168.1.2',
    port: 5432,
    user: 'postgres',
    password: 'docker',
    database: 'week'
  }
})

export default connection
