import React, { ReactNode, ReactNodeArray } from 'react';
import './App.css';
import { observer } from "mobx-react";
import Store from './Store';
import EnhancedTable from './MaterialTable';


const Cells = () =>
  <>
    <td>A</td>
    <td>A</td>
  </>

const Row = ({ children }: { children: ReactNode }) =>
  <tr>
    {children}
  </tr>

type TableProps = {
  children: ReactNodeArray
};

const Table = ({ children }: TableProps) =>
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

const App = observer(({ store }: { store: Store }) => {
  const rows = store.apps.map(app =>
    <Row>
      <Cells />
    </Row>
  );
  return <div className="App">
    <div>{store.appsCount}</div>
    <Table>
      {rows}
    </Table>
    <EnhancedTable />
  </div>;
});

export default App;
