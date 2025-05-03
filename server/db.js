// server/db.js
const sql = require('mssql');

const config = {
    user: 'phuc',         // ví dụ: 'sa'
    password: '123',          // ví dụ: '123456'
    server: 'LAPTOP-JISSCJN5',               // hoặc 'DESKTOP\\SQLEXPRESS'
    database: 'ACCI_DB1',       // tên database mà bé đã tạo
    options: {
      encrypt: false, // dùng true nếu dùng Azure
      enableArithAbort: true,
      trustServerCertificate: true,
    },
  };

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('✅ Kết nối SQL Server thành công');
    return pool;
  })
  .catch(err => console.log('❌ Kết nối thất bại:', err));

module.exports = {
  sql, poolPromise
};
