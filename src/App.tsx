import React from 'react';
import './App.css';
import { observer } from "mobx-react"
import Store from './Store';

const App = observer(({ store }: { store: Store }) => 
  <div className="App">
    <h1>JS Starcraft Bot</h1>
    {store.armyCount}
  </div>
);

export default App;
