import React from 'react';
import './App.css';
import { observer } from "mobx-react"
import Store from './Store';

const Cells = () =>
  <>
    <td>A</td>
    <td>A</td>
  </>

const Row = () =>
  <tr>
    <Cells />
  </tr>

const Table = () =>
  <table>
    <thead>
      <tr>
        <td>Header</td>
        <td>Header</td>
      </tr>
    </thead>
    <tbody>
      <Row />
      <Row />
    </tbody>
  </table>

const App = observer(({ store }: { store: Store }) =>
  <div className="App">
    <Table />
  </div>
);

export default App;
