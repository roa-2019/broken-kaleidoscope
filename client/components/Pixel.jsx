import React, { Component } from 'react'

class Pixel extends Component {
  constructor() {
    super()

    this.state = {
      backgroundColor: this.randomHexColor(),
    }
  }

  randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  handleClick = () => {
    this.setState({
      backgroundColor: this.randomHexColor()
    })
  }

  render() {
    return (
      <div style={{
        height: '100px',
        width: '100px',
        cursor: 'pointer',
        backgroundColor: this.state.backgroundColor
      }} onClick={this.handleClick}>
      </div>
    )
  }
}

export default Pixel