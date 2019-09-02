import React from 'react'
import Pixels from './Pixels'

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
    <>
      {[...Array(100000)].map((e, i) => <Pixels key={i}/>)}
      
    </>
  )
  }

}

export default App
