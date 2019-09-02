import React, { Component } from 'react'


class Pixel extends Component {
  constructor() {
    super()

    this.state = {
      style: {
        height: '100px',
        width: '100px',
        backgroundColor: this.randomHexColor()
      }
    }
  }

  randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  render() {
    return (
      <div style={this.state.style}>

      </div>
    )
  }
}

export default Pixel