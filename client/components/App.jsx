import React from 'react'

import Pixel from './Pixel'

const App = () => {
  return  Array.from({length: 50000}, (pixel, i) => <Pixel key={i}/>)
}

export default App