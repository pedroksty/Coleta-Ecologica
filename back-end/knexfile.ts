import path from 'path'

module.exports = {
  client: 'pg',
  connection: {
    host: '192.168.1.2',
    port: 5432,
    user: 'postgres',
    password: 'docker',
    database: 'week'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  },
  useNullAsDefault: true
}
