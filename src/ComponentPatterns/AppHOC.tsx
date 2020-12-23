import React from 'react';
import '../App.css';
import { observer } from "mobx-react"
import Store from '../Store';

type propsType = {
  store: Store;
};

const AppComponent = (store: Store) =>
  <div className="App">
    <h1>JS Starcraft Bot Alternate</h1>
    {store.armyCount}
  </div>;

function withStyle(Component: (store: Store) => JSX.Element) {
  return function (store: Store) {
    return Component(store);
  };
}

function withData(store: Store) {
  return function(Component: any) {
    return function () {
      return <Component store={store} />;
    };
  }
}
export default observer((props: propsType) => withStyle(AppComponent)(props.store));
// export default observer((props: propsType) => AppComponent(props.store));