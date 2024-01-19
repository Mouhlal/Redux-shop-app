import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListClient from './Exercice1/Composants/ListItems'
import UpdateItems from './Exercice1/Composants/UpdateItems'
import AddItems from './Exercice1/Composants/AddItems'
import RechercherItems from './Exercice1/Composants/RechercherItems'

export default function AppRx() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ListClient />} />
            <Route path="/update/:id" element={<UpdateItems />} />
            <Route path='/add' element={<AddItems />} />
            <Route path='/Recherche' element={<RechercherItems />} />
        </Routes>
    </BrowserRouter>
  )
}
