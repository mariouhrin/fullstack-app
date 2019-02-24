import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';

import { axiosHandler } from '../utils/utils';
import { columnsToShow, customFilter } from './helpers';
import { ModalPopUp } from './Modal';

export function TableAllCustomers() {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const fetchAllData = async () => {
    const response = await axiosHandler('get', 'api/customers');
    setData(response.data);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <>
      <section style={{ width: '85%', margin: 'auto', fontSize: '8px', textAlign: 'center' }}>
        {data.length && (
          <ReactTable
            data={data}
            columns={columnsToShow(true, handleOpenModal)}
            filterable
            defaultFilterMethod={customFilter}
            defaultPageSize={7}
            defaultSorted={[
              {
                id: 'balance',
                desc: false
              }
            ]}
            className="-striped -highlight"
          />
        )}
        <ModalPopUp isOpen={openModal} onRequestClose={handleCloseModal} />
      </section>
    </>
  );
}
