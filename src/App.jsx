import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MoviePage from './pages/MoviePage/MoviePage'
import { Provider } from 'react-redux'
import { store } from './redux/store'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie' element={<MoviePage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>

  )
}

export default App
