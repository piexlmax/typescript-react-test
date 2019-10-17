import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './hello';
import './index.css';

ReactDOM.render(
  <Hello name="jj"/>,
  document.getElementById('root') as HTMLElement
);
