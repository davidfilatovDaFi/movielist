import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MoviePage from './pages/MoviePage/MoviePage'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import Favorite from './pages/Favorite/Favorite'
import { PersistGate } from 'redux-persist/integration/react'
import Loader from './components/Loader/Loader'
import Header from './components/Header/Header'


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader/>} persistor={persistor}>
        <BrowserRouter>
          <div className='container'>
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/movie' element={<MoviePage/>}/>
              <Route path='/favorite' element={<Favorite/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>

  )
}

export default App
