import React from 'react';
import ReactDOM from 'react-dom';
import IndexTest from './IndexTest';

it('React unit Test Demo', () => {
  const root = document.createElement('root');
  ReactDOM.render(<IndexTest />, root);
  ReactDOM.unmountComponentAtNode(root);
});