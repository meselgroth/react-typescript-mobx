import React, { ReactNodeArray } from 'react';
import './App.css';
import { observer } from "mobx-react";
import Store from './Store';
import EnhancedTable from './MaterialTable';


const Cells = () =>
  <>
    <td>A</td>
    <td>A</td>
  </>

const Row = () =>
  <tr>
    <Cells />
  </tr>

type TableProps = {
  children: ReactNodeArray
};

const Table = ({children}: TableProps) =>
  <table>
    <thead>
      <tr>
        <td>Header</td>
        <td>Header</td>
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </table>

const App = observer(({ store }: { store: Store }) =>
  <div className="App">
    <Table >
      <Row/>
      <Row/>
    </Table>
    <EnhancedTable/>
  </div>
);

export default App;
