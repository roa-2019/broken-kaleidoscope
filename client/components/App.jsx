import React from 'react'

import Pixel from './Pixel'

const App = () => {
  return <div>
    {Array.from({length: 10}, (pixel, i) => <Pixel key={i}/>)}
  </div>
}

export default App