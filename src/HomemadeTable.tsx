import React, { ReactNode, ReactNodeArray } from 'react';
import './App.css';
import { observer } from "mobx-react";
import Store, { Entity } from './Store';


const Cells = observer(({ app }: { app: Entity }) =>
  <>
    <td>{app.id}</td>
    <td>{app.name}</td>
    <td>{app.author}</td>
    <td>{app.status}</td>
  </>);

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
        <td>Id</td>
        <td>Name</td>
        <td>Author</td>
        <td>Status</td>
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </table>

const HomemadeTable = observer(({ store }: { store: Store }) => {
  const rows = store.apps.map(app =>
    <Row key={app.id}>
      <Cells app={app} />
    </Row>
  );



  return <div className="App">
    <div>Num of rows: {store.appsCount}</div>
    <Table>
      {rows}
    </Table>
  </div>;
});

export default HomemadeTable;
