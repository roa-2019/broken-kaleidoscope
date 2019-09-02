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
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler = evt => {
    console.log('click')
    this.setState({
      style: {
        height: '20px',
        width: '20px',
        backgroundColor: randomHexColor(),
      }
    })
  }

  render() {
    return (
      
        <div onMouseOver={this.clickHandler} style={this.state.style}>
        </div>
      
    )
  }
}

export default Pixel