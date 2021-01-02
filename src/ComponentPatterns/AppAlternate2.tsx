import React from 'react';
import '../App.css';
import { observer } from "mobx-react"
import Store from '../Store';

type propsType = {
  store: Store;
};

const AppComponent = ({ store }: propsType) =>
  <div className="App">
    <h1>Component Alternate</h1>
    {store.armyCount}
  </div>;

export default observer((props: propsType) => AppComponent(props));
//export default observer((props: propsType) => <AppComponent store={props.store}/>);
