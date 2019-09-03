import React, { Component } from 'react'

class Pixel extends Component {
  constructor() {
    super()

    this.state = {
      backgroundColor: this.randomHexColor(),
    }

    setInterval(() => this.setState({ backgroundColor: this.randomHexColor() }), 100);
  }

  randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  handleClick = () => {
    this.setState({
      backgroundColor: this.randomHexColor()
    })
  }

  handleMouseEnter = () => {
    this.setState({
      backgroundColor: '#c9ff99'
    })
  }

  handleContextMenu = () => {
    this.setState({
      backgroundColor: '#000000'
    })
  }

  handleDoubleClick = () => {
    this.setState({
      backgroundColor: '#ffffff'
    })
  }

  handleDragEnter = () => {
    this.setState({
      backgroundColor: '#fffd7d'
    })
  }

  render() {
    return (
      <div style={{
        height: '15px',
        width: '15px',
        cursor: 'pointer',
        backgroundColor: this.state.backgroundColor
      }}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onContextMenu={this.handleContextMenu}
        onDoubleClick={this.handleDoubleClick}
        onDragEnter={this.handleDragEnter}
      >
      </div>
    )
  }
}

export default Pixel