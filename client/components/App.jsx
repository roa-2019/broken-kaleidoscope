import React from 'react'
import Pixel from './Pixel'



class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return Array.from({ length: 10000 }, (item, i) => <Pixel key={i}/>)
  }
}



export default App
