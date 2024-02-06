import React from 'react'
import Aide from './Aide/Aide'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Aide/Contact'
import Help from './Aide/Help'
import Terms from './Aide/Terms'

export default function Fullapp() {
  return (
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Aide />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/help' element={<Help />} />
      <Route path='/terms' element={<Terms />} />
     </Routes>
 </BrowserRouter>
  )
}
