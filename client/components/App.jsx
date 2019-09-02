import React, { Component } from 'react'
import Pixel from './Pixel'

const App = () => {

  return (
    Array.from({ length: 5000 }, (pixel, i) =>
     <Pixel key={i} />)
  )
}

export default App

