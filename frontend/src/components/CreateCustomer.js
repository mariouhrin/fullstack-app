import React, { useState, useEffect } from 'react';

import { ModalPopUp } from './Modal';
import { hideTablesScrollbar } from './helpers';

export function CreateCustomer({ handleAppState, notify }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    hideTablesScrollbar(openModal);
  }, [openModal]);

  return (
    <>
      <button
        type="button"
        className="button-custom-secondary pure-button"
        onClick={handleOpenModal}
      >
        Create Customer
      </button>
      <ModalPopUp
        isOpen={openModal}
        onRequestClose={handleCloseModal}
        dataForUpdate={[]}
        handleAppState={handleAppState}
        notify={notify}
        crudAction="create"
      />
    </>
  );
}
