// src/components/WarningModal.jsx
import React from 'react';
import './WarningModal.css';

function WarningModal({ message, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="warning-modal">
        <div className="modal-header">
          <span className="modal-title">Thông báo</span>
        </div>
        <div className="modal-body">
          <p>{message}</p>
          <div className="modal-buttons">
            <button className="confirm" onClick={onClose}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarningModal;
