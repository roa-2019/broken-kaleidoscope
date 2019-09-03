import React, { Component } from 'react'
import Pixel from './Pixel'

const App = () => {

  return (
    <div>
      {Array.from({ length: 1000 }, (pixel, i) =>
        <Pixel key={i} />)}
    </div>
  )
}

export default App

