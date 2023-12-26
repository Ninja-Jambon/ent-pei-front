import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Homeworks from './pages/Homeworks';
import Planning from './pages/Planning';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/homeworks" element={<Homeworks/>}/>
        <Route path="/planning" element={<Planning/>}/>
      </Routes>
    </BrowserRouter>
  );
}