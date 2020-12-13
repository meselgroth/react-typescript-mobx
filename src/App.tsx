import React from 'react';
import './App.css';
import { observer } from "mobx-react"
import Store from './Store';



const App = observer(({ store }: { store: Store }) => 
  <div className="App">
    <table>
      <thead>
      <tr>
          <td>A</td>
          <td>A</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A</td>
          <td>A</td>
        </tr>
        <tr>
          <td>A</td>
          <td>A</td>
        </tr>
      </tbody>
    </table>
    {store.armyCount}
  </div>
);

export default App;
