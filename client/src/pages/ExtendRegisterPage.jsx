import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExtendRegisterPage.css';

function ExtendRegisterPage() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [popup, setPopup] = useState('');
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetch('http://localhost:5000/api/phieuduthi')
      .then(res => res.json())
      .then(data => {
        console.log(' Dữ liệu nhận được:', data);
        setData(data);
      })
      .catch(err => console.error('Lỗi khi tải danh sách:', err));
  }, []);

  const handleExtend = (row) => {
    const { MaPhieuDuThi, NgayThi, GioThi, SoLanGiaHanConLai } = row;

    // Chuyển đổi thời gian thành timestamp
    const examTime = new Date(`${NgayThi}T${GioThi}`);
    const now = new Date();
    const hoursLeft = (examTime - now) / (1000 * 60 * 60);

    console.log(`➡️ Nhấn nút gia hạn: ${MaPhieuDuThi}`, NgayThi, GioThi, SoLanGiaHanConLai);

    if (SoLanGiaHanConLai === 0) {
      setPopup('Đã hết số lần gia hạn!');
    } else if (isNaN(hoursLeft) || hoursLeft < 24) {
      setPopup('Đã quá thời gian gia hạn!');
    } else {
      navigate(`/giahan/create/${MaPhieuDuThi}`);
    }
  };

  const closePopup = () => setPopup('');

  const filteredData = data.filter(item =>
    item.MaThiSinh.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="extend-wrapper">
      <nav className="navbar">
        <div className="logo">ACCI</div>
        <div className="nav-links">
          <span onClick={() => window.location.href = '/create'}>Đăng ký thi</span>
          <span>Thanh toán</span>
          <span className="active">Gia hạn thi</span>
          <span>Tra cứu</span>
        </div>
        <div className="nav-search-user">
          <input type="text" placeholder="Tìm kiếm" />
          <span className="user-icon"> {user?.name}</span>
          <span className="logout-icon" onClick={() => window.location.href = '/login'}>↩</span>
        </div>
      </nav>

      <h2 className="title">Đăng Ký Gia Hạn</h2>

      <div className="table-container">
        <input
          type="text"
          placeholder="Tìm kiếm"
          className="search-input"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <table>
          <thead>
            <tr>
              <th>Mã PDT</th>
              <th>Mã TS</th>
              <th>Chứng chỉ</th>
              <th>Trạng thái phiếu</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td>{row.MaPhieuDuThi}</td>
                <td>{row.MaThiSinh}</td>
                <td>{row.TenChungChi || row.MaChungChi}</td>
                <td>{row.TrangThaiPhieu}</td>
                <td>
                  <button
                    className="btn-extend"
                    onClick={() => handleExtend(row)}
                  >
                    Đăng ký gia hạn
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">&lt; 1 &gt;</div>
      </div>

      {popup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <p>{popup}</p>
            <button onClick={closePopup}>Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExtendRegisterPage;
