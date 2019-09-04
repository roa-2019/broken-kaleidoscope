import React from 'react'
// import Pixel from './Pixel'
import request from 'superagent'


// const App = () => {
//   return (
//     <div>React development has begun!</div>
  
//   )
// }

class App extends React.Component {
  constructor(props){
    super(props)   
    this.state = {
      quote:  "i'm a quote"
    }
    this.getQuote=this.getQuote.bind(this)
  }
  getQuote () {
    request.get('https://api.kanye.rest/')
    .then(result => {
    this.ListeningStateChangedEvent({
      quote: result.body.quote
    })
  })
  }
    toggleVis() {
    this.setState ({
      isVisible: this.state.isVisible

    })
  }
    render() {
      return(
        <React.Fragment>
          <div> 
        {this.state.isVisible && <h1> {this.state.quote}</h1>}
        <button onClick = {this.getQuote}> Click Me!</button>
        <button onClick={this.getQuote}>Click Me!</button>
        </div>




          {/* <Pixel />
          <Pixel />
          <Pixel />
          <Pixel />
          <Pixel />
          <Pixel />
          <Pixel /> */}

     
        </React.Fragment>
      )
    }
  }

export default App
