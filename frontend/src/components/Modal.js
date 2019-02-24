import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

export function ModalPopUp({ isOpen, onRequestClose }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <button type="button" className="pure-button" onClick={onRequestClose}>
        Close
      </button>
    </Modal>
  );
}
