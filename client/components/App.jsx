import React from 'react'
import Pixel from './Pixel'

const App = () => {
  return (
  //[...Array(4000)].map((e, i) => <Pixel key={i} />)
  Array.from({length: 10000}, (v, i) => <Pixel key={i} />)
  )
}

export default App
