// src/components/WrongPasswordModal.jsx
import React from 'react';
import './WrongPasswordModal.css';

function WrongPasswordModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="wrong-modal">
        <div className="modal-header">Sai tài khoản hoặc mật khẩu</div>
        <div className="modal-body">
          <p>Vui lòng kiểm tra lại thông tin đăng nhập.</p>
          <button className="confirm" onClick={onClose}>OK</button>
        </div>
      </div>
    </div>
  );
}

export default WrongPasswordModal;
