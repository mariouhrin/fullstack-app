import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';

import { axiosHandler } from '../utils/utils';
import { columnsAll, customFilter, hideTablesScrollbar } from './helpers';
import { ModalPopUp } from './Modal';

export function TableAllCustomers({ handleAppState, appInstance, notify }) {
  const [data, setData] = useState([]);
  const [dataForUpdate, setDataForUpdate] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (guid) => {
    setDataForUpdate(data.filter((record) => record.guid === guid));
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const deleteCustomerByGuid = async (guid) => {
    await axiosHandler('delete', `api/customers/${guid}`);
    await handleAppState();
  };

  const fetchAllData = async () => {
    const response = await axiosHandler('get', 'api/customers');
    setData(response.data);
  };

  useEffect(() => {
    fetchAllData();
  }, [appInstance]);

  useEffect(() => {
    hideTablesScrollbar(openModal);
  }, [openModal]);

  return (
    <>
      <section style={{ width: '85%', margin: 'auto', fontSize: '14px', textAlign: 'center' }}>
        {data.length && (
          <ReactTable
            data={data}
            columns={columnsAll(handleOpenModal, deleteCustomerByGuid)}
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
        <ModalPopUp
          isOpen={openModal}
          onRequestClose={handleCloseModal}
          dataForUpdate={dataForUpdate}
          handleAppState={handleAppState}
          notify={notify}
          crudAction="update"
        />
      </section>
    </>
  );
}
