// import React, { useState } from 'react';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';
import { TableAllCustomers, TotalBalance, TableNotActiveCustomers, Form } from '../components';

import 'purecss/build/pure.css';
import 'react-table/react-table.css';

const Root = () => {
  // const [instance, setInstance] = useState(0);

  return (
    <section className="root">
      <Form />
      <TotalBalance />
      <TableAllCustomers />
      <TableNotActiveCustomers />
    </section>
  );
};

setConfig({
  ignoreSFC: true,
  pureRender: true
});

export default hot(Root);
