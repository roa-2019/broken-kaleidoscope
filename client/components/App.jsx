import React from 'react'

import Pixel from './Pixel'

const App = () => {
  // You could just as easily use traditional `for` loop syntax here:
  //
  //   const components = []
  //   for (let i = 0; i < 10000; i++) {
  //     components.push(<Pixel />)
  //   }
  //   return components
  //
  // Also notice that recent versions of React let you return an array from your component's render
  // function! You could even write (note the commas):
  //
  //   return [
  //     <Pixel />,
  //     <Pixel />,
  //     <Pixel />
  //   ]
  //
  return Array.from({ length: 10000 }, () => <Pixel />)
}

export default App
