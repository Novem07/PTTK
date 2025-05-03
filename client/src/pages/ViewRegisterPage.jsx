import React, { useEffect, useState } from 'react';
import './ViewRegisterPage.css';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

function ViewRegisterPage() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/phieudangky')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('Lỗi khi gọi API:', err));
  }, []);

  const filteredData = data.filter(row =>
    row.MaPhieuDangKy.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.MaKhachHang.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="register-page">
      <h2>Danh Sách Phiếu Đăng Ký</h2>
      <div className="register-header">
        <input
          type="text"
          placeholder="Tìm kiếm theo Mã PĐK hoặc Mã KH"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="button-group">
          <button className="create-button" onClick={() => navigate('/taophieu')}>
            Tạo phiếu đăng ký mới
          </button>
          <button className="view-exam-button" onClick={() => navigate('/phieuduthi')}>
            Xem danh sách phiếu dự thi
          </button>
          <button className="extend-button" onClick={() => navigate('/giahan')}>
            Gia hạn phiếu dự thi
          </button>
        </div>
      </div>

      <table className="register-table">
        <thead>
          <tr>
            <th>Mã PĐK</th>
            <th>Mã KH</th>
            <th>Mã thanh toán</th>
            <th>Ngày ĐK</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, i) => (
            <tr key={i}>
              <td>{row.MaPhieuDangKy}</td>
              <td>{row.MaKhachHang}</td>
              <td>{row.MaThanhToan || 'Không'}</td>
              <td>
                {row.NgayDangKy
                  ? dayjs(row.NgayDangKy).format('DD/MM/YYYY')
                  : 'Không xác định'}
              </td>
              <td>{row.TrangThaiPhieu}</td>
              <td>
                <button className="icon-button" onClick={() => alert('Xem chi tiết')}>🔍</button>
                <button className="icon-button" onClick={() => alert('Chỉnh sửa')}>✏️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewRegisterPage;
