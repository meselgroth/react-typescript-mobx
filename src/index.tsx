import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomemadeTable from './HomemadeTable';
import reportWebVitals from './reportWebVitals';
import Store from './Store';
import EnhancedTable from './MaterialTable';

const store = new Store();

ReactDOM.render(
  <React.StrictMode>
    <HomemadeTable store={store} />
    <EnhancedTable />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
