import React from 'react'
import Pixel from './Pixel'

const App = () => {
  return (
  [...Array(1000)].map((e, i) => <Pixel key={i} />)
  )
}

export default App
