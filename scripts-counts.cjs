const { Client } = require('pg')
const fs = require('fs')
const connectionString = fs.readFileSync('.env','utf8').split(/\r?\n/).find(l => l.startsWith('DATABASE_URL='))?.slice('DATABASE_URL='.length)
async function counts() {
  const client = new Client({ connectionString, connectionTimeoutMillis: 15000 })
  await client.connect()
  try {
    const tableCount = await client.query("select count(*)::int as count from information_schema.tables where table_schema = 'public'")
    const migrationCount = await client.query("select count(*)::int as count from mikro_orm_migrations")
    console.log(JSON.stringify({ time: new Date().toISOString(), tableCount: tableCount.rows[0].count, migrationRows: migrationCount.rows[0].count }))
  } finally {
    await client.end().catch(() => {})
  }
}
counts().catch((err) => { console.error(JSON.stringify({ time: new Date().toISOString(), error: err.message, code: err.code })); process.exitCode = 1 })
