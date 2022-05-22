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
import Footer from './Footer';
import Services from './Services';
import About from './About';

function App() {
  return (
    <div className="App">
      
      <AuthContextProvider>
        <Routes>
          <Route exact path="/" element={<Signin/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/logout" element={<ProtectedRoute><Logout/></ProtectedRoute>} />
          <Route exact path="/account" element={<ProtectedRoute><Nav/><Account/><Footer/></ProtectedRoute>} />
          <Route exact path="/home" element={ <ProtectedRoute><Nav/><Home/><Footer/></ProtectedRoute>} />
          <Route exact path="/diabetes" element={<ProtectedRoute><Nav/><Diabetes/><Footer/></ProtectedRoute>} />
          <Route exact path="/pneumonia" element={<ProtectedRoute><Nav/><Pneumonia/><Footer/></ProtectedRoute>} />
          <Route exact path="/generaldisease" element={<ProtectedRoute><Nav/><Gendisease/><Footer/></ProtectedRoute>} />
          <Route exact path="/heart" element={<ProtectedRoute><Nav/><Heart/><Footer/></ProtectedRoute>} />
          <Route exact path="/kidney" element={<ProtectedRoute><Nav/><Kidney/><Footer/></ProtectedRoute>} />
          <Route exact path="/liver" element={<ProtectedRoute><Nav/><Liver/><Footer/></ProtectedRoute>} />
          <Route exact path="/patient" element={<ProtectedRoute><Nav/><Patient/><Footer/></ProtectedRoute>} />
          <Route exact path="/doctor" element={<ProtectedRoute><Nav/><Doctor/><Footer/></ProtectedRoute>} />
          <Route exact path="/getlocation" element={<ProtectedRoute><Nav/><Test/><Footer/></ProtectedRoute>} />
          <Route exact path="/about" element={<ProtectedRoute><Nav/><About/><Footer/></ProtectedRoute>} />
          <Route exact path="/services" element={<ProtectedRoute><Nav/><Services/><Footer/></ProtectedRoute>} />
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
