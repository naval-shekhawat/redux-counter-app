import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Counter from "./component/Counter.component"

function App() {
  return (
    <div className="App">
      <h2>Counter App</h2>
      <Counter />
    </div>
  );
}

export default App;
