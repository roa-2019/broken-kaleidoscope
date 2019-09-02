import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`


class Pixel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        fontFamily: 'Time New Roman',
        height: '20px',
        width: '20px',
        backgroundColor: randomHexColor(),
      }
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler = evt => {
    this.setState({
      style: {
        fontFamily: 'Time New Roman',
        height: '20px',
        width: '20px',
        backgroundColor: randomHexColor(),
      }
    })
  }

  render() {
    return (
      <button onClick={() => this.clickHandler()}>
        <div style={this.state.style}>
        </div>
      </button>
    )
  }
}

export default Pixel