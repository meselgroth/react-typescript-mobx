import React from 'react';
import '../App.css';
import { observer } from "mobx-react"
import Store from '../Store';

type propsType = {
  store: Store;
};

const AppFunction = (store: Store) =>
  <div className="App">
    <h1>HOC Function Alternate</h1>
    {store.armyCount}
  </div>;

function withStyle(store: Store) {
  store.style = 'dark';
  return function (JsxFunction: (store: Store) => JSX.Element) {
    return JsxFunction(store);
  };
}

export const AppHOC2 = observer((props: propsType) => withStyle(props.store)(AppFunction));



const AppComponent = ({ store }: propsType) =>
  <div className="App">
    <h1>HOC Component Alternate</h1>
    {store.armyCount}
  </div>;

function withStyle2(store: Store) {
  store.style = 'dark';
  return function (Component: (props: propsType) => JSX.Element) {
    return <Component store={store} />;
  };
}

// [Doesn't Update] mobx doesn't know which field to observe
export default observer((props: propsType) => withStyle2(props.store)(AppComponent));



function withData(store: Store) {
  return function (Component: any) {
    return function () {
      return <Component store={store} />;
    };
  }
}

const store = new Store();
// [Doesn't Update] mobx doesn't know which field to observe
export const AppHOC3 = observer(withData(store)(AppComponent));