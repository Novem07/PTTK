import React, { useState } from 'react';
import './CreateRegisterPage.css';

function CreateRegisterPage() {
  const [MaKhachHang, setMaKhachHang] = useState('');
  const [MaThanhToan, setMaThanhToan] = useState('');
  const [NgayDangKy, setNgayDangKy] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));
    const NguoiTao = user?.maNV || 'NV001';

    const response = await fetch('http://localhost:5000/api/phieudangky', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        MaKhachHang,
        MaThanhToan,
        NgayDangKy,
        TrangThaiPhieu: 'Chờ phát hành',
        NguoiTao,
      }),
    });

    const result = await response.json();
    alert(result.message || 'Tạo phiếu thất bại');
  };

  return (
    <div className="create-register-page">
      <h2>Tạo Phiếu Đăng Ký Mới</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Mã khách hàng:
          <input type="text" value={MaKhachHang} onChange={e => setMaKhachHang(e.target.value)} required />
        </label>
        <label>
          Mã thanh toán:
          <input type="text" value={MaThanhToan} onChange={e => setMaThanhToan(e.target.value)} />
        </label>
        <label>
          Ngày đăng ký:
          <input type="date" value={NgayDangKy} onChange={e => setNgayDangKy(e.target.value)} required />
        </label>
        <button type="submit">Tạo phiếu</button>
      </form>

      <button className="view-student-button" onClick={() => window.location.href = '/xemthisinh'}>
        Xem danh sách thí sinh
      </button>
    </div>
  );
}

export default CreateRegisterPage;
