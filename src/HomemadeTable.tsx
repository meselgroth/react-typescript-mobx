import React, { ReactNode, ReactNodeArray } from 'react';
import './App.css';
import { observer } from "mobx-react";
import Store, { Entity } from './Store';


const Cells = ({ app }: { app: Entity }) =>
  <>
    <td>{app.id}</td>
    <td>{app.name}</td>
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

const HomemadeTable = observer(({ store }: { store: Store }) => {
  const rows = store.apps.map(app =>
    <Row>
      <Cells app={app} />
    </Row>
  );
  return <div className="App">
    <div>{store.appsCount}</div>
    <Table>
      {rows}
    </Table>
  </div>;
});

export default HomemadeTable;
