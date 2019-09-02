import React from 'react'
import Pixels from './Pixels'

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
    <>
      {[...Array(160)].map((e, i) => <Pixels key={i}/>)}
      
    </>
  )
  }

}

export default App
