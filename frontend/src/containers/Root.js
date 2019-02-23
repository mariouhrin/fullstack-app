import React from 'react';
import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';
import 'purecss/build/pure.css';

const Root = () => (
  <article className="root">
    <h1>Hello world</h1>
  </article>
);

setConfig({
  ignoreSFC: true,
  pureRender: true
});

export default hot(Root);
