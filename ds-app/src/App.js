import React from 'react';
import './App.css';
import NavBar from './NavBar';
import StarSection from './star';
import Collect from './Collection';
import Login from './profile/LOgin';
import Foot from './Foot';
// import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <NavBar/>
      <StarSection/>
      <Collect/>
      <BrowserRouter>
      <Routes>
        <Route path='/'exact element={<Login/>}/>
      </Routes>
      </BrowserRouter>
        
      <Foot/>
    </div>
  );
}

export default App;
