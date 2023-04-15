import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MoviePage from './pages/MoviePage/MoviePage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie' element={<MoviePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
