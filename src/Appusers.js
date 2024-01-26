import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Drivers from './Projet/Stagiaire'
import DetailsDrv from './Projet/DetailsStg'

export default function Appusers() {
  return (
    <BrowserRouter> 
    <Routes>
        <Route path='/' element={<Drivers />} />
        <Route path='/details_drivers/:id'  element={<DetailsDrv />} />
    </Routes>
    </BrowserRouter>
  )
}
