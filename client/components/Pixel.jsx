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
      <div onDragEnter={this.clickHandler} style={this.state.style}></div>
    )
  }

  clickHandler = () => {
    // setInterval(() => {this.setState({
    //   style: {
    //     width: '50px',
    //     height: '50px',
    //     backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    //   }
    // })}, 1000)
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
    console.log(colors, currentColor, newColor)
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
