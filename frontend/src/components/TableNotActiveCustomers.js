import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';

import { axiosHandler } from '../utils/utils';
import { columnsInactive, customFilter } from './helpers';

export function TableNotActiveCustomers() {
  const [data, setData] = useState([]);

  const fetchInactiveCustomers = async () => {
    const response = await axiosHandler('get', 'api/customers/inactive');
    setData(response.data);
  };

  useEffect(() => {
    fetchInactiveCustomers();
  }, []);

  return (
    <>
      <h3 style={{ marginLeft: '7.5%', marginTop: '50px' }}>List of all inactive customers</h3>
      <section style={{ width: '45%', marginLeft: '7.5%', fontSize: '14px', textAlign: 'center' }}>
        {data.length && (
          <ReactTable
            data={data}
            columns={columnsInactive()}
            filterable
            defaultFilterMethod={customFilter}
            defaultPageSize={5}
            className="-striped -highlight"
          />
        )}
      </section>
    </>
  );
}
