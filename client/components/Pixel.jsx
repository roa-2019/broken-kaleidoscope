import React from 'react'

export default class Pixel extends React.Component {



  constructor(props) {
    super(props)


    this.state = {
      style: {
        height: '5px',
        width: '5px',
        backgroundColor: this.randomHexColor()
      }
    }
  }

  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  clickHandler = () => {
    this.setState({
      style: {
        height: '5px',
        width: '5px',
        backgroundColor: this.randomHexColor()
      }
    })
  }

  mouseOver = () => {
    this.setState({
      style: {
        height: '5px',
        width: '5px',
        backgroundColor: 'ForestGreen'
      }
    })
  }

  rightClick = event => {
    event.preventDefault()
    this.setState ({
      style: {
        height: '5px',
        width: '5px',
        backgroundColor: 'Black'
      }
    })
  }

  doubleClick = () => {
    this.setState({
      style: {
        height: '5px',
        width: '5px',
        backgroundColor: 'White'
      }
    })
  }

  mouseDrag = () => {
    this.setState({
      style: {
        height: '5px',
        width: '5px',
        backgroundColor: 'Yellow'
      }
    })
  }

  render() {
    return (
      <div style={this.state.style} onClick={this.clickHandler} onMouseEnter={this.mouseOver} onContextMenu={this.rightClick} onDoubleClick={this.doubleClick} onDragEnter={this.mouseDrag}></div>
    )
  }
}