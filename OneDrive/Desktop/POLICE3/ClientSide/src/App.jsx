import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/login';
import SearchPage from './component/SearchPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='Search' element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
