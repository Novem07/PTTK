// src/components/LogoutModal.jsx
import React from 'react';
import './LogoutModal.css';

function LogoutModal({ onConfirm, onCancel }) {
  return (
    <div className="logout-overlay">
      <div className="logout-modal">
        <div className="modal-header">
          <span>Đăng xuất</span>
          <button className="close-button" onClick={onCancel}>×</button>
        </div>
        <div className="modal-body">
          <p>Tiếp tục đăng xuất?</p>
          <div className="modal-buttons">
            <button className="cancel" onClick={onCancel}>Huỷ</button>
            <button className="confirm" onClick={onConfirm}>Đồng ý</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
