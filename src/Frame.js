import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { ButtonComponent } from './Pages/ButtonComponent'
import { CardComponent } from './Pages/CardComponent'
import { ColumnComponent } from './Pages/ColumnComponent'
import { Home } from './Pages/Home'
import { TypographyComponent } from './Pages/TypographyComponent'
import { Box } from './Style/Box'

const padded = {
  paddingTop: '2rem',
  paddingBottom: '2rem',
}

export const Frame = () => {
  return (
    <>
      <Navbar/>
      <Box style={padded}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/button-component" element={<ButtonComponent />} />
          <Route path="/card-component" element={<CardComponent />} />
          <Route path="/typography-component" element={<TypographyComponent />} />
          <Route path="/column-component" element={<ColumnComponent />} />
        </Routes>
      </Box>
    </>
  )
}
