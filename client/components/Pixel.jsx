import React from 'react'

const randomColour = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`


export default class Pixel extends React.Component {

  render() {
    return <div style={this.state.styleOne}></div >
  }

  // const randomColour = () => {
  //   return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  // }

  constructor(props) {
    super(props)
    this.state = {
      styleOne: {
        backgroundColor: randomColour(),
        height: '100px',
        width: '100px'
      }
    }


  }
}



