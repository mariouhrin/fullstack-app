import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';

import 'purecss/build/pure.css';
import 'react-table/react-table.css';

import {
  TableAllCustomers,
  TotalBalance,
  TableNotActiveCustomers,
  CreateCustomer
} from '../components';

function Root() {
  const [appInstance, setAppInstance] = useState(0);

  const handleAppState = async () => {
    setAppInstance(appInstance + 1);
  };

  return (
    <section className="root">
      <TotalBalance appInstance={appInstance} />

      <h3 style={{ marginLeft: '7.5%' }}>List of all customers</h3>

      <CreateCustomer handleAppState={handleAppState} />
      <TableAllCustomers handleAppState={handleAppState} appInstance={appInstance} />

      <h3 style={{ marginLeft: '7.5%', marginTop: '35px' }}>List of all inactive customers</h3>

      <TableNotActiveCustomers appInstance={appInstance} />
    </section>
  );
}

setConfig({
  ignoreSFC: true,
  pureRender: true
});

export default hot(Root);
