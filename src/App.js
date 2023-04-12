import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../src/main.js';
import Successful from "../src/successful.js"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/successful" element={<Successful />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;