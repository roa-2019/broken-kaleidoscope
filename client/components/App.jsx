import React from 'react'



class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment>
        <div>React development has begun!</div>
        <Pixel />
      </React.Fragment>
    )
  }
}


class Pixel extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment>
        <div></div>
        <div style={{
          height: 20,
          width: 20,
          backgroundColor: cornflowerblue
        }} />
      </React.Fragment>
    )
  }
}



export default App
