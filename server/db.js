// db.js
const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'svcntt@123456',
  server: 'localhost',
  port: 1433,
  database: 'ACCI_DB',
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};


const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('✅ Kết nối SQL Server thành công d');
    return pool;
  })
  .catch(err => {
    console.log('❌ Kết nối thất bại d:', err);
  });

module.exports = {
  sql,
  poolPromise,
};
