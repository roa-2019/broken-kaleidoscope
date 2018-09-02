import React from 'react'

// Create a random hex colour.
// It's not important to understand _exactly_ how this works right now, since this challenge is
// mostly just about setting and changing component state. We use it in the same way we might use
// Knex: it accomplishes a task for us. Try playing with the function in the Node REPL to see it in
// action.
const randomColour = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`

const width = 20
const height = width

export default class Pixel extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      style: {
        width,
        height,
        backgroundColor: randomColour()
      }
      // Uncomment this to play with changing the colours every `n` seconds
      // update: setInterval(this.changeColour, 1000)
    }
  }

  changeColour = () => {
    const style = {
      width,
      height,
      backgroundColor: randomColour()
    }

    this.setState({
      style
    })
  }

  render () {
    const { style } = this.state
    return (
      <div
        onClick={() => this.changeColour()}
        onMouseEnter={() => this.changeColour()}
        style={style} />
    )
  }
}
