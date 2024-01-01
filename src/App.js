import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Whoweare from './pages/Whoweare'
import Ourservices from './pages/Ourservices'
import Contact from './pages/Contact'
import Getintouch from './pages/Getintouch'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Whoweare' element={<Whoweare/>}/>
      <Route path='/Ourservices' element={<Ourservices/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Getintouch' element={<Getintouch/>}/>
    </Routes>
    </>
  )
}

export default App