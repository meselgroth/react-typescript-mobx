import React from 'react';
import '../App.css';
import { observer } from "mobx-react"
import Store from '../Store';

type propsType = {
  store: Store;
};

const AppFunction = (store: Store) =>
  <div className="App">
    <h1>Function Alternate</h1>
    {store.armyCount}
  </div>;

export default observer((props: propsType) => AppFunction(props.store));
