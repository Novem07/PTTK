// src/pages/RegisterFormPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterFormPage.css';
import SuccessModal from '../components/SuccessModal';
import ConfirmModal from '../components/ConfirmModal';
import WarningModal from '../components/WarningModal';
import LogoutModal from '../components/LogoutModal';
import { useLocation } from 'react-router-dom';



function RegisterFormPage() {
  const [name, setName] = useState('');
  const [cert, setCert] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [customerType, setCustomerType] = useState('');
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const location = useLocation(); // 👈 thêm dòng này nếu chưa có
  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };  

  return (
    <div className="register-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">ACCI<br /><span className="logo-sub">LEARN RIGHT</span></div>
        <ul className="nav">
          <li
            className={isActive('/home') ? 'active' : ''}
            onClick={() => navigate('/home')}
          >
             Trang chủ
          </li>
          <li
            className={isActive('/register') ? 'active' : ''}
            onClick={() => navigate('/register')}
          >
             Lập phiếu đăng ký
          </li>
          <li
            className={isActive('/renew') ? 'active' : ''}
            onClick={() => navigate('/renew')}
          >
             Gia hạn
          </li>
          <li
            className={isActive('/results') ? 'active' : ''}
            onClick={() => navigate('/results')}
          >
             Kết quả & chứng chỉ
          </li>
        </ul>
      </aside>

      {/* Nội dung chính */}
      <main className="main-content">
        <header className="topbar">
          <div className="user-info">
            <span className="username">Nguyễn Văn A</span>
            <span className="role">Nhân viên tiếp nhận</span>
          </div>
          <button className="logout-button" onClick={() => setShowLogout(true)}>
            ⏻ Đăng Xuất
          </button>
        </header>

        <section className="form-section">

          <div className="form-box">
            <h4 className="form-title">Phiếu đăng ký mới</h4>

            <div className="form-group">
              <label>Họ tên khách hàng</label>
              <input
                type="text"
                placeholder="VD: Nguyễn Văn A"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Giới tính */}
            <div className="form-group">
              <label>Giới tính</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Chọn giới tính</option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
                <option value="Khác">Khác</option>
              </select>
            </div>

            {/* Ngày sinh */}
            <div className="form-group">
              <label>Ngày sinh</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
              />
            </div>

            {/* Loại khách hàng */}
            <div className="form-group">
              <label>Loại khách hàng</label>
              <select value={customerType} onChange={(e) => setCustomerType(e.target.value)}>
                <option value="">Chọn loại khách</option>
                <option value="Khách lẻ">Khách lẻ</option>
                <option value="Đơn vị">Đơn vị</option>
              </select>
            </div>


            <div className="form-group">
              <label>Loại chứng chỉ</label>
              <select value={cert} onChange={(e) => setCert(e.target.value)}>
                <option value="">Chọn loại chứng chỉ</option>
                <option value="TOEIC">TOEIC</option>
                <option value="CNTT">CNTT</option>
                <option value="IELTS">IELTS</option>
              </select>
            </div>

            <div className="form-group">
              <label>Lịch thi</label>
              <input
                type="date"
                value={date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="form-actions">
            <button
              className="save-button"
              onClick={() => {
                if (!name || !cert || !date) {
                  setShowWarning(true);
                } else {
                  setShowConfirm(true);
                }
              }}
            >
              Tạo phiếu 
            </button>
            </div>
          </div>
        </section>
      </main>
      
      {showSuccess && (
        <SuccessModal
          message="Phiếu đăng ký đã được tạo thành công!"
          onClose={() => setShowSuccess(false)}
        />
      )}

      {showConfirm && (
        <ConfirmModal
        name={name}
        cert={cert}
        date={date}
        gender={gender}
        dob={dob}
        customerType={customerType}
        onCancel={() => setShowConfirm(false)}
        onConfirm={() => {
          setShowConfirm(false);
          setShowSuccess(true);
          setName('');
          setCert('');
          setDate('');
          setGender('');
          setDob('');
          setCustomerType('');
        }}
      />      
      )}

      {showWarning && (
        <WarningModal
          message="Vui lòng nhập đầy đủ thông tin trước khi lưu!"
          onClose={() => setShowWarning(false)}
        />
      )}

      {showLogout && (
        <LogoutModal
          onConfirm={handleLogout}
          onCancel={() => setShowLogout(false)}
        />
      )}
    </div>
  );
}

export default RegisterFormPage;
