import { useState } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './Component/Home'
import Toprated from './Component/Toprated'
import Upcoming from './Component/Upcoming'

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/toprated' element={<Toprated />} />
        <Route exact path='/upcoming' element={<Upcoming />} />
      </Routes >
    </>
  )
}

export default App
