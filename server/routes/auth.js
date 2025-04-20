// server/routes/auth.js
const express = require('express');
const router = express.Router();
const { poolPromise, sql } = require('../db');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const pool = await poolPromise;

    const result = await pool
      .request()
      .input('email', sql.VarChar, email)
      .input('password', sql.VarChar, password)
      .query('SELECT * FROM NhanVien WHERE Email = @email AND MatKhau = @password');

    if (result.recordset.length > 0) {
      const nv = result.recordset[0];
      return res.json({
        user: {
          name: nv.HoTen,
          role: nv.VaiTro,
          maNV: nv.MaNhanVien,
          email: nv.Email
        }
      });
    }

    return res.status(401).json({ message: 'Sai tài khoản hoặc mật khẩu' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Lỗi server');
  }
});

module.exports = router;
