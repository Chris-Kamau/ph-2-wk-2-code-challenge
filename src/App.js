import React from 'react';
import YourBotArmy from './components/YourBotArmy';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar';
import './App.css';

function App() {
  return (
  <div>
    <BrowserRouter>
  <NavBar />
  <Routes>
  <Route path="/bot-army" element={<YourBotArmy />}>
  </Route>
  </Routes>
  </BrowserRouter>
  </div>
  );
  }
  
  export default App;





