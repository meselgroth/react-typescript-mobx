import React from 'react';
import './App.css';
import { observer } from "mobx-react";
import Store, { Entity } from './Store';
import { FancyCell, Row, Table } from './BaseHomemadeTable';


const Cells = observer(({ app }: { app: Entity }) =>
  <>
    <FancyCell value={app.id} />
    <FancyCell value={app.name} />
    <FancyCell value={app.author} />
    <FancyCell value={app.status} />
  </>);

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
