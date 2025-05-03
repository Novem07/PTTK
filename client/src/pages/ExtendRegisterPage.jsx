// 📁 client/src/pages/ExtendRegisterPage.jsx
import React, { useEffect, useState } from 'react';
import './ExtendRegisterPage.css';
import { useNavigate } from 'react-router-dom';

function ExtendRegisterPage() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/phieuduthi') // API lấy danh sách phiếu dự thi
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('Lỗi khi load phiếu dự thi:', err));
  }, []);

  const handleGiaHan = (pdt, soLanConLai) => {
    if (soLanConLai <= 0) {
      alert('Đã hết số lần gia hạn!');
    } else {
      navigate(`/giahan/${pdt}`);
    }
  };

  return (
    <div className="extend-page">
      <h2>Gia Hạn Phiếu Dự Thi</h2>
      <table className="extend-table">
        <thead>
          <tr>
            <th>Mã PDT</th>
            <th>Mã TS</th>
            <th>Chứng chỉ</th>
            <th>Trạng thái phiếu</th>
            <th>Số lần còn lại</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.MaPhieuDuThi}</td>
              <td>{row.MaThiSinh}</td>
              <td>{row.TenChungChi}</td>
              <td>{row.TrangThaiPhieu}</td>
              <td>{row.SoLanGiaHanConLai}</td>
              <td>
                <button onClick={() => handleGiaHan(row.MaPhieuDuThi, row.SoLanGiaHanConLai)}>
                  Đăng ký gia hạn
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExtendRegisterPage;
