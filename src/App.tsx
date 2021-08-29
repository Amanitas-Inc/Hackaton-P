import React, { useState } from 'react'
import { GlobalStyles } from './styles/globalStyles'
import { Routes } from './routes'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Routes/>
    </ThemeProvider>
  )
}

export default App
