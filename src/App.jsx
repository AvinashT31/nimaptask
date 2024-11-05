import { useState } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './Component/Home'
import Toprated from './Component/Toprated'
import Upcoming from './Component/Upcoming'
import Singlemovie from './Component/Singlemovie'
import Navbar from './Component/Global/Navbar'
import Searchmovie from './Component/Searchmovie'

function App() {

  return (
    <>
      {<Navbar />}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/toprated' element={<Toprated />} />
        <Route exact path='/upcoming' element={<Upcoming />} />
        <Route exact path='/singlemovie/:id' element={<Singlemovie />} />
        <Route exact path='/searchmovie/:movie' element={<Searchmovie />} />
      </Routes >
    </>
  )
}

export default App
