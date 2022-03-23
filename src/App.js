import React from 'react';
import './App.css';
import Diabetes from './Diabetes';
import Heart from './Heart';

function App() {
  return (
    <div className="App">
      {/* <Test sympton1='cough' sympton2='high_fever' sympton3='None' sympton4='None' sympton5='None' /> */}
      <Diabetes/>
      <Heart/>
    </div>
  );
}

export default App;
