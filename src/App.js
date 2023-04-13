import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/HomePage/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import DashBoard from './Components/DashBoard/DashBoard';
import MyProfile from './Components/MyProfile/MyProfile';

function App() {
  return (
     <div className='App' >
       <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/login' element ={<Login />} /> 
            <Route path="/register" element = {<Register />} />
            <Route path="/dashBoard" element = {<DashBoard />} />
            <Route path ="/myProfile" element = {<MyProfile />} />
          </Routes>
       </BrowserRouter>
     </div>
  );
}

export default App;
