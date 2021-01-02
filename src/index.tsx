import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './Store';
import AppAlternate from './ComponentPatterns/AppAlternate';
import AppAlternate2 from './ComponentPatterns/AppAlternate2';
import AppHOC, { AppHOC2, AppHOC3 } from './ComponentPatterns/AppHOC';

const store = new Store();

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
    <AppAlternate store={store} />
    <AppAlternate2 store={store} />
    <AppHOC store={store} />
    <AppHOC2 store={store} />

    {/* Different Store (defined in HOC) */}
    <AppHOC3 /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
