// server/routes/auth.js
const express = require('express');
const router = express.Router();
const { poolPromise, sql } = require('../db');

// Hàm trích mã nhân viên từ email
const extractMaNV = (email) => {
  if (!email.endsWith('@acci.vn')) return null;
  return email.split('@')[0]; // ví dụ: KT001
};

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const pool = await poolPromise;

    const queries = [
      { table: 'NVKeToan', role: 'Kế toán', colMa: 'MaNVKeToan' },
      { table: 'NVTiepNhan', role: 'Tiếp nhận', colMa: 'MaNVTiepNhan' },
      { table: 'NVNhapLieu', role: 'Nhập liệu', colMa: 'MaNVNhapLieu' },
      { table: 'NVToChucThi', role: 'Tổ chức thi', colMa: 'MaNVToChucThi' }
    ];

    for (let q of queries) {
      const result = await pool
        .request()
        .input('email', sql.VarChar, email)
        .input('ma', sql.VarChar, password) // password giờ là mã nhân viên
        .query(`SELECT * FROM ${q.table} WHERE Email = @email AND ${q.colMa} = @ma`);

      if (result.recordset.length > 0) {
        return res.json({
          user: {
            name: result.recordset[0].HoTen,
            role: q.role,
            maNV: result.recordset[0][q.colMa],
            email: result.recordset[0].Email
          }
        });
      }
    }

    return res.status(401).json({ message: 'Sai tài khoản hoặc mật khẩu' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Lỗi server');
  }
});

module.exports = router;
