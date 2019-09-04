import React from 'react'
import request from 'superagent'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      details: ''
    }
    this.getBeer = this.getBeer.bind(this)
  }

  getBeer() {
    request.get('https://api.punkapi.com/v2/beers/random')
      .then(result => {
        console.log(result.body[0].name)
        this.setState({
          details: result.body[0].name
        })
      })
  }

  render() {
    // console.log(this.state)
    return (
      <React.Fragment>
        <div>BrewDog!</div>
        <button onClick={this.getBeer}>Click for a random BrewDog Beer!</button>
        <div>{this.state.details}</div>
      </React.Fragment>
    )
  }
}

export default App
