import React, { useState } from 'react';
import './CreateRegisterPage.css';
import { useNavigate } from 'react-router-dom';
import LogoutModal from '../components/LogoutModal';

function CreateRegisterPage() {
  const [MaKhachHang, setMaKhachHang] = useState('');
  const [MaThanhToan, setMaThanhToan] = useState('');
  const [NgayDangKy, setNgayDangKy] = useState('');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));
  const tenNhanVien = user?.name || 'Chưa đăng nhập';
  const NguoiTao = user?.maNV || 'NV001';

  const handleSubmit = async (e) => {
    e.preventDefault();

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

  const handleLogoutConfirm = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <div className="page-wrapper">
      <nav className="navbar">
        <div className="logo">ACCI</div>
        <div className="nav-links">
          <span className="active">Đăng ký thi</span>
          <span className="disabled">Thanh toán</span>
          <span className="clickable" onClick={() => navigate('/giahan')}>Gia hạn thi</span>
          <span className="disabled">Tra cứu</span>
        </div>
        <div className="nav-search-user">
          <input type="text" placeholder="Tìm kiếm" />
          <span className="user-icon">👤 {tenNhanVien}</span>
          <span className="logout-icon" onClick={() => setShowLogoutModal(true)}>↩</span>
        </div>
      </nav>

      <div className="create-register-form">
        <h2>Tạo Phiếu Đăng Ký Mới</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Mã khách hàng:</label>
            <input type="text" value={MaKhachHang} onChange={e => setMaKhachHang(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Mã thanh toán:</label>
            <input type="text" value={MaThanhToan} onChange={e => setMaThanhToan(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Ngày đăng ký:</label>
            <input type="date" value={NgayDangKy} onChange={e => setNgayDangKy(e.target.value)} required />
          </div>
          <div className="button-row">
  <button className="cancel" onClick={() => navigate('/tiepphan')}>
    Hủy
  </button>

  <button className="view-student" onClick={() => navigate('/xemthisinh')}>
    Xem danh sách thí sinh
  </button>

  <button className="add-student" onClick={() => alert('Chức năng thêm thí sinh')}>
    Thêm thí sinh
  </button>

  <button className="submit" onClick={handleSubmit}>
    Tiếp tục
  </button>
</div>

        </form>
      </div>

      {showLogoutModal && (
        <LogoutModal
          onConfirm={handleLogoutConfirm}
          onCancel={() => setShowLogoutModal(false)}
        />
      )}
    </div>
  );
}

export default CreateRegisterPage;
