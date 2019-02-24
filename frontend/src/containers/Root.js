import React from 'react';
import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';
import { TableAllCustomers, TotalBalance } from '../components';

import 'purecss/build/pure.css';
import 'react-table/react-table.css';

const Root = () => (
  <section className="root">
    <TotalBalance />
    <TableAllCustomers />
  </section>
);

setConfig({
  ignoreSFC: true,
  pureRender: true
});

export default hot(Root);
