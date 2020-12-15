import React, { ReactNode } from 'react';
import './App.css';
import { observer } from "mobx-react";
import Store, { Entity } from './Store';
import { FancyCell, Table } from './BaseHomemadeTable';


const Cells = observer(({ app }: { app: Entity }) =>
  <>
    <td>{app.id}</td>
    <FancyCell name={app.name} />
    <td>{app.author}</td>
    <td>{app.status}</td>
  </>);

const Row = ({ children }: { children: ReactNode }) =>
  <tr>
    {children}
  </tr>;

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
