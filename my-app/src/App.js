import './App.css';

import React from 'react'

import Lobby from './Components/Lobby.js'
import Home from './Components/Home.js'

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lobby/>}>
          <Route path="/home" element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
