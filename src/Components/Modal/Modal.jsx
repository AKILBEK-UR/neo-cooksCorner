// Modal.jsx
import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.modalContent}>
          <h2>Modal Title</h2>
          <p>This is the content of the modal window.</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
