import React from 'react'
import Pixel from './Pixel'

const App = () => {

const screed = []
for (let i = 0; i < 7000; i++) {
  screed.push(<Pixel />)
}
  return (
    <div>
      <Pixel />
      {screed}
    </div>
  )
}

export default App
