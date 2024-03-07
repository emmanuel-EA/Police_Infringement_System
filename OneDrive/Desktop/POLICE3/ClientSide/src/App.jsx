import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/login';
import SearchPage from './component/SearchPage';
import Vehicle from './component/Vehicle';
import Owner from './component/Owner';
import Infringement from './component/Infringement';
import DrivingRecord from './component/DrivingRecord';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='Search' element={<SearchPage />} />
        <Route path='Vehicle' element={<Vehicle />} />
        <Route path='Owner' element={<Owner />} />
        <Route path='DrivingRecord' element={<DrivingRecord />} />
        <Route path='Infringement' element={<Infringement />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
