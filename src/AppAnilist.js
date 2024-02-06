import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './MyAnilist/Header'
import Home from './MyAnilist/Home'

export default function AppAnilist() {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    </BrowserRouter>
  )
}
