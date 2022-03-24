import React from 'react';
import './App.css';
import Diabetes from './Diabetes';
import Heart from './Heart';
import Gendisease from './Gendisease';
import Pneumonia from './Pneumonia';
import {Route, Link, Routes} from 'react-router-dom';
import Home from './Home';
// import Test from './test';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/diabetes" element={<Diabetes/>} />
        <Route exact path="/pneumonia" element={<Pneumonia/>} />
        <Route exact path="/generaldisease" element={<Gendisease/>} />
        <Route exact path="/heart" element={<Heart/>} />
      </Routes>

      {/* <Diabetes/>
      <Heart/>
      <Gendisease/>
      <Pneumonia/> */}
      {/* <Test/> */}
    </div>
  );
}

export default App;
