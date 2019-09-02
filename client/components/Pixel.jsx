import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          style: {
            height: 50,
            width: 50,
            backgroundColor: randomHexColor()
          }
      }
    }
    
    clickHandler = () => {
        this.setState({
            style: {
                height: 50,
                width: 50,
                backgroundColor: 'cornflowerblue'
            }
        })
    }

    dragYellow = () => {
        this.setState({
            style: {
                height: 50,
                width: 50,
                backgroundColor: 'yellow'
            }
        })
    }

    render() {
      return (
        <div style={this.state.style} onClick={this.clickHandler} onDragEnter={this.dragYellow}></div>
        // <div></div>
      )
    }
}



export default Pixel