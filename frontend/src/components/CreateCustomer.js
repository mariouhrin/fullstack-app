import React, { useState } from 'react';

import { ModalPopUp } from './Modal';
// import { Form } from './Form';

export function CreateCustomer({ handleAppState }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

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
        crudAction="create"
      />
    </>
  );
}
