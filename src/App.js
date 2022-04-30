import React from 'react';
import './App.css';
import Diabetes from './Diabetes';
import Heart from './Heart';
import Gendisease from './Gendisease';
import Pneumonia from './Pneumonia';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Kidney from './Kidney';
import Liver from './Liver';
import Nav from './Nav'
import Patient from './Patient'
import Doctor from './Doctor'
import Test from './test';
import Signin from './Signin';
import Signup from './Signup';
import Account from './Account';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import Logout from './Logout';

function App() {
  return (
    <div className="App">
      
      <AuthContextProvider>
        <Routes>
          <Route exact path="/" element={<Signin/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/account" element={<ProtectedRoute><Nav/><Account/></ProtectedRoute>} />
          <Route exact path="/home" element={ <ProtectedRoute><Nav/><Home/></ProtectedRoute>} />
          <Route exact path="/diabetes" element={<ProtectedRoute><Nav/><Diabetes/></ProtectedRoute>} />
          <Route exact path="/pneumonia" element={<ProtectedRoute><Nav/><Pneumonia/></ProtectedRoute>} />
          <Route exact path="/generaldisease" element={<ProtectedRoute><Nav/><Gendisease/></ProtectedRoute>} />
          <Route exact path="/heart" element={<ProtectedRoute><Nav/><Heart/></ProtectedRoute>} />
          <Route exact path="/kidney" element={<ProtectedRoute><Nav/><Kidney/></ProtectedRoute>} />
          <Route exact path="/liver" element={<ProtectedRoute><Nav/><Liver/></ProtectedRoute>} />
          <Route exact path="/patient" element={<ProtectedRoute><Nav/><Patient/></ProtectedRoute>} />
          <Route exact path="/doctor" element={<ProtectedRoute><Nav/><Doctor/></ProtectedRoute>} />
          <Route exact path="/getlocation" element={<ProtectedRoute><Nav/><Test/></ProtectedRoute>} />
          <Route exact path="/logout" element={<ProtectedRoute><Logout/></ProtectedRoute>} />
          
          
        </Routes>
      </AuthContextProvider>

      {/* <Diabetes/>
      <Heart/>
      <Gendisease/>
      <Pneumonia/> */}
      {/* <Test/> */}
    </div>
  );
}

export default App;
