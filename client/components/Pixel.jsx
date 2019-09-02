import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`


class Pixel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        height: '20px',
        width: '20px',
        backgroundColor: randomHexColor(),
      }
    }
    this.mouseOverHandler = this.mouseOverHandler.bind(this)
    this.contextHandler = this.contextHandler.bind(this)
  }

  mouseOverHandler = evt => {
    this.setState({
      style: {
        height: '20px',
        width: '20px',
        backgroundColor: randomHexColor(),
      }
    })
  }

  contextHandler = evt => {
    console.log('click')
    this.setState({
      style: {
        height: '20px',
        width: '20px',
        backgroundColor: 'black',
      }
    })
  }

  render() {
    return (
      
        <div onMouseOver={this.mouseOverHandler}
        onContextMenu={this.contextHandler}
         style={this.state.style}>
        </div>
      
    )
  }
}

export default Pixel