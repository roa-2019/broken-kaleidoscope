import React from 'react'
import request from 'superagent'

import Pixel from './Pixel'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dumbQuote: ''
    }
    this.getDumbQuote = this.getDumbQuote.bind(this)
  }

  getDumbQuote() {
    request.get('https://api.kanye.rest')
      .then(result => {
        this.setState({
          dumbQuote: result.body.quote
        })
      })
  }

render () {
    return <div id="app">
      <h1>Now with Kanye quotes for some reason</h1>
      <button onClick={this.getDumbQuote}>Why would you click this</button>
      <h2>{this.state.dumbQuote}</h2>
      {Array.from({length: 10}, (pixel, i) => <Pixel key={i}/>)}
    </div>
  }
}

// const App = () => {
//   return <div>
//     {Array.from({length: 10}, (pixel, i) => <Pixel key={i}/>)}
//   </div>
// }

export default App
