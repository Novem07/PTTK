import React from 'react';
import './SuccessModal.css';

function SuccessModal({ message, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-body">
          <p>{message}</p>
          <div className="modal-buttons">
            <button className="confirm" onClick={onClose}>Xác nhận</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;
