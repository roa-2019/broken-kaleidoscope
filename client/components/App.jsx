import React from 'react'
import Pixel from './Pixel'



class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return [
      <React.Fragment>
        <Pixel />,
        <Pixel />,
        <Pixel />,
        <Pixel />,
        <Pixel />,
        <Pixel />
      </React.Fragment>
    ]
  }
}

// return Array.from({ length: 1000 }, (item,i) => <Pixel key={i}/>)

export default App
