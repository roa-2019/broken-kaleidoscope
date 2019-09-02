import React from 'react'

class Pixel extends React.Component {
    constructor (props) {
        super(props)

        

        this.state = {
            style: {
                height: 10,
                width: 10,
                backgroundColor: randomHexColor(),
            }   
        }
    }

    clickHandler = evt => {
        this.setState({
            style:{
                height: 10,
                width: 10,
                backgroundColor: randomHexColor()
            }
        })
    }

    render() {
        return <div onClick={this.clickHandler} style={this.state.style}></div>
    }
}

const randomHexColor = () =>
        `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

export default Pixel