import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';

import { axiosHandler } from '../utils/utils';
import { columnsAll, customFilter } from './helpers';
import { ModalPopUp } from './Modal';

export function TableAllCustomers() {
  const [data, setData] = useState([]);
  const [dataForUpdate, setDataForUpdate] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [customerGuid, setCustumerGuid] = useState({ guid: '', action: '' });

  const fetchAllData = async () => {
    const response = await axiosHandler('get', 'api/customers');
    setData(response.data);
  };

  const customerGuidToDelete = (guidWithAction) => {
    setCustumerGuid(guidWithAction);
  };

  const deleteCustomerByGuid = async () => {
    const { guid } = customerGuid;
    await axiosHandler('delete', `api/customers/${guid}`);
  };

  const handleOpenModal = (guidWithAction) => {
    const { guid } = guidWithAction;
    setDataForUpdate(data.filter((record) => record.guid === guid));
    setOpenModal(true);
    setCustumerGuid(guidWithAction);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  useEffect(() => {
    if (customerGuid.action === 'delete') {
      deleteCustomerByGuid();
    }
  }, [customerGuid]);

  return (
    <>
      <h3 style={{ marginLeft: '7.5%', marginTop: '50px' }}>List of all customers</h3>
      <section style={{ width: '85%', margin: 'auto', fontSize: '14px', textAlign: 'center' }}>
        {data.length && (
          <ReactTable
            data={data}
            columns={columnsAll(handleOpenModal, customerGuidToDelete)}
            filterable
            defaultFilterMethod={customFilter}
            defaultPageSize={8}
            defaultSorted={[
              {
                id: 'balance',
                desc: false
              }
            ]}
            className="-striped -highlight"
          />
        )}
        <ModalPopUp
          isOpen={openModal}
          onRequestClose={handleCloseModal}
          dataForUpdate={dataForUpdate}
        />
      </section>
    </>
  );
}
