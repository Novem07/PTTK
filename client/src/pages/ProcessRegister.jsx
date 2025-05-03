import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProcessRegister.css';

const ProcessRegister = () => {
  const { maPDK } = useParams();
  console.log('🆔 Đã nhận maPDK từ URL:', maPDK);
  const navigate = useNavigate();
  const [phieu, setPhieu] = useState(null);
  const [khachHang, setKhachHang] = useState(null);
  const [maThanhToan, setMaThanhToan] = useState('');
  const [daThanhToan, setDaThanhToan] = useState(false);
  const [isDonVi, setIsDonVi] = useState(false);


  useEffect(() => {
    // Lấy phiếu đăng ký
    fetch(`http://localhost:5000/api/payments/phieu/${maPDK}`)
      .then((res) => res.json())
      .then((data) => {
        setPhieu(data);
        setMaThanhToan(data.MaTT || '');
        // Lấy thông tin khách hàng từ Mã KH
        return fetch(`http://localhost:5000/api/khachhang/${data.MaKhachHang}`);
      })
      .then((res) => res.json())
      .then((kh) => {
        setKhachHang(kh);
        setIsDonVi(kh.DonVi && kh.DonVi !== 'Không');
      })
      .catch((err) => console.error('❌ Lỗi:', err));
  }, [maPDK]);

  const handleTiepTuc = () => {
    if (isDonVi && !daThanhToan) {
      // Trường hợp đơn vị chưa tick thanh toán → quay về và chuyển nút thành cập nhật
      navigate('/ketoan');
      return;
    }

    if (!isDonVi && !daThanhToan) {
      return;
    }

    alert('✅ Phiếu đã được xử lý!');
    // TODO: Cập nhật trạng thái phiếu thành "Chờ phát hành"
    navigate('/ketoan');
  };

  const handleHuyPhieu = () => {
    alert('❌ Đã hủy phiếu!');
    navigate('/ketoan');
  };

  if (!phieu || !khachHang) return <div>Đang tải dữ liệu...</div>;

  return (
    <div className="page-wrapper">
      <nav className="navbar">
        <div className="logo">ACCI</div>
        <div className="nav-links">
          <span className="disabled">Đăng ký thi</span>
          <span className="active">Thanh toán</span>
          <span className="disabled">Gia hạn thi</span>
          <span className="disabled">Tra cứu</span>
        </div>
        <div className="nav-search-user">
          <input type="text" placeholder="Tìm kiếm" />
          <span className="user-icon">👤 Nguyễn Văn A</span>
          <span className="logout-icon">↩</span>
        </div>
      </nav>

      <div className="invoice-wrapper">
        <div className="invoice">
          <h1 className="center">ACCI</h1>
          <h2 className="center">Hóa Đơn Đăng Ký</h2>
          <p>Mã hóa đơn: HĐĐK{phieu.MaPDK.slice(-3)}</p>
          <p>Mã phiếu đăng ký: {phieu.MaPDK}</p>
          <p>Họ tên khách hàng: {khachHang.HoTen}</p>
          <p>Số điện thoại: {khachHang.SDT}</p>
          <p>Tổng: 300000 VND</p>
          <p>Trợ giá: 0</p>
          <hr />
          <p>Tổng tiền: 300000 VND</p>
          <p>Phương thức thanh toán: Tiền mặt</p>
          <p>Ngày lập hóa đơn: 21/04/2025</p>
          <p>Người tạo: Nguyễn Văn A</p>
        </div>

        <div className="payment-actions">
          <label>
            Mã thanh toán:{' '}
            <input
              value={maThanhToan}
              onChange={(e) => setMaThanhToan(e.target.value)}
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={daThanhToan}
              onChange={() => setDaThanhToan(!daThanhToan)}
            />
            {' '}Đã thanh toán
          </label>

          <div className="button-group">
            <button className="btn cancel" onClick={handleHuyPhieu}>
              Hủy phiếu
            </button>
            {(isDonVi || daThanhToan) && (
              <button className="btn confirm" onClick={handleTiepTuc}>
                Tiếp tục
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessRegister;
