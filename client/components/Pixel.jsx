import React from 'react'

class Pixel extends React.Component {
  constructor(props) {
    super(props)
    // const randHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    this.state = {
      style: {
        width:'20px', 
        height:'20px', 
        backgroundColor: 'black',
      },
      colorList: ['black', 'white', 'red', 'blue', 'yellow', 'purple', 'orange', 'cornflowerblue'],
      colorIndex: 0
    }
    // this.clickHandler()
  }
  
  render () {
    return (
      <div onClick={this.forwardColor} onDragEnter={this.forwardColor}  onContextMenu={this.backColor} style={this.state.style}></div>
    )
  }

  forwardColor = () => {
    let colors = this.state.colorList
    let currentColor = this.state.colorIndex
    let newColor = ''

    if( colors.length-1 == currentColor){
      newColor = colors[0]
      currentColor = 0
    } else {
      newColor = colors[currentColor + 1]
      currentColor += 1
    }
    this.setState({
      style: {
        width:'20px', 
        height:'20px',
        backgroundColor: newColor
      },
      colorIndex: currentColor
    })
    
  }
  backColor = (e) => {
    e.preventDefault()
    let colors = this.state.colorList
    let currentColor = this.state.colorIndex
    let newColor = ''

    if( currentColor == 0){
      newColor = colors[colors.length-1]
      currentColor = colors.length-1
    } else {
      newColor = colors[currentColor - 1]
      currentColor -= 1
    }
    this.setState({
      style: {
        width:'20px', 
        height:'20px',
        backgroundColor: newColor
      },
      colorIndex: currentColor
    })
  }

}

export default Pixel
