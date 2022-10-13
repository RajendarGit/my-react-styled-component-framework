import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { ButtonComponent } from './Pages/ButtonComponent'
import { CardComponent } from './Pages/CardComponent'
import { ColumnComponent } from './Pages/ColumnComponent'
import { Home } from './Pages/Home'
import { TypographyComponent } from './Pages/TypographyComponent'
import { Main } from './Style/Main'

export const Frame = () => {
  return (
    <>
      <Navbar/>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/button-component" element={<ButtonComponent />} />
          <Route path="/card-component" element={<CardComponent />} />
          <Route path="/typography-component" element={<TypographyComponent />} />
          <Route path="/column-component" element={<ColumnComponent />} />
        </Routes>
      </Main>
    </>
  )
}
