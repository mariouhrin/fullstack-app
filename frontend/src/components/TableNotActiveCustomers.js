import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';

import { axiosHandler } from '../utils/utils';
import { columnsToShow, customFilter } from './helpers';

export function TableNotActiveCustomers() {
  const [data, setData] = useState([]);

  const fetchInactiveCustomers = async () => {
    const response = await axiosHandler('get', 'api/customers/inactive');
    setData(response.data);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  console.log(data);

  return (
    <>
      <section style={{ width: '85%', margin: 'auto', fontSize: '8px', textAlign: 'center' }}>
        {data.length && (
          <ReactTable
            data={data}
            columns={columnsToShow()}
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
      </section>
    </>
  );
}
