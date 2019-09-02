import React from 'react'
import Pixel from './Pixel'

const App = () => {
  let pixels = []
  for (let i = 0; i < 2256; i++) {
    pixels.push(<Pixel />)

  }
  return (
    <React.Fragment>
      {pixels}
    </React.Fragment>
  )
}

export default App
